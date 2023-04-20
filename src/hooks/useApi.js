import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [filteredData, setfilteredData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        setData(json.results);
        setfilteredData(json.results);
      } else {
        setError(`There was an API error`);
      }
    } catch (err) {
      setError(`There was an API error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, []);

  return { loading, data, setData, error, filteredData };
};

export default useApi;
