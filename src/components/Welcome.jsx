import { Link } from "react-router-dom";

const Welcome = ()=>{

    return(
        <div>
        <h1>Welcome to Rick & Morty App</h1>
        <h3>Register and enjoy searching your favourites characters</h3>
        <button onClick><Link to = "/register">Register</Link></button>
        </div>        
    )
}

export default Welcome;