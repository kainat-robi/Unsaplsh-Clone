import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../redux/todoslicer';
import Popup from './popup'; 
import './style.css'; 

const Explore = () => {
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
      <p>Explore</p>
      <h1>Explore Unsplash photos</h1>
      <p className='p'> Unsplash has over a million free high-resolution photos.<br/> Explore these popular photo categories on Unsplash.<br/> All photos here are free to download and use under the<br/> Unsplash License.</p>
      <h2>Free high-resolution Unsplash photos</h2>
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

export default Explore;
