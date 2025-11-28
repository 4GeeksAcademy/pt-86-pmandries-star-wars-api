import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const StarshipsPage = (props) => {
    const { uid } = useParams();
    const [starships, setStarships] = useState({});

    const getStarships = async () => {
        const response = await fetch("https://www.swapi.tech/api/starships/" + uid);
        const data = await response.json();
        setStarships(data.result.properties);
    }

    useEffect ( () => {
        getStarships();
      }, []);

    return (
        <div style = {{marginBottom: 100}}>
            <div className="card mt-3 mx-auto w-50 shadow p-3 mb-5 bg-white rounded">
                <div className = "contatiner text-center bg-light">
                    <h1>Starships Card</h1>
                </div>
                <img className="" src="https://media.timeout.com/images/105863223/1920/1440/image.webp" alt="Card image cap" />
                <div className = "p-5">
                    <div className = "">
                        <h3>Name: {starships.name}</h3>
                    </div>
                    <div className = "">
                        <h3>Cargo Capacity: {starships.cargo_capacity}</h3>
                    </div>
                    <div className = "">
                        <h3>Passengers {starships.passengers}</h3>
                    </div>
                    <div className = "">
                        <h3>Crew: {starships.crew}</h3>
                    </div>
                    <div className = "">
                        <h3>Model: {starships.model}</h3>
                    </div>
                    <div className = "">
                        <h3>Cost in Credits: {starships.cost_in_credits}</h3>
                    </div>
                    <div className = "">
                        <h3>Starship Class: {starships.starship_class}</h3>
                    </div>
                    <div className = "">
                        <h3>Hyperdrive Rating: {starships.hyperdrive_rating}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}; 