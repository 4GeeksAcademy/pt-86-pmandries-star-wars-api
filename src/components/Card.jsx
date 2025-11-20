import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react';

export const Card = (props) => (
	<div className="card" style={{"minWidth": "30rem"}}>
        <img className="card-img-top" src="https://media.timeout.com/images/105863223/1920/1440/image.webp" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);