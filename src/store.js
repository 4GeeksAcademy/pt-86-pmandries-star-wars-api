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

      const { item, favorited } = action.payload

      if (favorited) {
        sessionStorage.setItem("favorites", [...store.favorites, item])
        return {
          ...store,
          favorites: [...store.favorites, item]
        };
      } else {
        let newFavorites = store.favorites?.filter((favorites, item) => {
          if (item != favorited) return favorites
        })
        sessionStorage.setItem("favorites", newFavorites)
        return {
        ...store,
        favorites: newFavorites
      }};
      
    default:
      throw Error('Unknown action.');
  }    
}
