
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BookTable from "../components/home/BookTable";
import useFetch from '../useFetch/useFetch'
import { useState } from "react";
import BookCard from "../components/home/BookCard";
export const url = import.meta.env.VITE_API_URL
const Home = () => {
  const [ShowType, setShowType] = useState('table')
  const { books, isloading, error } = useFetch(url);
  console.log("books...", books);
  return (
    <section className=" p-4">
      <div className=" flex justify-center items-center gap-x-3">
        <button
          className=" px-3 py-1 bg-slate-800 text-center text-white text-base rounded-3xl"
          onClick={() => {
            setShowType("table");
          }}
        >
          table
        </button>
        <button
          className=" px-3 py-1 bg-slate-800 text-center text-white text-base rounded-3xl"
          onClick={() => {
            setShowType("card");
          }}
        >
          card
        </button>
      </div>
      <div className=" flex justify-between items-center">
        <h1 className=" text-3xl my-3 capitalize">books list</h1>
        <Link to="books/create">
          <MdOutlineAddBox className=" text-slate-500 text-4xl" />
        </Link>
      </div>

      {ShowType === "card" ? (
        <BookCard books={books} isloading={isloading} error={error} />
      ) :  (
        <BookTable books={books} isloading={isloading} error={error} />
      )}
    </section>
  );
}
export default Home