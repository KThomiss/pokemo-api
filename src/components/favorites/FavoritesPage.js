import Heading from "../layout/Heading";
import GetFavorites from "./GetFavorites";

function FavoritesPage() {
  return (
    <div className="container">
      <Heading title="Your favorite Pokémon" />
      <GetFavorites />
    </div>
  );
}

export default FavoritesPage;
