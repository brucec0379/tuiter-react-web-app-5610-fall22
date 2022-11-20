import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
   <div className="row mt-3">
               <div className="col">
                   <i className="bi bi-chat me-2"></i>
                   {tuit.replies}
               </div>

               <div className="col">
                   <i className="bi bi-arrow-repeat me-2"></i>
                   {tuit.retuits}
               </div>

               <div className="col">
                   {
                       tuit.liked &&
                       <i className="bi bi-heart-fill me-2 text-danger"></i>
                   }
                   {
                       !tuit.liked &&
                       <i className="bi bi-heart me-2"></i>
                   }
               </div>

               <div>
                   Likes: {tuit.likes}
                   <i onClick={() => dispatch(updateTuitThunk({
                                                                  ...tuit,
                                                                  likes: tuit.likes + 1
                                                              }))} className="bi bi-heart-fill me-2 text-danger"></i>
               </div>
               <div className="col">
                   <i className="bi bi-share"></i>
               </div>
           </div>
       )
   }
   export default TuitStats;