import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
  return (`<ul class="list-group">
${who.map(v => WhoToFollowListItem(v)).join('')}
</ul> `);
};

export default WhoToFollowList;