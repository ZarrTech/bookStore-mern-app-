import Spinner from "../Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";
import SingleBookCard from "./SingleBookCard";

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
                return (
                  <SingleBookCard book={ book} />
                );
            })}
        </section>
    )
};
export default BookCard;
