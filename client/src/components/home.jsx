import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../redux/todoslicer';
import Popup from './popup'; 
import './style.css'; 

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);
  const error = useSelector((state) => state.todo.error);
  const images = useSelector((state) => state.todo.data);
  const [clickedPhotoUrl, setClickedPhotoUrl] = useState(''); 

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleRandomPhotoClick = (photoUrl) => {
    setClickedPhotoUrl(photoUrl);
  }

  return (
    <div className='SearchBarContainer'>
      <div className='home'/>
      <h1>Unsplash</h1>
      <p className='p'> The internet’s source for visuals.<br/> Powered by creators everywhere.</p>
      <input className='searchinput' type="text" placeholder="Search images" />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred</p>}
      <div>
        {images ? (
          images.map((image) => (
            <img 
              key={image.id} 
              src={image.urls.regular} 
              alt={image.alt_description} 
              onClick={() => handleRandomPhotoClick(image.urls.regular)} 
            />
          ))
        ) : (
          <p>No images to display</p>
        )}
      </div>
      {clickedPhotoUrl && <Popup photoUrl={clickedPhotoUrl} onClose={() => setClickedPhotoUrl('')} images={images} />}
    </div>
  );
};

export default Home;
