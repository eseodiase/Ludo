import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="*" element={<NoPage />} />
  </Route>
  </Routes>
  </BrowserRouter>
  );


function d(c){
          return document.querySelector(c);
      }

		window.onLoad = function(){
		    
 async function fetchData(song, artist){
       const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1772c9ca1emshf15e2a4b58652a7p1b97c5jsnab1460cddb87',
		'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com'
	}
};

fetch(`https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`, options)

	.then(response => response.json())
    .then(response => d("#lyrics").innerHTML = (response.name, response.lyrics))
	.catch(err => console.error(err));
	
    
 }    
const inputRef = d("#search-song") 
const inputRef2 = d("#search-artist") 
		 
  fetchData("hello", "adele")
	
inputRef2.addEventListener("search", () =>{
	fetchData(inputRef.value, inputRef2.value)
		    
		 })

		}

  }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);
