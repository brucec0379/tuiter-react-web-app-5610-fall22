import React from 'react';
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (props) => {

  return (
    <div className="wd-icons d-flex mt-3 text-muted">
      <span><i className="bi bi-chat"></i> <span>{props.replies}</span></span>
      <span><i className="bi bi-repeat"></i> <span>{props.retuits}</span></span>
      <span><i className={`bi bi-heart-fill ${props.liked ? 'text-danger' : ''}`}></i> <span>{props.likes}</span></span>
      <span><i className="bi bi-share"></i></span>
    </div>
    <div>
         Likes: {tuit.likes}
         <i onClick={() => dispatch(updateTuitThunk({
           ...tuit,
           likes: tuit.likes + 1
         })} className="bi bi-heart-fill me-2 text-danger"></i>
       </div>

  );
};

export default TuitStats;