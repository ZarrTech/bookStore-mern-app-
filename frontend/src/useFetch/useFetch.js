import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useFetch = (url) => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

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
       await axios.post(url, newRecord);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const deleteBook = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      setError(error);
    }
  };
  return {books, isloading, error, postBook, deleteBook};
};

export default useFetch