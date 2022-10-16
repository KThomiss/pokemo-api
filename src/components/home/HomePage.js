import Heading from "../layout/Heading";
import ListPokemon from "../pokedex/ListPokemon";

function HomePage() {
  return (
    <div className="container">
      <Heading title="First 150 pokémon" />
      <ListPokemon />
    </div>
  );
}

export default HomePage;
