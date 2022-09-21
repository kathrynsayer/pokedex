import { useState, useEffect } from "react";
import { filterSinglePokemonByName, getListOf, getPokemonStats } from "../helpers/pokemon.helpers";
import { Link } from "react-router-dom";

function GroupPokemonPage(props) {
    let [list, setList] = useState([]);
    let [searchNames, setSearchNames] = useState("");

    function getPokemon() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((groupPokemon) => setList(groupPokemon))
            .catch((err) => console.error(err));
    }


    useEffect(() => {
        getPokemon();
    }, []);

    let singlePokemonByName = filterSinglePokemonByName(list, searchNames);
    let names = getListOf(list, "name");
    let { avg_score, latest, total } = getPokemonStats(singlePokemonByName);

    return (
        <div>
            <h1>Pokemon</h1>
            <form>
                <label htmlFor="searchNames">Filter By Name</label>
                <select
                    name="searchNames"
                    id="searchNames"
                    value={searchNames}
                    onChange={(e) => setSearchNames(e.target.value)}
                >
                    <option value="">All</option>
                    {names.map((name, idx) => {
                        return (
                            <option key={name + idx} value={name}>{name}</option>
                        );
                    })}
                </select>
            </form>
            <div>
                <div>
                    <span>Total</span> 
                    <span>{total}</span>
                </div>
                <div>
                    <span>Average Score</span>
                    <span>{avg_score.toFixed(2)}</span>
                </div> 
                <div>
                    <span>Latest</span>
                    <span>{latest}</span>
                </div>
            </div>
            <ul>
                {singlePokemonByName.map((pokemon) => {
                    return <li key={pokemon.id}>
                        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.title}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
}
export default GroupPokemonPage;