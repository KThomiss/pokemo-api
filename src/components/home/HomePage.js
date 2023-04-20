import Heading from "../layout/Heading";
import Kanto from "../pokedex/Kanto";
import Johto from "../pokedex/Johto";
import Hoenn from "../pokedex/Hoenn";
import Sinnoh from "../pokedex/Sinnoh";
import Unova from "../pokedex/Unova";
import Kalos from "../pokedex/Kalos";
import Alola from "../pokedex/Alola";
import Galar from "../pokedex/Galar";
import Hisui from "../pokedex/Hisui";
import Paldea from "../pokedex/Paldea";
import { useState } from "react";

function HomePage() {
  const [kanto, setKanto] = useState(true);
  const [johto, setJohto] = useState(false);
  const [hoenn, setHoenn] = useState(false);
  const [sinnoh, setSinnoh] = useState(false);
  const [unova, setUnova] = useState(false);
  const [kalos, setKalos] = useState(false);
  const [alola, setAlola] = useState(false);
  const [galar, setGalar] = useState(false);
  const [hisui, setHisui] = useState(false);
  const [paldea, setPaldea] = useState(false);

  function displayPokemonFromKanto() {
    setKanto(!kanto);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromJohto() {
    setJohto(!johto);
    setKanto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }

  function displayPokemonFromHoenn() {
    setHoenn(!hoenn);
    setKanto(false);
    setJohto(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromSinnoh() {
    setSinnoh(!sinnoh);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromUnova() {
    setUnova(!unova);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromKalos() {
    setKalos(!kalos);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromAlola() {
    setAlola(!alola);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setGalar(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromGalar() {
    setGalar(!galar);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setHisui(false);
    setPaldea(false);
  }
  function displayPokemonFromHisui() {
    setHisui(!hisui);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setPaldea(false);
  }
  function displayPokemonFromPaldea() {
    setPaldea(!paldea);
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
  }

  return (
    <div className="container">
      <Heading title="POKEDEX BY REGIONS" />
      <div className="region-selection">
        <button onClick={displayPokemonFromKanto} className="region-btn" style={{ backgroundColor: kanto ? "#cc0000" : "#003a70" }}>
          Kanto
        </button>
        <button onClick={displayPokemonFromJohto} className="region-btn" style={{ backgroundColor: johto ? "#cc0000" : "#003a70" }}>
          Johto
        </button>
        <button onClick={displayPokemonFromHoenn} className="region-btn" style={{ backgroundColor: hoenn ? "#cc0000" : "#003a70" }}>
          Hoenn
        </button>
        <button onClick={displayPokemonFromSinnoh} className="region-btn" style={{ backgroundColor: sinnoh ? "#cc0000" : "#003a70" }}>
          Sinnoh
        </button>
        <button onClick={displayPokemonFromUnova} className="region-btn" style={{ backgroundColor: unova ? "#cc0000" : "#003a70" }}>
          Unova
        </button>
        <button onClick={displayPokemonFromKalos} className="region-btn" style={{ backgroundColor: kalos ? "#cc0000" : "#003a70" }}>
          Kalos
        </button>
        <button onClick={displayPokemonFromAlola} className="region-btn" style={{ backgroundColor: alola ? "#cc0000" : "#003a70" }}>
          Alola
        </button>
        <button onClick={displayPokemonFromGalar} className="region-btn" style={{ backgroundColor: galar ? "#cc0000" : "#003a70" }}>
          Galar
        </button>
        <button onClick={displayPokemonFromHisui} className="region-btn" style={{ backgroundColor: hisui ? "#cc0000" : "#003a70" }}>
          Hisui
        </button>
        <button onClick={displayPokemonFromPaldea} className="region-btn" style={{ backgroundColor: paldea ? "#cc0000" : "#003a70" }}>
          Paldea
        </button>
      </div>
      {kanto && <Kanto />}
      {johto && <Johto />}
      {hoenn && <Hoenn />}
      {sinnoh && <Sinnoh />}
      {unova && <Unova />}
      {kalos && <Kalos />}
      {alola && <Alola />}
      {galar && <Galar />}
      {hisui && <Hisui />}
      {paldea && <Paldea />}
    </div>
  );
}

export default HomePage;
