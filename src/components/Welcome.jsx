import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWelcome = styled.div`
font-family: "Comic Neue";
background-color: rgba(255, 255, 255, 0.5);
font-size: 3vw;
border-radius: 1%;
`

const Welcome = ()=>{

    return(
        <DivWelcome>
        <h1>Welcome to Rick & Morty App</h1>
        <h3>Register and enjoy searching your favourites characters</h3>
        <button onClick><Link to = "/register">Register</Link></button>
        </DivWelcome>        
    )
}

export default Welcome;