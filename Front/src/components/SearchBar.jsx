import { useState } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";

const DivSearch = styled.div`
display: flex;`

const Boton = styled.button`
width: 30%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 1.2vw;
border-radius: 5%;
`

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState("");

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }
   
   return (  
      <DivSearch>
      <input type='search' value={character} onChange={handleChange} />
      <Boton onClick={() => onSearch(character)}>Agregar</Boton>
      </DivSearch>
   );
}
