import api from "api/api";
import { useEffect, useState } from "react";

export const useFetchSinglePost = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (id) => {
      await api
        .get(`/blog/getById/${id}`)
        .then((res) => setData(res.data.blog))
        .catch((err) => console.log(err));
    };
    fetchData(id);
  }, [id]);

  return data;
};
