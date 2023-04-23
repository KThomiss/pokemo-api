import Heading from "../layout/Heading";
import { useState } from "react";
import { KANTO_URL, JOHTO_URL, HOENN_URL, SINNOH_URL, UNOVA_URL, KALOS_URL, ALOLA_URL, GALAR_URL, HISUI_URL, PALDEA_URL } from "../../constants/api";
import DisplayPokemonFromRegion from "../pokedex/DisplayPokemonFromRegion";

function HomePage() {
  const [regionUrl, setRegionUrl] = useState(KANTO_URL);
  const [regionName, setRegionName] = useState("kanto");

  return (
    <div className="container">
      <Heading title="POKEDEX BY REGIONS" />
      <div className="region-selection">
        <button
          className={`kanto-medal medal-btn ${regionName === "kanto" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(KANTO_URL);
            setRegionName("kanto");
          }}
        >
          Kanto
        </button>
        <button
          className={`johto-medal medal-btn ${regionName === "johto" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(JOHTO_URL);
            setRegionName("johto");
          }}
        >
          Johto
        </button>
        <button
          className={`hoenn-medal medal-btn ${regionName === "hoenn" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(HOENN_URL);
            setRegionName("hoenn");
          }}
        >
          Hoenn
        </button>
        <button
          className={`sinnoh-medal medal-btn ${regionName === "sinnoh" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(SINNOH_URL);
            setRegionName("sinnoh");
          }}
        >
          Sinnoh
        </button>
        <button
          className={`unova-medal medal-btn ${regionName === "unova" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(UNOVA_URL);
            setRegionName("unova");
          }}
        >
          Unova
        </button>
        <button
          className={`kalos-medal medal-btn ${regionName === "kalos" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(KALOS_URL);
            setRegionName("kalos");
          }}
        >
          Kalos
        </button>
        <button
          className={`alola-medal medal-btn ${regionName === "alola" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(ALOLA_URL);
            setRegionName("alola");
          }}
        >
          Alola
        </button>
        <button
          className={`galar-medal medal-btn ${regionName === "galar" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(GALAR_URL);
            setRegionName("galar");
          }}
        >
          Galar
        </button>
        <button
          className={`hisui-medal medal-btn ${regionName === "hisui" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(HISUI_URL);
            setRegionName("hisui");
          }}
        >
          Hisui
        </button>
        <button
          className={`paldea-medal medal-btn ${regionName === "paldea" ? "active-btn" : ""}`}
          onClick={() => {
            setRegionUrl(PALDEA_URL);
            setRegionName("paldea");
          }}
        >
          Paldea
        </button>
      </div>
      {regionName === "kanto" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "johto" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "hoenn" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "sinnoh" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "unova" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "kalos" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "alola" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "galar" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "hisui" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
      {regionName === "paldea" && <DisplayPokemonFromRegion regionUrl={regionUrl} regionName={regionName} />}
    </div>
  );
}

export default HomePage;
