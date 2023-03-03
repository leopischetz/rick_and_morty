import { ADD_CHARACTER, ORDER, DELETE_CHARACTER, FILTER } from "./types";
import axios from "axios";

export function addFavorite(character){
    return async function (dispatch){
        try {
            const resp = await axios.post(
                "http://localhost:3001/favs/create", character);
            return dispatch({
                type: ADD_CHARACTER,
                payload: resp.data
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error
            });            
        };
    };
    // return function(dispatch){
    //     axios.post("http://localhost:3001/favs/create", character)
    //     .then((response) =>{
    //         return dispatch({
    //             type: ADD_CHARACTER,
    //             payload: response.data,
    //         });
    //     });        
    // };
};

export function deleteFavorite(id) {
    return async function(dispatch) {
        try {
            const response = await axios.delete(
                "http://localhost:3001/favs/delete/" + id
            );
            return dispatch({
                type: DELETE_CHARACTER,
                payload: response.data,
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            })
        }
    }
    // return function (dispatch) {
    //     axios.delete("http://localhost:3001/favs/delete/"+ id)
    //     .then((response) =>{
    //         return dispatch({
    //             type: DELETE_CHARACTER,
    //             payload: response.data
    //         });
    //     });        
    // };
};

export function getFavorites(){
    return async function(dispatch){
        try {
            const response = await axios("http://localhost:3001/favs/get");
            return dispatch({
                type: "GET_FAVS",
                payload: response.data,
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            });
        };
    };
}

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

