import { useState, useEffect } from "react";
import InfoMessage from "../common/InfoMessage";

function GetFavorites() {
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favorites"));
    if (favList) {
      setFavList(favList);
    }
  }, []);

  function clearFavorites() {
    localStorage.removeItem("favorites");
    setFavList([]);
  }

  if (favList.length === 0) {
    return <InfoMessage message="No favorites selected" />;
  }

  return (
    <>
      <button className="favorites-btn" onClick={clearFavorites}>
        Remove all favorites
      </button>
      <div className="favorites-container">
        {favList.map((favorite) => {
          return (
            <div className="card-container" key={favorite.id}>
              <img src={favorite.img} alt={favorite.name} className="pokemon-img" />
              <ul className="stats-container">
                <li>Pokedex No: {favorite.id}</li>
                <li>
                  Type: {favorite.type1} {favorite.type2 !== undefined ? `/ ${favorite.type2}` : null}
                </li>
                <li>
                  {favorite.statname1}: {favorite.statno1}
                </li>
                <li>
                  {favorite.statname2}: {favorite.statno2}
                </li>
                <li>
                  {favorite.statname3}: {favorite.statno3}
                </li>
                <li>
                  {favorite.statname4}: {favorite.statno4}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetFavorites;
