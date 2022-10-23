import PostItem from './PostItem.js';
import posts from './posts.js';

const PostList = () => {
  return (`<ul class="list-group">
${posts.map(v => PostItem(v)).join('')}
</ul> `);
};

export default PostList;
