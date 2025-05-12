import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage";
import MoviesDetails from "./pages/MoviesDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />

            <Route path="/books/:id" Component={MoviesDetails} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
