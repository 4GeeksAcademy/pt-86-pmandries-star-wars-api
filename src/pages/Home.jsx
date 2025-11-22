import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Card } from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch, getCharacters} =useGlobalReducer();
  const [characters, setCharacters] = useState([]);

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
			<div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
				{characters?.map((character, index) => {
					return <Card key = {index} uid = {character.uid} name = {character.name} />
				})}
			</div>	
		</div>
	);
}; 