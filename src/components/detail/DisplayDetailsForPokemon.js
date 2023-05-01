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
  const { loading, error, details } = useApi(url);

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
  const shiny = details.sprites.other["official-artwork"].front_shiny;
  const stat_hp = details.stats[0].stat.name;
  const stat_attack = details.stats[1].stat.name;
  const stat_defence = details.stats[2].stat.name;
  const stat_special_attak = details.stats[3].stat.name;
  const stat_special_defence = details.stats[4].stat.name;
  const stat_speed = details.stats[5].stat.name;
  const hp_value = details.stats[0].base_stat;
  const attack_value = details.stats[1].base_stat;
  const defence_value = details.stats[2].base_stat;
  const special_attak_value = details.stats[3].base_stat;
  const special_defence_value = details.stats[4].base_stat;
  const speed_value = details.stats[5].base_stat;
  const ability1 = details.abilities[0].ability.name;
  const ability2 = details.abilities[1] ? details.abilities[1].ability.name : undefined;

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
    <div className="pokemon-profile-container">
      <Heading title={pokename.toUpperCase() + " # " + id} />
      <div className="card-container detail-card">
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
        <button onClick={() => setToggle(!toggle)} className="toggle-image-btn">
          {!toggle ? "Default" : "Shiny"}
        </button>
        <div className="image-container">
          <div>
            {toggle && <img src={img} alt={pokename} className="pokemon-img" />}
            {!toggle && <img src={shiny} alt={pokename} className="pokemon-img" />}
          </div>
          <div className="type-container">
            <span className={`type ${type1}`}>{type1}</span> <span className={`type ${type2}`}>{type2 !== undefined ? `${type2}` : ""}</span>
          </div>
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
          <div className="ability-container">
            <span className="type-label">
              Abilities: <span className={`${type1 + "-text"} abilities`}>{ability1}</span> and <span className={`${type2 + "-text"} abilities`}>{ability2}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
