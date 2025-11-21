import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Card } from "../components/Card.jsx"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer();
  const [characters, setCharacters] = useState([]);

  useEffect ( () => {
	getCharacters();
  }, []);

  useEffect(() => {
  }, [characters]);

  const getCharacters = async() => {
	const response = await fetch("https://www.swapi.tech/api/people");
	const data = await response.json();
	setCharacters(data.results);
  }

	return (
		<div className="text-center mt-5">
			<div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
				{characters?.map((character, index) => {
					return <Card key = {index} name = {character.name} />
				})}
			</div>	
		</div>
	);
}; 