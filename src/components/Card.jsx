import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const DivCard = styled.div`
display: flex;
flex-direction: column-reverse;
background-color: rgba(255, 255, 255, 0.85);
border:3px solid black;
border-radius: 5%;
color: rgb(0, 200, 80);
font-family: "Comic Neue";
`
const DivName = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-left: 2%;
`
const DivDatos = styled.div`
display:flex;
justify-content: space-around;
font-size: 15px;
`
const Boton = styled.button`
background-color: red;
width: 40px;
height: 40px;
border-radius: 50%;
margin: 2%;
font-size: 30px;
`


export default function Card({name, species, gender, image, onClose, id}) {
   
   const [isFav, setFav] = React.useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();

   function handleFavorite() {
      if(isFav){
         setFav(false);
         dispatch(deleteFavorite(id));
      } else{
         setFav(true);
         dispatch(addFavorite({ name, species, gender, image, id }));
      }
   }

    
   React.useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setFav(true);
        }
      });
    }, [myFavorites]);
   
   return (
      <DivCard>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}

         <DivDatos>
         <h2>{species}</h2>
         <h2>{gender}</h2>  
         </DivDatos>
         <Link to={`/detail/${id}`}>                
         <img  src={image} alt={name} width="250px"/>
         </Link>
         <DivName>
         <h2>{name}</h2>
         <Boton onClick={onClose}>X</Boton>
         </DivName>
         
      </DivCard>

   );
}


