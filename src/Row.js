import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css";

import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";


const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({title, fetchUrl, isLargeRow}){

	const [movies, setMovies] = useState([]);

	const [trailerURL, setTrailerURL] = useState("");

	useEffect(()=> {

		async function fetchData(){
			const request = await axios.get(fetchUrl);
			console.log(request.data.results);
			setMovies(request.data.results)
			return request;

		}
		fetchData();
	}, [fetchUrl]);

	console.table(movies)

	const opts = {

		height:"390",
		width: "100%",
		playerVars: {
			//https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},

	};

	//when user clicks on the movie picture
	const handleClick = (movie) => {
		//if the trailer is found clear the url
		if (trailerURL){
			setTrailerURL("");
		}else{
			// search for movie trailer full url
			movieTrailer(movie?.name || "")
				.then((url) => {
          			// https://www.youtube.com/watch?v=aSØDÆømlsdæ
          		const urlParams = new URLSearchParams(new URL(url).search); // urlParams gives us everthing after the ?
          		setTrailerURL(urlParams.get("v")); //urlParams gives us everything after v=
         		 // Displays error message if unable to find url
        		})
        		.catch((error) => console.log(error));
    }
	};
	


	return (

		<div className='row'>
			<h2>{title}</h2>
			<div className='row_posters'>
			{/*Poster*/}

			{movies.map(movie =>(
				
				<img 
					key={movie.id}
					className={`row__poster ${isLargeRow && "row__posterLarge"}`}
					onClick ={()=> handleClick(movie)}
					src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
					alt={movie.name}/>
			))}

			</div>

      	{/* Embedding youtube movie trailers to show */}
      	{trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
		</div>
	)

}

export default Row