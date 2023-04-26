import Heading from "../layout/Heading";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { DETAIL1_URL } from "../../constants/api";
import LoadingIndicator from "../common/LoadingIndicator";
import Fav from "../../images/favStar.png";
import NotFav from "../../images/notFavStar.png";

function PokemonDetails() {
  const favoritesArray = JSON.parse(localStorage.getItem("favorites"));
  const [fav, setFav] = useState(favoritesArray || []);
  const [toggle, setToggle] = useState(true);
  let { name } = useParams();
  const url = DETAIL1_URL + `${name}`;
  const { loading, error, data } = useApi(url);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="error">ERROR: an error occured</div>;
  }

  const id = data.id;
  const type1 = data.types[0].type.name;
  const type2 = data.types[1] ? data.types[1].type.name : undefined;
  const pokename = data.name;
  const img = data.sprites.other["official-artwork"].front_default;
  const shiny = data.sprites.other["official-artwork"].front_shiny;
  const stat_hp = data.stats[0].stat.name;
  const stat_attack = data.stats[1].stat.name;
  const stat_defence = data.stats[2].stat.name;
  const stat_special_attak = data.stats[3].stat.name;
  const stat_special_defence = data.stats[4].stat.name;
  const stat_speed = data.stats[5].stat.name;
  const hp_value = data.stats[0].base_stat;
  const attack_value = data.stats[1].base_stat;
  const defence_value = data.stats[2].base_stat;
  const special_attak_value = data.stats[3].base_stat;
  const special_defence_value = data.stats[4].base_stat;
  const speed_value = data.stats[5].base_stat;

  localStorage.setItem("favorites", JSON.stringify(fav));

  const checkFav = fav.find((favorite) => {
    return favorite.id === data.id;
  });

  const removeFromFav = () => {
    setFav((current) =>
      current.filter((removeFav) => {
        return removeFav.id !== data.id;
      })
    );
  };

  return (
    <>
      <Heading title={pokename.toUpperCase() + " # " + id} />
      <div className="card-container">
        <div className="image-container">
          <button onClick={() => setToggle(!toggle)}>{!toggle ? "Show default" : "Show shiny"}</button>
          {toggle && <img src={img} alt={pokename} className="pokemon-img" />}
          {!toggle && <img src={shiny} alt={pokename} className="pokemon-img" />}
        </div>
        <div className="stats-container">
          <h2>Base Stats:</h2>
          <div>
            <label htmlFor="hp">
              {stat_hp}: {hp_value}
            </label>
            <progress id="hp" max={300} value={hp_value}></progress>
          </div>
          <div>
            <label htmlFor="attack">
              {stat_attack}: {attack_value}
            </label>
            <progress id="attack" max={300} value={attack_value}></progress>
          </div>
          <div>
            <label htmlFor="defence">
              {stat_defence}: {defence_value}
            </label>
            <progress id="defence" max={300} value={defence_value}></progress>
          </div>
          <div>
            <label htmlFor="special-attack">
              {stat_special_attak}: {special_attak_value}
            </label>
            <progress id="special-attack" max={300} value={special_attak_value}></progress>
          </div>
          <div>
            <label htmlFor="special-defence">
              {stat_special_defence}: {special_defence_value}
            </label>
            <progress id="special-defence" max={300} value={special_defence_value}></progress>
          </div>
          <div>
            <label htmlFor="special-attack">
              {stat_speed}: {speed_value}
            </label>
            <progress id="special-attack" max={300} value={speed_value}></progress>
          </div>
          <span className="type-label">Type:</span>
          <div className="type-container">
            <span className={`type ${type1}`}>{type1}</span> <span className={`type ${type2}`}>{type2 !== undefined ? `${type2}` : null}</span>
          </div>
          <div>
            <span className="type-label">{!checkFav ? "Add Pokèmon to favorites:" : "Remove Pokèmon from favorites:"}</span>
            {!checkFav && (
              <button
                className="favorites-btn"
                onClick={() => {
                  setFav((currentFav) => [...currentFav, { id, pokename, img }]);
                }}
              >
                <img src={NotFav} alt="pokeball" />
              </button>
            )}
            {checkFav && (
              <button className="favorites-btn" onClick={removeFromFav}>
                <img src={Fav} alt="pokeball" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
