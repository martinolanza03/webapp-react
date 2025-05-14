function FormReview() {
    return <>

        <div class="card">
            <h5 class="card-header">Aggiungi una recensione</h5>
            <div class="card-body">
                <div class="mb-3">
                    <label htmlFor="name" class="form-label">Inserisci Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="Nome" />
                </div>
                <div class="mb-3">
                    <label htmlFor="review" class="form-label">Inserisci il commento</label>
                    <textarea class="form-control" id="review" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label htmlFor="vote" class="form-label">Inserisci Il voto</label>
                    <input type="number" class="form-control" id="vote" />
                </div>
                <button type="button" class="btn btn-primary">Invia</button>
            </div>
        </div>

    </>
}

export default FormReview