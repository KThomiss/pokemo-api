import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import LoadingIndicator from "../common/LoadingIndicator";

export default function ListOfPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(function () {
    async function getPokemon() {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setPokemon(json.results);
        setFilteredPokemon(json.results);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPokemon();
  }, []);

  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    const searchResults = filteredPokemon.filter(function (pokemon) {
      if (pokemon.name.toLowerCase().includes(search)) {
        return true;
      }
    });
    setPokemon(searchResults);
    // eslint-disable-next-line
  }, [search]);

  function filterInput(e) {
    setSearch(e.target.value);
  }

  if (loading) return <LoadingIndicator />;

  if (error) {
    return <div className="error">ERROR: An error occured</div>;
  }

  return (
    <div>
      <input value={search} onChange={filterInput} placeholder="Pokemon name" className="search-filter" />
      <ol className="pokemon-ol">
        {pokemon.map((list, index) => {
          return (
            <li key={index} className="pokemon-list">
              {list.name}
              <Link to={`/detail/${list.name}`} className="pokemon-link">
                Details
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
