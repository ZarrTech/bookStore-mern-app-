import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import singleFetch from "../useFetch/singleFetch";
import Spinner from "../components/Spinner";
import { url } from "./Home";
import axios from "axios";
import { useSnackbar } from "notistack";
const Editbook = () => {
  const {isloading, error, editBook} = singleFetch(url)
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const data = { title, author, publishedYear };
  const { id } = useParams()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  // fetch single book to populate the form
  useEffect(() => {
    const getSingleBook = async () => {
      const response = await axios.get(`${url}/${id}`)
      const { title, publishedYear, publisher, author } = response.data.book
      setTitle(title)
      setPublishedYear(publishedYear)
      setPublisher(publisher)
      setAuthor(author)
    
    }
    getSingleBook()
  }, [])
  
  // post edited book to server
  const edit_book = async () => {
    try {
      await editBook(data);
      enqueueSnackbar('book edited successfully', {variant: 'success'})
       navigate("/");
    } catch (error) {
       enqueueSnackbar("error", { variant: "error" });
    }
   
   }
  

  if (isloading) {
    return <Spinner/>
  }

  if (error) {
    return <div>there was an error</div>
  }
  return (
    <section className=" p-4">
      <BackButton />
      <h1 className=" my-3 capitalize">edit book</h1>
      <div className=" flex flex-col justify-center w-[600px] p-3 mx-auto border border-sky-400">
        <div className=" my-3">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className=" w-full border border-slate-700 rounded-2xl px-3 py-1"
          />
        </div>
        <div className=" my-3">
          <label htmlFor="text">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className=" w-full border border-slate-700 rounded-2xl px-3 py-1"
          />
        </div>
        <div className=" my-3">
          <label htmlFor="text">Published year</label>
          <input
            type="number"
            value={publishedYear}
            onChange={(e) => {
              setPublishedYear(e.target.value);
            }}
            className=" w-full border border-slate-700 rounded-2xl px-3 py-1"
          />
        </div>
        <div className=" my-3">
          <label htmlFor="text">publisher</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => {
              setPublisher(e.target.value);
            }}
            className=" w-full border border-slate-700 rounded-2xl px-3 py-1"
          />
        </div>
        <button
          className=" flex justify-center text-center bg-sky-400 px-3 py-1 rounded-2xl hover:opacity-15 text-white" onClick={edit_book}
          
        >
          Submit
        </button>
      </div>
    </section>
  );
}
export default Editbook