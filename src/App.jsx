import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieSearch from "./components/MovieSearch"
import MovieDetails from "./components/MovieDetails"
import '../src/App.css'
//require('dotenv').config();



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
