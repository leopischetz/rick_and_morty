import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const randomChar = (event) =>{
    const random = Math.floor(Math.random()*826);
    console.log(random);
    return random;
}

const Nav = ({ onSearch, logout }) => {

  return(
        <nav>
            <Link to = "/about">About</Link>
            <Link to = "/home">Home</Link>
            <Link to = "/favorites">My Favorites</Link>
            <button onClick={logout}>Logout</button>
            <button onClick={() => onSearch(randomChar())}>Random</button>
            <SearchBar onSearch ={onSearch} />    
        </nav>
    )
}

export default Nav;
