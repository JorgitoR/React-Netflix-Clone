import React, {useState, useEffect} from 'react'
import axios  from './axios'
import request from './request'
import "./Banner.css"
function Banner(){

	const [movie, setMovie]= useState([]);

	useEffect(()=>{

		async function fetchData(){
			const requests = await axios.get(request.fetchNetflixOriginals)
			setMovie(
				requests.data.results[
					Math.floor(Math.random() * requests.data.results.length - 1)
				]
			);

			return requests

		}

		fetchData()	
	}, []);

	console.log(movie)

	function truncate(str, n){
		return str?.length > n ? str.substr(0, n-1) + "..." : str;
	}

	return (

		<header className="banner"
			style = {{
				backgroundSize: "cover",
				backgroundImage: `url(
				"https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
				)`,
				backgroundPosition: "center center"
			}}
		>

			<div className="banner_contents">
				<h1 className='banner_title'> 
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>

				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>

			</div>

			{/* Empty fade div with bottom fade effect */}
			<div className="banner--fadeBottom"></div>

			{/*Background Image*/}
			{/*titulo*/}
			{/* div > 2 butons*/}
			{/*Description*/}
		</header>

	)
}

export default Banner