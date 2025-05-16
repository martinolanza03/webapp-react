import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage";
import MoviesDetails from "./pages/MoviesDetails";
import LoaderContext from "./context/LoaderContext.jsx";
import { useState } from "react";

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <>
      <LoaderContext.Provider value={{ loading, setLoading }}>
        <BrowserRouter>
          <Routes>

            <Route Component={DefaultLayout}>
              <Route path="/movies" Component={HomePage} />

              <Route path="/movies/:id" Component={MoviesDetails} />
            </Route>

          </Routes>
        </BrowserRouter>
      </LoaderContext.Provider>
    </>
  )
}

export default App
