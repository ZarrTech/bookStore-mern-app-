import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const useFetch = (url) => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setBooks(response.data.books);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const postBook = async (newRecord) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, newRecord);
      setBooks([...books], response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const deleteBook = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${id}`);
      Navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  return {books, isloading, error, postBook, deleteBook};
};

export default useFetch