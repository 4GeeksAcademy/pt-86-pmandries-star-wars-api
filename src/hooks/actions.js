export async function getCharacters(dispatch, payload) {
    const response = await fetch("https://www.swapi.tech/api/people");
	const data = await response.json();

    dispatch({
        type: "setCharacters",
        payload: {characters: data.results}
    })
}

export async function getSpecies(dispatch, payload) {
    const response = await fetch("https://www.swapi.tech/api/species");
	const data = await response.json();

    dispatch({
        type: "setSpecies",
        payload: {species: data.results}
    })
}

export async function getStarships(dispatch, payload) {
    const response = await fetch("https://www.swapi.tech/api/starships");
	const data = await response.json();

    dispatch({
        type: "setStarships",
        payload: {starships: data.results}
    })
}