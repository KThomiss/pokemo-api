import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DETAIL_URL } from "../../constants/api";
import LoadingIndicator from "../common/LoadingIndicator";

function PokemonDetails() {
  const favoritesArray = JSON.parse(localStorage.getItem("favorites"));
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState(favoritesArray || []);

  let { name } = useParams();

  const url = DETAIL_URL + `${name}`;

  useEffect(
    function () {
      async function getPokemonDetails() {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setDetails(json);
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }

      getPokemonDetails();
    },
    [url]
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="error">ERROR: an error occured</div>;
  }

  const id = details.id;
  const type1 = details.types[0].type.name;
  const type2 = details.types[1] ? details.types[1].type.name : undefined;
  const pokename = details.name;
  const img = details.sprites.other["official-artwork"].front_default;
  const statname1 = details.stats[0].stat.name;
  const statname2 = details.stats[1].stat.name;
  const statname3 = details.stats[2].stat.name;
  const statname4 = details.stats[3].stat.name;
  const statno1 = details.stats[0].base_stat;
  const statno2 = details.stats[1].base_stat;
  const statno3 = details.stats[2].base_stat;
  const statno4 = details.stats[3].base_stat;

  localStorage.setItem("favorites", JSON.stringify(fav));

  const checkFav = fav.find((favorite) => {
    return favorite.id === details.id;
  });

  const removeFromFav = () => {
    setFav((current) =>
      current.filter((removeFav) => {
        return removeFav.id !== details.id;
      })
    );
  };

  return (
    <div className="container">
      <Heading title={pokename} />
      <div className="card-container">
        <img src={img} alt={pokename} className="pokemon-img" />
        <ul className="stats-container">
          <li>Pokedex No: {id}</li>
          <li>
            Type: {type1} {type2 !== undefined ? `/ ${type2}` : null}
          </li>
          <li>
            {statname1}: {statno1}
          </li>
          <li>
            {statname2}: {statno2}
          </li>
          <li>
            {statname3}: {statno3}
          </li>
          <li>
            {statname4}: {statno4}
          </li>
        </ul>
      </div>
      {!checkFav && (
        <button
          className="favorites-btn"
          onClick={() => {
            setFav((currentFav) => [...currentFav, { id, type1, type2, pokename, img, statname1, statname2, statname3, statname4, statno1, statno2, statno3, statno4 }]);
          }}
        >
          Add to favorites
        </button>
      )}
      {checkFav && (
        <button className="favorites-btn" onClick={removeFromFav}>
          Remove from favorites
        </button>
      )}
    </div>
  );
}

export default PokemonDetails;
