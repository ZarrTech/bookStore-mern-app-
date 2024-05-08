import useFetch from "../useFetch/useFetch"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { url } from "./Home"
import { useSnackbar } from 'notistack';
const Deletebook = () => {
  const { deleteBook, isloading, error } = useFetch(url)
  const { id } = useParams()
  const navigate = useNavigate()
const { enqueueSnackbar } = useSnackbar();
  const removeBook = async () => {
    try {
      await deleteBook(id);
      enqueueSnackbar('book deleted successfully', { variant:'success'})
      navigate("/");
    } catch (error) {
      enqueueSnackbar('error', {variant:'error'})
    }
    
  }

  if (isloading) {
    return <Spinner/>
  }
  if (error) {
    return <div>there was an error, please check your console</div>
  }
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" my-3 capitalize">delete book</h1>
      <div className=" flex flex-col text-center items-center p-8 mx-auto rounded-3xl border-2 border-red-800 w-[500px] ">
        <h1 className=" text-2xl capitalize">still want to delete?</h1>
        <button className=" text-white bg-red-800 px-4 py-1  text-center capitalize mt-8 hover:bg-red-500" onClick={removeBook}>yes, delete book</button>
      </div>
    </div>
  );
}
export default Deletebook