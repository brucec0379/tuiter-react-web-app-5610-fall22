import PostItem from './post-item.js';
import posts from './posts.js';

const PostList = () => {
  return (<ul className="list-group">
    {posts.map((v, i) => <PostItem key={i} {...v}/>)}
  </ul>);
};

export default PostList;
