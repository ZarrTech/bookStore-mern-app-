import { useEffect, useState } from "react";
import useFetch from "../useFetch/useFetch";
import { url } from "./Home";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const Createbook = () => {
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const { postBook, isloading, error } = useFetch(url);
  const data = { title, author, publishedYear, publisher };
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const PostBook = async () => {
    try {
      await postBook(data);
      navigate("/");
    } catch (error) {
      enqueueSnackbar("Error", { variant: "error" });
    }
    enqueueSnackbar('book created ', {variant: 'success'})
  };
  if (isloading) {
    return <Spinner />;
  }
  if (error) {
    return <div>there was an error</div>;
  }
  return (
    <section className=" p-4">
      <BackButton />
      <h1 className=" my-3 capitalize">create book</h1>
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
          className=" flex justify-center text-center bg-sky-400 px-3 py-1 rounded-2xl hover:opacity-15 text-white"
          onClick={PostBook}
        >
          Submit
        </button>
      </div>
    </section>
  );
};
export default Createbook;
