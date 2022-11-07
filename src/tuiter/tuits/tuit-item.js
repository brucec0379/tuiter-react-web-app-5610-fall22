import React from 'react';
import TuitStats from './tuit-stats';
import { deleteTuit } from './tuits-reducer';
import { useDispatch } from 'react-redux';

const TuitItem = (props) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => { dispatch(deleteTuit(id)); };

  return (
    <li className="list-group-item d-flex p-3 position-relative">
      {/*<i className="bi bi-three-dots wd-post-more text-muted"></i>*/}
      <img className="wd-avatar" src={`/images/${props.image}`} alt="avatar"/>
      <div className="flex-grow-1 ms-2">
        <div>
          <b>{props.userName}</b> <i className="ms-1 bi bi-patch-check-fill text-primary"></i><span
          className="ms-2 text-muted">{props.handle} &middot; {props.time}</span></div>
        <div className="wd-content mb-2" dangerouslySetInnerHTML={{ __html: props.tuit }}></div>

        <TuitStats {...props}/>
      </div>
      <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(props._id)}></i>
    </li>
  );
};

export default TuitItem;
