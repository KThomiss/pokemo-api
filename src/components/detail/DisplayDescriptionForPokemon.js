import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { DETAIL2_URL } from "../../constants/api";

function PokemonDetails() {
  let { name } = useParams();
  const url = DETAIL2_URL + `${name}`;
  const { loading, error, details } = useApi(url);

  if (loading) {
    return;
  }

  if (error) {
    return;
  }

  function getFlavorText(flavors) {
    let tempDescription = [];
    tempDescription = flavors.filter((flavor) => flavor.language.name === "en").map((item) => item.flavor_text);

    const num = Math.floor(Math.random() * tempDescription.length);

    return tempDescription[num];
  }

  const description = getFlavorText(details.flavor_text_entries);

  return (
    <div className="detail-card">
      <h2 className="profile-title">Profile</h2>
      <div>
        <h3 className="description-title">{description === undefined ? "No description for this pokemon" : "Description:"}</h3>
        <p className="description-text">{description}</p>
      </div>
      <div>
        <h3 className="info-title">Information:</h3>
        <div className="information-container">
          <div>
            Color:{" "}
            <span style={{ color: `${details.color.name}` }} className="info-span">
              {details.color.name}
            </span>
          </div>
          <div>
            Egg Groups:
            <span className={`info-span ${details.egg_groups[0].name}-text`}>{details.egg_groups[0].name}</span>
            <span className={`info-span ${details.egg_groups[1] === undefined ? "" : details.egg_groups[1].name}-text`}>{details.egg_groups[1] !== undefined ? details.egg_groups[1].name : null}</span>
          </div>
          <div>
            Growth Rate: <span className="info-span">{details.growth_rate.name}</span>
          </div>
          <div>
            Habitat: <span className="info-span">{details.habitat !== null ? details.habitat.name : "unknown"}</span>
          </div>
          <div>
            Shape: <span className="info-span">{details.shape.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
