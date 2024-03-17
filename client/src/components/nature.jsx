import { useState } from 'react';
import { useSearchImgQuery } from '../redux/searchapi'; 
import Popup from './popup'; 
import image from './images/bg.jpg';
import './style.css'; 

const Nature = () => {
  const { data, error, isLoading } = useSearchImgQuery('nature');
  const [clickedPhotoUrl, setClickedPhotoUrl] = useState('');

  const handleRandomPhotoClick = (photoUrl) => {
    setClickedPhotoUrl(photoUrl);
  }

  const handleClosePopup = () => {
    setClickedPhotoUrl('');
  }

  return (
    <div>
      <div className='bg' style={{ backgroundImage: `url(${image})` }}>
        <div className='content'>
          <h1>Nature</h1>
          <p>Nature's wonders take center stage in this category, where photographers <br/>
          capture the breathtaking landscapes, diverse flora and fauna, and<br/> mesmerizing natural phenomena that adorn our planet. From grand vistas <br/>
          to macro shots, these images transport viewers into the heart of the great <br/>
          outdoors.</p>
          <button type='submit'>submit to Art</button>
        </div>
      </div>
      <div className='SearchBarContainer'>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error occurred</p>}
        <div>
          {data ? (
            data.results.map((image) => (
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
      </div>
      {clickedPhotoUrl && <Popup photoUrl={clickedPhotoUrl} onClose={handleClosePopup} images={data.results} />}
    </div>
  );
};

export default Nature;
