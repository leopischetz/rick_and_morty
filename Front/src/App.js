import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import PnotF from './components/error';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { deleteFavorite } from './redux/actions';
import { useSelector, useDispatch } from "react-redux";


function App () {

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }

  function logout(){
    setAccess(false);
    navigate("/");
  }

 useEffect(() => {
  if(location.pathname !=="/"){
  !access && navigate('/register');}
}, [access]);

  const onSearch = (character) =>{
     fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          console.log(characters)
       } else {
          window.alert('No hay personajes con ese ID');
       }
    })
    if(location.pathname !== "/home"){
      navigate("/home");
    }
  };



  function onClose(id){
    setCharacters(
      characters.filter((character) => character.id !== id)
    ) 
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !=="/" && 
      location.pathname !=="/register" &&      
      <Nav onSearch = {onSearch} logout ={logout} />}
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register login={login} />} />
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About />} />
        <Route path= "/detail/:detailId" element={<Detail />} />
        <Route path= "*" element={<PnotF />} />
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>          
    </div>
  )
}

export default App


