import { types } from './searchActions';
 
const defaultState = {
    movie: '',
    movieData:[],
    detail: {}

};

export default function SearchReducer(state = defaultState, action) {
   
    const { type, payload } = action;
    
    switch (type) {
        // Here in the case of the update description action 

        case 'GET_MOVIE_NAME': {
                
            return {
                // with all the previous state
                ...state,
                // but overwriting the description

                movie: payload
            };
        }

        
        case 'GET_MOVIE_DATA_FULFILLED':{
            console.log('payload-data',payload.Search);
            
            
            return {
                ...state,
                
                movieData: payload.Search
            
                
            }
        }
        case 'GET_MOVIE_DATA_REJECTED':{
            return {
            error:true
        }
        }

        case 'GET_MOVIE_DETAIL_FULFILLED':
            return {...state, detail: payload.data};

        default: {
            return state
        }
    }
}