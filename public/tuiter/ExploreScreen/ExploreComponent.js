import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
  return (`
<div class="row">
<div class="d-flex align-items-center px-3">
    <div class="wd-search flex-grow-1 me-4">
        <i class="fa fa-search"></i>
        <input placeholder="Search Tuiter" class="form-control">
    </div>
    <a href="explore-settings.html" class="wd-settings"><i class="fa fa-cog"></i></a>
</div>
</div> 
<ul class="nav my-2 nav-tabs"> 
<li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item d-md-block d-none">
        <a class="nav-link" href="entertainment.html">Entertainment</a>
    </li>
</ul>

 <div class="position-relative my-2">
    <img class="img-fluid wd-banner" src="../../images/starship.png" alt="banner">
    <div class="wd-banner-text">SpaceX's Starship</div>
</div>

${PostSummaryList()} `);
};

export default ExploreComponent;