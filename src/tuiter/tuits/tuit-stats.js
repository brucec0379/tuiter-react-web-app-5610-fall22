import React from 'react';

const TuitStats = (props) => {

  return (
    <div className="wd-icons d-flex mt-3 text-muted">
      <span><i className="bi bi-chat"></i> <span>{props.replies}</span></span>
      <span><i className="bi bi-repeat"></i> <span>{props.retuits}</span></span>
        <span><i className={`bi bi-heart ${props.liked ? 'text-danger' : ''}`}></i> <span>{props.likes}</span></span>
        <span>Likes: {tuit.likes}</span><span><i onClick={() => dispatch(updateTuitThunk({...tuit,
                likes: tuit.likes + 1
            })} className="bi bi-heart-fill me-2 text-danger"></i>
        </span>
      <span><i className="bi bi-share"></i></span>
    </div>
  );
};

export default TuitStats;