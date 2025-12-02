import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CharacterCard = (props) => {
	
    const {store, dispatch} = useGlobalReducer();

    const toggleFavorites = () => {
        dispatch({
            type: 'toggleFavorites',
            payload: {name: props.name, uid: props.uid, type: "people"}
        })
    }

    return (
        <div className="card" style={{"minWidth": "30rem"}}>
        <img className="card-img-top" src="https://media.timeout.com/images/105863223/1920/1440/image.webp" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}
                <i 
                    className={store.favorites?.some(element => element.name === props.name) ? "mx-2 fa-solid fa-heart" : "mx-2 fa-regular fa-heart"}
                    onClick = { () => toggleFavorites()}>
                </i></h5>
            <Link to = {"character_page/" + props.uid}>
                <button className = "btn btn-primary">More Info</button>
            </Link>
        </div>
    </div>
    );
};

export const SpeciesCard = (props) => {
	
    const {store, dispatch} = useGlobalReducer();

    const toggleFavorites = () => {
        dispatch({
            type: 'toggleFavorites',
            payload: {name: props.name, uid: props.uid, type: "species"}
        })
    }

    return (
        <div className="card" style={{"minWidth": "30rem"}}>
        <img className="card-img-top" src="https://media.timeout.com/images/105863223/1920/1440/image.webp" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}
                <i 
                    className={store.favorites.some(element => element.name === props.name) ? "mx-2 fa-solid fa-heart" : "mx-2 fa-regular fa-heart"}
                    onClick = { () => toggleFavorites()}>
                </i></h5>
            <Link to = {"species_page/" + props.uid}>
                <button className = "btn btn-primary">More Info</button>
            </Link>
        </div>
    </div>
    );
};

export const StarshipsCard = (props) => {
	
    const {store, dispatch} = useGlobalReducer();

    const toggleFavorites = () => {
        dispatch({
            type: 'toggleFavorites',
            payload: {name: props.name, uid: props.uid, type: "starships"}
        })
    }

    return (
        <div className="card" style={{"minWidth": "30rem"}}>
        <img className="card-img-top" src="https://media.timeout.com/images/105863223/1920/1440/image.webp" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}
                <i 
                    className={store.favorites.some(element => element.name === props.name) ? "mx-2 fa-solid fa-heart" : "mx-2 fa-regular fa-heart"}
                    onClick = { () => toggleFavorites()}>
                </i></h5>
            <Link to = {"starships_page/" + props.uid}>
                <button className = "btn btn-primary">More Info</button>
            </Link>
        </div>
    </div>
    );
};