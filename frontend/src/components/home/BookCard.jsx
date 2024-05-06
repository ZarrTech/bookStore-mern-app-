import Spinner from "../Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";

const BookCard = ({ books, isloading, error }) => {
    if (isloading) {
       return <Spinner/>
    }
    if (error) {
        return <div>there was an error</div>
    }
    
    
    return (
        <section className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {books.map((book) => {
                const { _id, title, publisher, author, publishedYear } = book
                return (
                  <div
                    key={_id}
                    className="relative border-2 border-slate-800 px-3 py-2 hover:shadow-lg rounded-2xl"
                  >
                    <h1 className=" absolute top-1 right-2 bg-slate-400 px-3 py-1 rounded-2xl">
                      {publishedYear}
                    </h1>
                    <h2 className=" my-3 ">{_id}</h2>
                    <div className="flex items-center justify-start gap-x-3">
                      <PiBookOpenTextLight className=" text-xl text-green-700" />
                      <h3 className=" capitalize">{title}</h3>
                    </div>
                    <div className="flex items-center justify-start gap-x-3">
                      <BiUserCircle className=" text-xl text-green-700" />
                      <h3 className=" capitalize">{author}</h3>
                    </div>
                    <div className=" flex justify-center items-center text-xl gap-x-3 my-3">
                      <Link to={`/books/details/${_id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${_id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/books/delete/${_id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </div>
                );
            })}
        </section>
    )
};
export default BookCard;
