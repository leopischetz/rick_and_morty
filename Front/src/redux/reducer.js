import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
};

export default function reducer (state = initialState, { type, payload }) {
    switch(type){
        case ADD_CHARACTER:
            return{
                ...state,
                // allCharacters: [...state.allCharacters, payload],
                // myFavorites: [...state.myFavorites, payload],
                myFavorites: payload,
                allCharacters: payload,
                errors: {},
            };
        case DELETE_CHARACTER:
            return{
                // myFavorites: state.myFavorites.filter((personaje) => personaje.id !== payload),
               ...state,
               myFavorites: payload,
               errors: {}, 
            };
        case FILTER:
            const filteredCharacters = state.allCharacters.filter(character => character.gender === payload);
            return{
                ...state,
                myFavorites: filteredCharacters
            };
        case ORDER:
            const sorted = state.myFavorites.sort((a, b) => {
                if (payload === "descendente") {
                  if (a.id < b.id) return -1;
                  else if (b.id < a.id) return 1;
                } else {
                  if (a.id < b.id) return 1;
                  else if (b.id < a.id) return -1;
                }
              });
              return {
                ...state,
                myFavorites: [...sorted],
              };
            case "GET_FAVS":
              return {
                ...state,
                myFavorites: payload,
                errors: {},
              };
            case "ERROR":
              return {
                ...state,
                errors: payload,
              };  
        default: 
            return{...state};
    }

}