import axios from "axios";
import { useState, useEffect } from "react";


function HomePage() {

    const [movies, setMovies] = useState([]);

    function getMovies() {
        axios.get('http://127.0.0.1:3000/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Errore:', error));
    }

    useEffect(getMovies, []);


    return <>
        <h1>Home Page</h1>
    </>
}

export default HomePage;