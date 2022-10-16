const PostSummaryItem = (post) => {
  let { topic, userName, time, image, title } = post;
  return (`
<li class="list-group-item">
    <div class="row align-items-center">
        <div class="col-10">
            <div class="text-muted">${topic}</div>
            <div><b>${userName}</b> <i class="fa fa-check-circle"></i><span class="text-muted"> - ${time}</span>
            </div>
            <div class="my-1"><b>${title}</b></div>
        </div>
        <div class="col-2">
            <img src="${image}" alt="logo" class="img-fluid wd-logo-round">
        </div>
    </div>
</li>`);
};

export default PostSummaryItem;
