import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
	
    // const [favorites, setFavorites] = useState(false);
    const {store, dispatch} = useGlobalReducer();

    // useEffect (() => {
    //     let favorited = store.favorites.filter((favorite) => {
    //         return favorite = props.name
    //     })
    //     if (favorited.length > 0) {
    //         setFavorites(true);
    //     }
    // })

    const toggleFavorites = () => {
        // setFavorites(!favorites);
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
                    className={store.favorites.some(element => element.name === props.name) ? "mx-2 fa-solid fa-heart" : "mx-2 fa-regular fa-heart"}
                    onClick = { () => toggleFavorites()}>
                </i></h5>
            <Link to = {"character_page/" + props.uid}>
                <button className = "btn btn-primary">More Info</button>
            </Link>
        </div>
    </div>
    );
};