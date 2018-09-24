import React from 'react';
import { getMovieName, getMovieData, getMovie } from './searchActions.js';
import { Link } from 'react-router-dom';



class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.onButtonSearch = this.onButtonSearch.bind(this);
    this.getLinkId = this.getLinkId.bind(this);
    
   
    
  }
  handleSearchInput(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getMovieName(value));
  }

  onButtonSearch(event){

    const { dispatch } = this.props;
    const { movie } = this.props;
    dispatch(getMovieData(movie));
    
    const { movieData } = this.props;
    console.log('this is a book',movieData);

  }

  getLinkId(id){
    const { dispatch } = this.props;

    dispatch(getMovie(id));
  
  }

  
  
  render() {
    const { movieData }=this.props;
    return (
    <div className='container'>
        <div className='card'>
          <div className='card-title text-center'>Lets Search Some Movies!</div>
        </div>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="What movie was I thinking about again?" id="mail" name="email" onChange={ this.handleSearchInput } />
        <div className="input-group-append">
            <button type="button" className='btn btn-success' onClick={ this.onButtonSearch }>Go Movie!</button>
        </div>
        </div>
            
              { 
                movieData ? movieData.map((list, index) => {
                 return (
                  <li key={index} >
                                <div className='card'>
                                    <div className='card-header'>Movie Details</div>
                                    <div className='card-body'>
                                        <div className='col'>
                                            <img className='rounded float-left img-thumbnail' src={list.Poster} />
                                        </div>
                                        <div className='col'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <p className='card-text>'>Movie Title: {list.Title}</p>
                                                    <p className='card-text>'>release year: {list.Year}</p>
            
                                                    <Link to={`/movie/${list.imdbID}`} className='btn btn-outline-secondary' type='button'
                                                        value={list.imdbID} onClick={() => this.getLinkId(list.imdbID)} >
                                                        More Information </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>)

                }):<p>Nothing Found</p>


              }
    

    </div>
                
    
    );
  }
}

export default MovieSearchContainer;