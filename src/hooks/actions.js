export default async function getCharacters(dispatch, payload) {
    const response = await fetch("https://www.swapi.tech/api/people");
	const data = await response.json();

    dispatch({
        type: "setCharacters",
        payload: {characters: data.results}
    })
}