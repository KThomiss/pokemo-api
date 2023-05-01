import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingIndicator from "../common/LoadingIndicator";
import useApi from "../../hooks/useApi";

export default function ListOfPokemon(props) {
  const [searchValue, setSearchValue] = useState("");
  const { loading, error, data, setData, filteredData } = useApi(props.regionUrl);
  useEffect(() => {
    // eslint-disable-next-line
    const searchResults = filteredData.filter(function (filter) {
      if (filter.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
    });
    setData(searchResults);
    // eslint-disable-next-line
  }, [searchValue]);

  function filterInput(e) {
    setSearchValue(e.target.value);
  }

  if (loading) return <LoadingIndicator />;

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="pokemon-list-container">
      <input value={searchValue} onChange={filterInput} placeholder="Pokemon name" className="search-filter" />
      <ol className="pokemon-ol">
        {data.map((list, index) => {
          return (
            <li key={index} className="pokemon-list" style={{ animationDelay: index * 0.1 + "s" }}>
              <Link to={`/detail/${list.name}`} className="pokemon-link">
                <img src={require(`../../images/official-artwork/${props.regionName}/${list.name}.png`)} alt={list.name} className="list-img" />
                {list.name}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
