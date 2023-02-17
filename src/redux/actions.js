import { ADD_CHARACTER, ORDER, DELETE_CHARACTER, FILTER } from "./types";

export function addFavorite(character){
    return{
        type: ADD_CHARACTER,
        payload: character,
    };
};

export function deleteFavorite(id) {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    };
};

export const filterCards =(status)=>{
    return {
        type: FILTER,
        payload: status
    }
}

export const orderCards = (id) =>{
    return {
        type: ORDER,
        payload: id
    }
}

