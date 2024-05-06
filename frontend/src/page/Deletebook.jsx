import useFetch from "../useFetch/useFetch"
import Spinner from "../components/Spinner"
import { url } from "./Home"
const Deletebook = () => {
  const {deleteBook, isloading, error} = useFetch(url)
  return (
    <div>Deletebook</div>
  )
}
export default Deletebook