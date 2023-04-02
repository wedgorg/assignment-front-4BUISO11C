import api from "api/api";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(url)
        .then((res) => setData(res.data.blogs))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [url]);

  return data;
};
