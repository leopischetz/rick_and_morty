import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, logout }) => {

  return(
        <nav>
            <Link to = "/about">About</Link>
            <Link to = "/home">Home</Link>
            <Link to = "/favorites">My Favorites</Link>
            <button onClick={logout}>Logout</button>
            <SearchBar onSearch ={onSearch} />    
        </nav>
    )
}

export default Nav;
