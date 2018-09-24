import { combineReducers } from 'redux';
import SearchReducer from './containers/MovieSearch/searchReducer'

const rootReducer = combineReducers({
// add reducers
    search: SearchReducer
}); 

export default rootReducer;
