import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const singleFetch = (url) => {
  
  const [books, setBooks] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  axios.defaults.withCredentials =true
  useEffect(() => {
    const fetchSingleData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}/${id}`);
        setBooks(response.data.book);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchSingleData();
  }, [url]);

  const editBook = async (data) => {
    setIsLoading(true);
    try {
      await axios.patch(`${url}/${id}`, data);
       enqueueSnackbar("book created successfully ", { variant: "success" });
    } catch (error) {
      setError(error);
       enqueueSnackbar("error ", { variant: "error" });
    }
    setIsLoading(false);
    enqueueSnackbar("book created successfully ", { variant: "success" });
  };

  return { isloading, error, books, editBook };
};

export default singleFetch