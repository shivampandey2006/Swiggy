import { useSelector } from "react-redux"
import { Link} from "react-router-dom"
export default function Cart(){
  const counter =   useSelector(state=>state.slice1.count)
    return (
        <>
        <Link to="/ShowListItems">
<div className="flex justify-end sticky top-0 " >
    <span className="bg-green-600 text-white rounded-2xl h-10 w-25 mb-2 items-center text-center content-center   ">
        Cart : {counter} </span></div></Link>
      </>
    )
}