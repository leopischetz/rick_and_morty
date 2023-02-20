import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import styled from "styled-components";


const DivFavs = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 5%;
`


export default function Favorites(){
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/home");
      }

    return(
        <div>
            <div>
            <select onChange={(e) => dispatch(orderCards(e.target.value))}>
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>
            <select onChange={(e) => dispatch(filterCards(e.target.value))}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="Unknown">Unknown</option>
            </select>
            </div>
            
            <DivFavs>
            {myFavorites.map((elem) => (
                 <Card
                    name={elem.name}
                    species={elem.species}
                    gender={elem.gender}
                    image={elem.image}
                    id={elem.id}
                    onClose={() => alert("Para eliminar de favoritos, toca el corazon")}
                     />
                   ))}
            </DivFavs>
            <button onClick={handleClick}>Back to Home</button>
        </div>
    )
}