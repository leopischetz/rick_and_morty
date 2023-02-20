import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStiled = styled.nav`
display: flex;
justify-content: space-between;
background-color: rgba(255, 255, 255, 0.85);
padding: 1.5%;
border-radius: 1.5%;
`
const Boton = styled.button`
width: 10%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 1.2vw;
border-radius: 5%;
`
const Texto = styled.p`
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 1.5vw;
margin: auto;
`

const randomChar = (event) =>{
    const random = Math.floor(Math.random()*826);
    console.log(random);
    return random;
}

const Nav = ({ onSearch, logout }) => {

  return(
        <NavStiled>
            <Link to = "/about"><Texto>About</Texto></Link>
            <Link to = "/home"><Texto>Home</Texto></Link>
            <Link to = "/favorites"><Texto>My Favorites</Texto></Link>
            <SearchBar onSearch ={onSearch} />    
            <Boton onClick={() => onSearch(randomChar())}>Random</Boton>
            <Boton onClick={logout}>Logout</Boton>            
        </NavStiled>
    )
}

export default Nav;
