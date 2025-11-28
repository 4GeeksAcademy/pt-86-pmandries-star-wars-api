import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SpeciesPage = (props) => {
    const { uid } = useParams();
    const [species, setSpecies] = useState({});

    const getSpecies = async () => {
        const response = await fetch("https://www.swapi.tech/api/species/" + uid);
        const data = await response.json();
        setSpecies(data.result.properties);
    }

    useEffect ( () => {
        getSpecies();
      }, []);

    return (
        <div style = {{marginBottom: 100}}>
            <div className="card mt-3 mx-auto w-50 shadow p-3 mb-5 bg-white rounded">
                <div className = "contatiner text-center bg-light">
                    <h1>Species Card</h1>
                </div>
                <img className="" src="https://media.timeout.com/images/105863223/1920/1440/image.webp" alt="Card image cap" />
                <div className = "p-5">
                    <div className = "">
                        <h3>Name: {species.name}</h3>
                    </div>
                    <div className = "">
                        <h3>Classification: {species.classification}</h3>
                    </div>
                    <div className = "">
                        <h3>Designation: {species.designation}</h3>
                    </div>
                    <div className = "">
                        <h3>Eye Colors: {species.eye_colors}</h3>
                    </div>
                    <div className = "">
                        <h3>Hair Colors: {species.hair_colors}</h3>
                    </div>
                    <div className = "">
                        <h3>Skin Colors: {species.skin_colors}</h3>
                    </div>
                    <div className = "">
                        <h3>Language: {species.language}</h3>
                    </div>
                    <div className = "">
                        <h3>Average Lifespan: {species.average_lifespan}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}; 