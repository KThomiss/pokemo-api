import DisplayDetailsForPokemon from "./DisplayDetailsForPokemon";
import DisplayDescriptionForPokemon from "./DisplayDescriptionForPokemon";

function DetailPage() {
  return (
    <div className="container">
      <DisplayDetailsForPokemon />
      <DisplayDescriptionForPokemon />
    </div>
  );
}

export default DetailPage;
