import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { DETAIL2_URL } from "../../constants/api";

function PokemonDetails() {
  let { name } = useParams();
  const url = DETAIL2_URL + `${name}`;
  const { loading, error, data } = useApi(url);

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

  const description = getFlavorText(data.flavor_text_entries);

  return (
    <div className="container">
      <h2>{description === undefined ? "No description for this pokemon" : "Description:"}</h2>
      <p>{description}</p>
    </div>
  );
}

export default PokemonDetails;
