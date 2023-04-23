import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DETAIL1_URL } from "../../constants/api";
import LoadingIndicator from "../common/LoadingIndicator";

function PokemonDetails() {
  const favoritesArray = JSON.parse(localStorage.getItem("favorites"));
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState(favoritesArray || []);

  let { name } = useParams();

  const url = DETAIL1_URL + `${name}`;

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
      <Heading title={pokename.toUpperCase() + " # " + id} />
      <div className="card-container">
        <div>
          <img src={img} alt={pokename} className="pokemon-img" />
        </div>
        <div>
          <span className="type-label">Type:</span>
          <div className="type-container">
            <span className={`type ${type1}`}>{type1}</span> <span className={`type ${type2}`}>{type2 !== undefined ? `${type2}` : null}</span>
          </div>
          <div>
            <label htmlFor="hp">
              {statname1}: {statno1}
            </label>
            <progress id="hp" max={300} value={statno1}></progress>
          </div>
          <div>
            <label htmlFor="attack">
              {statname2}: {statno2}
            </label>
            <progress id="attack" max={300} value={statno2}></progress>
          </div>
          <div>
            <label htmlFor="defence">
              {statname3}: {statno3}
            </label>
            <progress id="defence" max={300} value={statno3}></progress>
          </div>
          <div>
            <label htmlFor="special-attack">
              {statname4}: {statno4}
            </label>
            <progress id="special-attack" max={300} value={statno4}></progress>
          </div>
          <div>
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
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
