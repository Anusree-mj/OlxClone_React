import React,{useContext} from "react";
import { PostContext } from "../store/postContext";


const Counter=()=>{
   const {postDetails,setPostDetails}=useContext(PostContext)
    return(
        <>        
        <button onClick={()=>setPostDetails(postDetails+1)}>+</button>
        <button onClick={()=>setPostDetails(postDetails-1)}>-</button>
         <div>
          <p>test</p>
         </div>
        </>
    )
}

export default Counter;