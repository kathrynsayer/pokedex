import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"; 



function SinglePokemonPage(props) {
    let [item, setItem] = useState({})

    let { id } = useParams();

    function getPokemon() {
        fetch(`"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"${id}`)
    .then((res) => res.json())
    .then((pokemon) => setItem(pokemon))
    .catch((err) => console.error(err));
    }

useEffect(() => {
    getPokemon()

}, []);

   return (
       <div>
 <div>
   <img src={`${item.image}`} alt={`${item.title} Poster`} />
 </div>
 <div>
   <h1>{item.title}</h1>
   {/* <p>
     Directed by {item.director}. Produced by {item.producer}.
   </p> */}
   {/* <p>
     The film was released in <strong>{item.release_date}</strong> and garnered
     a <strong>{item.rt_score}</strong> aggregate score on{" "} */}
     {/* <a
       href="https://www.rottentomatoes.com/"
       target="_blank"
       rel="noreferrer"
     >
       Rotten Tomatoes
     </a> */}
     {/* .
   </p> */}
   <h2>Description</h2>
   <p>{item.description}</p>
 </div>
</div>
   );

}

export default SinglePokemonPage;