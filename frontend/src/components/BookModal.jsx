import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle} from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  const { _id, title, author, publishedYear } = book;
  return (
      <div className=" fixed flex bg-black/60 right-0 top-0 bottom-0 left-0 z-50 justify-center items-center" onClick={onClose}>
          
          <div className="w-[600px] max-w-full h-[400px] bg-white rounded-lg p-3  relative flex flex-col  " onClick={(e) => { e.stopPropagation() }}>
              
              <AiOutlineClose className=" absolute right-6 text-3xl top-6 text-red-600 cursor-pointer" onClick={onClose}/>
        <h1 className=" w-fit bg-slate-400 px-3 py-1 rounded-2xl">
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
              <p className=" text-center mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione assumenda sunt, id qui at numquam modi consectetur, alias laborum eveniet, minima illum. Quae repellat expedita quos eligendi alias sunt minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate rem, accusantium distinctio eaque ad ipsa quisquam sapiente illum, placeat odio porro tempore, illo aut? Obcaecati voluptatum earum amet eligendi.</p>
      </div>
    </div>
  );
};
export default BookModal;
