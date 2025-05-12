import { Link } from "react-router-dom";

function MoviesCard({ movie }) {

    const { title, abstract, image } = movie;

    return (
        <div className="card" >
            <img src={image} className="card-img-top w-50 p-3" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{abstract}</p>
                <Link to={`${movie.id}`} movie={movie} className="btn btn-primary">Vai ai dettagli</Link>
            </div>
        </div>

    );
}

export default MoviesCard;