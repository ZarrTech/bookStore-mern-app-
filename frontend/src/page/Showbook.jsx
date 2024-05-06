import singleFetch from "../useFetch/singleFetch"
import BackButton from "../components/BackButton"
import { url } from "./Home"
import Spinner from "../components/Spinner"

const Showbook = () => {
  const { books, isloading, editBook, error } = singleFetch(url)
  console.log(books);
  const { title, author, publishedYear, createdAt, updatedAt, publisher } = books
 
  return (
    <section className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Show Book</h1>
      {isloading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col w-fit p-4 border-2 border-slate-700">
          <div className=" flex justify-between items-center gap-3">
            <h1 className=" font-bold capitalize text-xl">title:</h1>
            <h2 className=" font-sm text-lg capitalize">{title}</h2>
          </div>
          <div className=" flex justify-between items-center gap-3">
            <h1 className=" font-bold capitalize text-xl">author:</h1>
            <h2 className=" font-sm text-lg capitalize">{author}</h2>
          </div>
          <div className=" flex justify-between items-center gap-3">
            <h1 className=" font-bold capitalize text-xl">publisher:</h1>
            <h2 className=" font-sm text-lg capitalize">{publisher}</h2>
          </div>
          <div className=" flex justify-between items-center gap-3">
            <h1 className=" font-bold capitalize text-xl">published year:</h1>
            <h2 className=" font-sm text-lg capitalize">{publishedYear}</h2>
          </div>
          <div className=" flex justify-between items-center gap-3">
            <h1 className=" font-bold capitalize text-xl">created by:</h1>
            <h2 className=" font-sm text-lg capitalize">{createdAt}</h2>
          </div>
          <div className=" flex justify-between items-center gap-3 ">
            <h1 className=" font-bold capitalize text-xl">updated at:</h1>
            <h2 className=" font-sm text-lg capitalize">{updatedAt}</h2>
          </div>
        </div>
      )}
    </section>
  );
}
export default Showbook