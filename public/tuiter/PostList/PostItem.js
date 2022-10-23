const PostItem = (post) => {
  let {
    avatar, userName, handle, time, title, image, imageTitle, imageDesc,
    link, comments, tweets, likes
  } = post;

  return (`
<li class="list-group-item bg-black d-flex text-white p-3 position-relative">
    <i class="fa fa-ellipsis-h wd-post-more text-muted"></i>
  <img class="wd-avatar" src="${avatar}" alt="avatar">
  <div class="flex-grow-1 ms-2">
    <div><b>${userName}</b> <i class="fa fa-check-circle"></i><span class="text-muted">@${handle} - ${time}</span></div>
    <div class="wd-content mb-2">${title}</div>
    <div class="wd-img">
        <img src="${image}" alt="thumb">
        <div class="px-2 my-1 ${!imageTitle ? 'd-none' : ''}">${imageTitle}</div>
        <div class="text-muted px-2 my-1 ${!imageDesc ? 'd-none' : ''}"><small>${imageDesc}</small></div>
        <div class="text-muted px-2 my-1 ${!link ? 'd-none' : ''}"><i class="fa fa-link"></i> ${link}</div>
    </div>

    <div class="wd-icons d-flex mt-3 text-muted">
    <span><i class="fa fa-comment"></i><span>${comments}</span></span>
    <span><i class="fa fa-retweet"></i><span>${tweets}</span></span>
    <span><i class="fa fa-heart"></i><span>${likes}</span></span>
    <span><i class="fa fa-upload"></i></span>
    </div>
  </div>
</li>`);
};

export default PostItem;
