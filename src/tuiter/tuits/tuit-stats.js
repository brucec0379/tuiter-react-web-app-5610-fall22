import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (props) => {
    const dispatch = useDispatch();
    return (
    <div className="wd-icons d-flex mt-3 text-muted">
      <span><i className="bi bi-chat"></i> <span>{props.replies}</span></span>
      <span><i className="bi bi-repeat"></i> <span>{props.retuits}</span></span>
        <span><i className={`bi bi-heart-fill ${props.liked ? 'text-danger' : ''}`}></i> <span>{props.likes}</span></span>
        <span>Likes: {props.likes}</span><span><i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({_id: props._id,
          liked: !props.liked,
          likes: props.liked ? props.likes - 1 : props.likes + 1 }))}></i>
        </span>
      <span><i className="bi bi-share"></i></span>
    </div>
  );
};

export default TuitStats;
