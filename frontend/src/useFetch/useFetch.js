import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";


const useFetch = (url) => {
  const [books, setBooks] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar()
  
 axios.defaults.withCredentials = true;
  // get books
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

  // post books
  const postBook = async (newRecord) => {
    setIsLoading(true);
    try {
       await axios.post(url, newRecord);
    } catch (error) {
      setError(error);
      enqueueSnackbar("error ", { variant: "error" });
    }
    setIsLoading(false);
    enqueueSnackbar('book created successfully ', { variant: 'success' })
  };

  // delete book
  const deleteBook = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${id}`)
     
    } catch (error) {
      setError(error);
      enqueueSnackbar("error ", { variant: "error" });
    }
    setIsLoading(false)
    enqueueSnackbar("book deleted successfully ", { variant: "success" });
  };
  return {books, isloading, error, postBook, deleteBook};
};

export default useFetch