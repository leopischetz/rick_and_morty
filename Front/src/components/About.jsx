import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const DivAbout = styled.div`
color: black;
font-family: "Comic Neue";
background-color: rgba(255, 255, 255, 0.6);
`
const Boton = styled.button`
width: 30%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 2vw;
margin: auto;
border-radius: 2%;
`

const texto = `Esta aplicación es un trabajo integrador para el BootCamp de Soy Henry!, para la carrera de 
Fullstack Development. La misma hasta el momento recopila los conocimientos desarrollados en el M2 de la carrera, siendo
los más importantes hasta el momento React y Redux.
La misma está siendo desarrollada por Leonardo Iván Pischetz, estudiante oriundo de Argentina más precisamente 
San Luis Capital. Cabe destacar que Soy Henry! es su primera experiencia en el mundo del desarrollo web.`;

const reseña = `"Rick and Morty" es una serie animada de televisión creada por Justin Roiland y Dan Harmon. 
 La serie comenzó a emitirse en 2013 en el canal Adult Swim de Cartoon Network y actualmente cuenta con 5 temporadas 
 y un total de 41 episodios. La serie sigue las aventuras interdimensionales del científico Rick Sánchez y su nieto 
 Morty Smith mientras viajan a través del tiempo y el espacio.
La serie ha recibido varios premios y nominaciones, incluyendo un premio Primetime Emmy al mejor programa animado 
en 2018 y un premio Annie al mejor logro en animación de televisión en 2019. "Rick and Morty" ha sido elogiado por 
su humor ingenioso, su creatividad en la narración de historias y sus personajes complejos y bien desarrollados. 
La serie también ha generado una gran base de fans, que la ha convertido en una de las series de televisión más 
populares y de culto de los últimos años.`


const About = () =>{

    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/home");}

    return(
        <DivAbout>
            <h1>Rick & Morty App</h1>
            <h4>{texto}</h4>       
            <h4>{reseña}</h4>
            <Boton onClick={handleClick}>Volver al inicio</Boton>
        </DivAbout>
    )
}

export default About;