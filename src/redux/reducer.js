import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: []
};

export default function reducer (state = initialState, { type, payload }) {
    switch(type){
        case ADD_CHARACTER:
            return{
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload],
            };
        case DELETE_CHARACTER:
            return{
                myFavorites: state.myFavorites.filter((personaje) => personaje.id !== payload),
            };
        case FILTER:
            const filteredCharacters = state.allCharacters.filter(character => character.gender === payload);
            return{
                ...state,
                myFavorites: filteredCharacters
            };
        case ORDER:
            const sortedCharacters = [...state.allCharacters].sort((a, b) => {
                if (payload === "Ascendente") {
                  return a.id - b.id;
                } else if(payload === "Descendente") {
                  return b.id - a.id;
                }
              });
            return{
                ...state,
                myFavorites: sortedCharacters
            };    
        default: 
            return{...state};
    }

}