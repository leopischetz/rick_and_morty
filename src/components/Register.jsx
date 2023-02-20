import React from "react";
import { useState } from "react";
import Validation from "./validation";
import styled from "styled-components";

const DivForm = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
width: 50%;
background-color: rgba(255, 255, 255, 0.85);
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 2vw;
margin: auto;
border-radius: 5px;
height: 100%;
`;

const Formulario = styled.form`
display:flex;
flex-direction: column;
width: 50%;
justify-content: center;
`
const Boton = styled.button`
width: 50%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 2vw;
margin: auto;
`
const Label = styled.label`
margin-bottom: 5%;
margin-top: 5%;`

const Inp = styled.input`
height: 2vw;`

const Register = ({login})=>{
    

    const [userData, setUserdata] = React.useState({
        username:"",
        password: ""});
    
    const [errors, setErrors] = React.useState({});
    
    const handleInputChange = (event) =>{
        setErrors(
            Validation({
              ...userData,
              [event.target.name]: event.target.value})
          )
        setUserdata({
            ...userData,
            [event.target.name]: event.target.value}
        );      
    };  
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
        if(Object.keys(errors).length){         
        alert( "Debe llenar todos los campos correctamente");}
    }

    return(
        <DivForm>
            <Formulario onSubmit={handleSubmit}>
                            
                <Label for="username">Username</Label>

                <Inp name="username"
                placeholder="write your favorite email"
                type="text"
                onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.username}</p>

                
                <Label for="password">Password</Label>

                <Inp name="password"
                placeholder="write your password"
                type="text"
                onChange={handleInputChange} />
                <p style={{color:"red"}}>{errors.password}</p>

                <Boton type="submit">SUBMIT</Boton>                
            </Formulario>                           
            
                <p>Your password must be contain:</p>
                <ul>
                    <li>Between 6 and 10 characters.</li>
                    <li>One digit or number.</li>
                </ul>

                
                       
        </DivForm>        
    )
}

export default Register;