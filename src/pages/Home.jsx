import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Card } from "../components/Card.jsx"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer();
  const [people, setPeople] = useState([]);

  useEffect ( () => {
	getPeople();
  }, []);

//   useEffect(() => {
// 	console.log(people);
//   }, [people]);

  const getPeople = async() => {
	const response = await fetch("https://www.swapi.tech/api/people");
	const data = await response.json();
	setPeople(data.results);
  }

	return (
		<div className="text-center mt-5">
			<div className = "d-flex col-10 overflow-auto mt-5 mx-auto">
				{people?.map((person, index) => {
					return <Card key = {index} name = {person.name} />
				})}
			</div>	
		</div>
	);
}; 