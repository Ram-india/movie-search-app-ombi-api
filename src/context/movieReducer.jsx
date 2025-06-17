const movieReducer = (state, action) => {

    switch(action.type){
        case 'SET_MOVIES':
            return{
                ...state,
                movies : action.payload,
            };
        case 'ADD_TO_FAVORITES':
            if (state.favorites.some(fav => fav.imdbID === action.payload.imdbID)) {
                return state; // already in favorites
              }
            return{
                ...state,
                favorites:[...state.favorites, action.payload],
            };
        case 'REMOVE_FROM_FAVORITES':
            return{
                ...state,
                favorites:state.favorites.filter(
                    (movie)=>movie.imdbID !== action.payload.imdbID
                ),
            };  
        case 'SET_FILTER':
            return{
                ...state,
                filter:action.payload,
            };
            case 'SET_QUERY':
                return {
                  ...state,
                  query: action.payload,
                };
          
              case 'SET_CURRENT_PAGE':
                return {
                  ...state,
                  currentPage: action.payload,
                };
          
              case 'SET_TOTAL_RESULTS':
                return {
                  ...state,
                  totalResults: action.payload,
                };
        default:
            return state;          
    }
}

export default movieReducer;