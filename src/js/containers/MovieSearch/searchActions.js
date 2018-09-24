import React from 'react';
import axios from 'axios';

export function getMovieName(movieName){
    return{
        type:'GET_MOVIE_NAME',
        payload: movieName

    }
}


export function getMovieData(movieData){
    return{
        type:'GET_MOVIE_DATA',
        payload: axios
        .get(`https://www.omdbapi.com/?s=${movieData}&apikey=8730e0e`)
        .then(res =>{
            console.log('this is',res);
            return res.data;
            
        })
        
    }

}

export function getMovie(movieId) {
    const url = 'http://www.omdbapi.com/?i='+ movieId + '&apikey=8730e0e';
    return {
        type: 'GET_MOVIE_DETAIL',
        payload: axios.get(url)
    }
}