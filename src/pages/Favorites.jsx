import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Card } from "../components/Card.jsx";

export const Favorites = () => {

  const {store, dispatch } =useGlobalReducer();
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect ( () => {
    if (store.characters.length == 0) {
        getCharacters();
    }
  }, []);

  useEffect ( () => {
    setCharacters(store.characters)
  }, [store.characters])

    return (
        <div className="text-center mt-5">
            <h1>This is the Favorites Page</h1>
            <div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
                {characters?.map((character, index) => {
                    return <Card key = {index} uid = {character.uid} name = {character.name} />
                })}
            </div>	
        </div>
    );
}; 