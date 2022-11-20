import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
    <div className="wd-icons d-flex mt-3 text-muted">
      <span><i className="bi bi-chat"></i> <span>{tuit.replies}</span></span>
      <span><i className="bi bi-repeat"></i> <span>{tuit.retuits}</span></span>
        <span><i className={`bi bi-heart-fill ${tuit.liked ? 'text-danger' : ''}`}></i> <span>{tuit.likes}</span></span>
        <span>Likes: {tuit.likes}</span><span><i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({...tuit, }))}></i>
        </span>
      <span><i className="bi bi-share"></i></span>
    </div>
  );
};

export default TuitStats;