import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWelcome = styled.div`
font-family: "Comic Neue";
background-color: rgba(255, 255, 255, 0.5);
font-size: 3vw;
border-radius: 1%;
`
const Boton = styled.button`
width: 25%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 2vw;
margin: auto;
border-radius: 5%;
`
const Welcome = ()=>{

    return(
        <DivWelcome>
        <h1>Welcome to Rick & Morty App</h1>
        <h3>Register and enjoy searching your favourites characters</h3>
        <Boton onClick><Link to = "/register">Register</Link></Boton>
        </DivWelcome>        
    )
}

export default Welcome;