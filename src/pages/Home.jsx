import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { CharacterCard, SpeciesCard, StarshipsCard } from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch, getCharacters, getSpecies, getStarships} =useGlobalReducer();
  const [characters, setCharacters] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect ( () => {
	if (store.characters.length == 0) {
		getCharacters();
	}
  }, []);

  useEffect ( () => {
	if (store.species.length == 0) {
		getSpecies();
	}
  }, []);

  useEffect ( () => {
	if (store.starships.length == 0) {
		getStarships();
	}
  }, []);

  useEffect ( () => {
	setCharacters(store.characters)
  }, [store.characters])

  useEffect ( () => {
	setSpecies(store.species)
  }, [store.species])

  useEffect ( () => {
	setStarships(store.starships)
  }, [store.starships])

	return (
		<div className="text-center mt-5">
			<div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
				{characters?.map((character, index) => {
					return <CharacterCard key = {index} uid = {character.uid} name = {character.name} />
				})}
			</div>	
			<div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
				{species?.map((species, index) => {
					return <SpeciesCard key = {index} uid = {species.uid} name = {species.name} />
				})}
			</div>
			<div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
				{starships?.map((starships, index) => {
					return <StarshipsCard key = {index} uid = {starships.uid} name = {starships.name} />
				})}
			</div>	
		</div>
	);
}; 