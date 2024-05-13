import { useEffect, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function fetchedData() {
    const send = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };
    send();
  }, []);

  return {data, error, loading};
}
export default useFetch;
