import axios from "axios";
import { useState, useEffect, useContext } from "react";
import MoviesCard from "../components/MoviesCard";
import LoaderContext from "../context/LoaderContext.jsx";


function HomePage() {

    const [movies, setMovies] = useState([]);
    const { setLoading } = useContext(LoaderContext);

    function getMovies() {
        setLoading(true);
        axios.get('http://127.0.0.1:3000/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Errore:', error))
            .finally(() => setLoading(false));
    }

    useEffect(getMovies, []);


    return <>
        <h1>Home Page</h1>
        <div className="row">
            {movies.map(movie =>
                <div className="col col-md-4" key={movie.id}>
                    <MoviesCard movie={movie} />
                </div>

            )}
        </div>

    </>
}

export default HomePage;