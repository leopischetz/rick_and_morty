import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Detail = () =>{

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    const handleClick = ()=>{
      navigate("/home");
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
        <div>
            <button onClick={handleClick}>Back to Home</button>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.specie}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail;

