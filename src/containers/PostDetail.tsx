import Header from '../components/Header';
import { useParams } from 'react-router-dom';
const PostDetail = () => {
  const {id} = useParams(); 
  return (
    <div>
      <Header />
      {id}
    </div>
  );
};

export default PostDetail;