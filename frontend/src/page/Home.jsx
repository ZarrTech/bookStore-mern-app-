
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BookLayout from "../components/BookLayout";
import useFetch from '../useFetch'

const Home = () => {
  const url = "http://localhost:3000/books";
  const { books, isloading, error } = useFetch(url)
  console.log(books);

  return (
    <section className=" p-4">
      <div className=" flex justify-between items-center">
        <h1 className=" text-3xl my-3 capitalize">books list</h1>
        <Link to="books/create">
          <MdOutlineAddBox className=" text-slate-500 text-4xl" />
        </Link>
      </div>
      <BookLayout books={books} isloading={ isloading} error={error} />
    </section>
  );
}
export default Home