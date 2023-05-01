import DisplayDetailsForPokemon from "./DisplayDetailsForPokemon";
import DisplayDescriptionForPokemon from "./DisplayDescriptionForPokemon";

function DetailPage() {
  return (
    <div className="detail-container">
      <DisplayDetailsForPokemon />
      <DisplayDescriptionForPokemon />
    </div>
  );
}

export default DetailPage;
