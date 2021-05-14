import React, {useState, useEffect} from 'react'
import axios  from './axios'
import request from './request'

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

	return (

		<header className="banner"
			style = {{
				backgroundSize: "cover",
				backgroundImage: `url(
				"https://image.tmdb.org/t/p/original/s{movie?.backdrop_path}"
				)`,
				backgroundPosition: "center center"
			}}
		>

			<div className="banner_contents">
			
			</div>
			{/*Background Image*/}
			{/*titulo*/}
			{/* div > 2 butons*/}
			{/*Description*/}
		</header>

	)
}

export default Banner