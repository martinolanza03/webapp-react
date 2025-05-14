import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import StarVote from "../components/StarVote.jsx";
import FormReview from "../components/FormReview.jsx";


function MoviesDetails() {

    const { id } = useParams();

    const [moviesId, setMoviesId] = useState([]);

    function getMoviesWithId() {
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => setMoviesId(response.data))
            .catch(error => console.error('Errore:', error));
    }

    useEffect(getMoviesWithId, []);

    const { title, abstract, image, genre, reviews, media_voto } = moviesId;

    return (<>
        <h1>Dettaglio Film</h1>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{abstract}</p>
        <p>{genre}</p>
        <h3>Media Voto</h3>
        <p>{media_voto} <StarVote vote={media_voto} /></p>
        <h2>Recensioni</h2>
        <ul>
            {reviews && reviews.map((review, index) => (
                <li key={index}>
                    <h4>{review.name}</h4>
                    <p>{review.text}</p>
                    <p>Voto: {review.vote} <StarVote vote={review.vote} /></p>
                </li>
            ))}
        </ul>

        <section>
            <FormReview movie_id={id} refreshMovie={getMoviesWithId} />
        </section>

    </>)
}

export default MoviesDetails;