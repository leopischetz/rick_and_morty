import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Validation from "./validation";

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name="username"
                placeholder="write your favorite email"
                type="text"
                onChange={handleInputChange} />
                
                <p>{errors.username}</p>

                <label>Password</label>
                <input name="password"
                placeholder="write your password"
                type="text"
                onChange={handleInputChange} />

                <p>{errors.password}</p>

                <p>Your password must be contain:</p>
                <ul>
                    <li>Between 6 and 10 characters.</li>
                    <li>One digit or number.</li>
                </ul>
                <button type="submit">SUBMIT</button>                
            </form>        
        </div>        
    )
}

export default Register;