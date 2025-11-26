export const initialStore=()=>{
  return{
    message: null,
    characters: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'setCharacters':

      const { characters } = action.payload

      return {
        ...store,
        characters: characters
      };

    case 'setFavorites':

      const { favorites } = action.payload

      return {
        ...store,
        favorites: favorites
      };

    case 'toggleFavorites':

      const { name, uid, type } = action.payload

      if (!store.favorites.some(element => element.name === name)) {
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        };
      } else {
        let removedFavorites = store.favorites?.filter(favorites => favorites.name != name)
        return {
        ...store,
        favorites: removedFavorites
      }};
      
    default:
      throw Error('Unknown action.');
  }    
}
