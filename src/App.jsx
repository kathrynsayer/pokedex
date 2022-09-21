import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HomePage, GroupPokemonPage, SinglePokemonPage } from "./pages";

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="groupPokemon">Group of Pokemon</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="groupPokemon" element={<GroupPokemonPage />} />
        <Route path="groupPokemon/:id" element={<SinglePokemonPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
