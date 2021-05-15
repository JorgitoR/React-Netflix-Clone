import React, {useState, useEffect} from 'react'
import './Nav.css';

function Nav(){

	const [show, handleShow] = useState(false);

	//when scroll is a 100px (down in page) we add the navbar visibility
	//if not remove visibility on navbar


	useEffect(()=>{
		window.addEventListener("scroll", ()=>{
			if(window.scrollY > 100){
				handleShow(true);
			}
			else handleShow(false);
		});
		return ()=> {
			window.removeEventListener("scroll");
		};	
	}, []);

	return (


	)

}