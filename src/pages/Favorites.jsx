import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Card } from "../components/Card.jsx";

export const Favorites = () => {

  const {store, dispatch, getCharacters } =useGlobalReducer();
//   const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

//   useEffect ( () => {
//     if (store.characters.length == 0) {
//         getCharacters();
//     }
//   }, []);
    
// useEffect ( () => {
//         console.log(store.favorites.length, sessionStorage.getItem("favorites"))
//         if (store.favorites.length == 0) {
//             dispatch({
//         type: "setFavorites",
//         payload: {favorites: sessionStorage.getItem("favorites")}
//     })
//         }
//         setFavorites(store.favorites)
//         console.log(store)
//     }, []);

//   useEffect ( () => {
//     setFavorites(store.favorites)
//   }, [store.favorites]);
//   console.log(favorites)
    return (
        <div className="text-center mt-5">
            <h1>This is the Favorites Page</h1>
            <div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
                {favorites?.map((favorite, index) => {
                    return <Card key = {index} uid = {favorite.uid} name = {favorite.name} />
                })}
            </div>	
        </div>
    );
}; 