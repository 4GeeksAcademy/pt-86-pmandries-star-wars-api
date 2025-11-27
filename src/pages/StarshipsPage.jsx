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
                    {/* <div className = "">
                        <h3>Birth Year: {character.birth_year}</h3>
                    </div>
                    <div className = "">
                        <h3>Gender: {character.gender}</h3>
                    </div>
                    <div className = "">
                        <h3>Eye Color: {character.eye_color}</h3>
                    </div>
                    <div className = "">
                        <h3>Hair Color: {character.hair_color}</h3>
                    </div>
                    <div className = "">
                        <h3>Skin Color: {character.skin_color}</h3>
                    </div>
                    <div className = "">
                        <h3>Height: {character.height}</h3>
                    </div>
                    <div className = "">
                        <h3>Mass: {character.mass}</h3>
                    </div> */}
                </div>
            </div>
        </div>
    );
}; 