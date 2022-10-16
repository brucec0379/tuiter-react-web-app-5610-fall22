const WhoToFollowListItem = (who) => {
  let { avatarIcon, userName, handle } = who;
  return (`
<li class="list-group-item">
    <div class="row align-items-center">
        <div class="col-3">
            <img src="../../images/${avatarIcon}" alt="logo" class="img-fluid wd-logo">
        </div>
        <div class="col-6 wd-nowrap">
            <div class="wd-hl"><b>${userName}</b> <i class="fa fa-check-circle"></i></div>
            <div class="mt-1">@${handle}</div>
        </div>
        <div class="col-3">
            <button type="button" class="btn btn-primary wd-fl-button">Follow</button>
        </div>
    </div>
</li>`);
};

export default WhoToFollowListItem;
