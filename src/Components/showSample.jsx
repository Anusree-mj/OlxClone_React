import react,{useContext} from "react";
import { PostContext } from "../store/postContext";

const ShowDemo = ()=>{
    const {postDetails}=useContext(PostContext)
    return(
        <>
        <h1>Count:{postDetails} </h1>
        </>
    )
}

export default ShowDemo;