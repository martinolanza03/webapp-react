function StarVote({ vote }) {
    console.log(vote);

    const maxVote = 5;

    return (
        <>
            {[...Array(maxVote)].map((_, index) => (
                index < vote ? <i key={index} className="fa-solid fa-star text-warning"></i> : <i key={index} className="fa-regular fa-star text-warning"></i>
            ))}
        </>
    );
}

export default StarVote;