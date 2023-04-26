import { useState } from "react";
import { Link } from "react-router-dom";
import InfoMessage from "../common/InfoMessage";

function GetFavorites() {
  const favList = JSON.parse(localStorage.getItem("favorites"));
  const [fav, setFav] = useState(favList || []);
  localStorage.setItem("favorites", JSON.stringify(fav));

  function clearFavorites() {
    localStorage.removeItem("favorites");
    setFav([]);
  }

  function removeFromFav(id) {
    setFav((current) =>
      current.filter((removeFav) => {
        return removeFav.id !== id;
      })
    );
  }

  if (favList.length === 0) {
    return <InfoMessage message="No favorites selected" />;
  }
  return (
    <>
      <button className="" onClick={clearFavorites}>
        Remove all favorites
      </button>
      <ol className="pokemon-ol">
        {fav.map((fav, index) => {
          return (
            <li key={fav.id} className="pokemon-list favorites-list" style={{ animationDelay: index * 0.1 + "s" }}>
              <button onClick={() => removeFromFav(fav.id)} className="removeBtn"></button>
              <Link to={`/detail/${fav.pokename}`} className="pokemon-link">
                <img src={fav.img} className="list-img" alt={fav.pokename} />
                {fav.pokename}
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default GetFavorites;
