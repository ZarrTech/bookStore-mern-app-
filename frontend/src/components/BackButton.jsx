import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"

const BackButton = ({destination='/'}) => {
  return (
      <div className=" flex">
          <Link to={destination}>
              <BsArrowLeft className=" text-4xl bg-slate-700 text-white px-3 rounded-2xl"/>
          </Link>
    </div>
  )
}
export default BackButton