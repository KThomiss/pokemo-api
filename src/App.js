import HomePage from "./components/home/HomePage";
import DetailPage from "./components/detail/DetailPage";
import PokedexPage from "./components/pokedex/PokdedexPage";
import FavoritesPage from "./components/favorites/FavoritesPage";
import Layout from "./components/layout/Layout";
import PageNotFound from "./components/layout/PageNotFound";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout></Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/pokedex" element={<PokedexPage />}></Route>
          <Route path="/detail/:name" element={<DetailPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
