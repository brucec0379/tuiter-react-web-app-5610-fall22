import TuitItem from './tuit-item';
import { useSelector } from 'react-redux';

const TuitList = () => {
  const postsArray = useSelector(state => state.tuits);

  return (<ul className="list-group">
    {postsArray.map((v, i) => <TuitItem key={i} {...v}/>)}
  </ul>);
};

export default TuitList;
