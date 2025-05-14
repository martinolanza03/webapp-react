import { useState } from "react";
import axios from "axios";

function FormReview({ movie_id }) {

    const initialRreview = {
        name: '',
        text: '',
        vote: 1
    }

    const [formData, setFormData] = useState(initialRreview);

    const setFildValue = (e) => {
        const { name, value } = e.target;

        let currentValue = value;
        if (name === 'vote') {
            currentValue = parseInt(value);
        }

        setFormData({
            ...formData,
            [name]: currentValue
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3000/movies/${movie_id}/reviews`, formData)
            .then(response => {
                console.log('Recensione inviata con successo:', response.data);
                setFormData(initialRreview);
            })
            .catch(error => {
                console.error('Errore durante invio della recensione:', error);
            });

    }

    return <>

        <div className="card">
            <h5 className="card-header">Aggiungi una recensione</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Inserisci Nome</label>
                        <input type="text" className="form-control" id="name" placeholder="Nome" name="name" value={formData.name} onChange={setFildValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">Inserisci il commento</label>
                        <textarea className="form-control" id="review" rows="3" placeholder="Recensione" name="text" value={formData.text} onChange={setFildValue}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Inserisci Il voto</label>
                        <input type="number" className="form-control" id="vote" min="1" max="5" name="vote" value={formData.vote} onChange={setFildValue} />
                    </div>
                    <button type="sumbmit" className="btn btn-primary">Invia</button>
                </form>
            </div>
        </div>

    </>
}

export default FormReview