const NavigationSidebar = (active) => {
  return (`
<ul class="list-group">
  <li class="list-group-item"><i class="fa fa-text-width"></i></li>
  <li class="list-group-item ${active === 'home' ? 'active' : ''}"><a href="../HomeScreen/index.html"><i class="fa fa-home"></i><span class="ms-1 d-none d-xl-inline-block">Home</span></a></li>
  <li class="list-group-item ${active === 'explore' ? 'active' : ''}"><a href="../ExploreScreen/index.html"><i class="fa fa-hashtag"></i><span class="ms-1 d-none d-xl-inline-block">Explore</span></a></li>
  <li class="list-group-item"><i class="fa fa-bell"></i><span class="ms-1 d-none d-xl-inline-block">Notifications</span></li>
  <li class="list-group-item"><i class="fa fa-envelope"></i><span class="ms-1 d-none d-xl-inline-block">Messages</span></li>
  <li class="list-group-item"><i class="fa fa-bookmark"></i><span class="ms-1 d-none d-xl-inline-block">Bookmarks</span></li>
  <li class="list-group-item"><i class="fa fa-list"></i><span class="ms-1 d-none d-xl-inline-block">Lists</span></li>
  <li class="list-group-item"><i class="fa fa-user"></i><span class="ms-1 d-none d-xl-inline-block">Profile</span></li>
  <li class="list-group-item"><i class="fa fa-ellipsis-h"></i><span class="ms-1 d-none d-xl-inline-block">More</span></li>
</ul>
<div class="d-grid mt-2"> 
<a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
</div> `);
};

export default NavigationSidebar;