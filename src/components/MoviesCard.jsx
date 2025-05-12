function MoviesCard({ movie }) {

    const { title, abstract, image } = movie;

    return (
        <div className="card" >
            <img src={image} className="card-img-top w-50 p-3" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{abstract}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
}

export default MoviesCard;