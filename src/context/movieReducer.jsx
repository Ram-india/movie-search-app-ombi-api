const movieReducer = (state, action) => {

    switch(action.type){
        case 'SET_MOVIES':
            return{
                ...state,
                movies : action.payload,
            };
        case 'ADD_TO_FAVORITES':
            return{
                ...state,
                favorites:[state.favorites, action.payload],
            };
        case 'REMOVE_FROM_FAVORITES':
            return{
                ...state,
                favorites:state.favorites.filter(
                    (movie)=>movie.id !== action.payload
                ),
            };  
        case 'SET_FILTER':
            return{
                ...state,
                filter:action.payload,
            };
        default:
            return state;          
    }
}

export default movieReducer;