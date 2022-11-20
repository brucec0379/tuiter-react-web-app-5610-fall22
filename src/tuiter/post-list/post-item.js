import React from 'react';

const PostItem = ({
  avatar,
  userName,
  handle,
  time,
  title,
  image,
  imageTitle,
  imageDesc,
  link,
  comments,
  tweets,
  likes
}) => {

  return (
    <li className="list-group-item d-flex p-3 position-relative">
      <i className="bi bi-three-dots wd-post-more text-muted"></i>
      <img className="wd-avatar" src= "/images/rs.png" alt="avatar"/>
      <div className="flex-grow-1 ms-2">
        <div><b>{userName}</b> <i className="bi bi-patch-check-fill"></i><span
          className="text-muted">@{handle} - {time}</span></div>
        <div className="wd-content mb-2" dangerouslySetInnerHTML={{ __html: title }}></div>
        <div className="wd-img">
          <img src={image} alt="thumb"/>
          <div className={`px-2 my-1 ${!imageTitle ? 'd-none' : ''}`}>{imageTitle}</div>
          <div className={`text-muted px-2 my-1 ${!imageDesc ? 'd-none' : ''}`}><small>{imageDesc}</small></div>
          <div className={`text-muted px-2 my-1 ${!link ? 'd-none' : ''}`}><i className="bi bi-link-45deg"></i> {link}
          </div>
        </div>

        <div className="wd-icons d-flex mt-3 text-muted">
          <span><i className="bi bi-chat"></i> <span>{comments}</span></span>
          <span><i className="bi bi-repeat"></i> <span>{tweets}</span></span>
          <span><i className="bi bi-heart-fill"></i> <span>{likes}</span></span>
          <span><i className="bi bi-upload"></i></span>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
