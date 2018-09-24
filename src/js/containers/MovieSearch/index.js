import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    console.log('this is the', store)
    return{
        movie: store.search.movie,
        movieData: store.search.movieData,
        detail: store.search.detail
        
        
    };
    
}

export default connect(mapStoreToProps)(MovieSearchContainer);