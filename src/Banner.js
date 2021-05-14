import React, {useState} from 'react'
import axios  from './axios'
import request from './request'

function Banner(){

	const [movie, setMovie]= useState([]);

	useEffect(()=>{

		async function fetchData(){
			const request = await axios.get(request.fetchNetflixOriginals)
			console.log(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);

		}

		fetchData()

		//Math.floor(Math.random() * request.data.results.length - 1)
	}, []);


	return (

		<header>
			{/*Background Image*/}
			{/*titulo*/}
			{/* div > 2 butons*/}
			{/*Description*/}
		</header>

	)
}

export default Banner