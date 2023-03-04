import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Divgral = styled.div`
font-family: "Comic Neue";
background-color: rgba(255, 255, 255, 0.7);
font-size: 3vw;
border-radius: 1%;
margin-top: 2%;
color: black;
`
const Boton = styled.button`
width: 25%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
font-size: 2vw;
margin: auto;
border-radius: 5%;
`
const Divdatos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 1%;
`

const Detail = () =>{

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    const handleClick = ()=>{
      navigate("/home");
    }

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    return(
        <Divgral>
          <Divdatos>
            <div>
            <h2>{character?.name}</h2>
            <p>{character?.status}</p>
            <p>{character?.specie}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            </div>
            <div>
            <img src={character?.image} alt={character.name} />
            </div>
            </Divdatos>
            <Boton onClick={handleClick}>Back to Home</Boton>
        </Divgral>
    )
}

export default Detail;

