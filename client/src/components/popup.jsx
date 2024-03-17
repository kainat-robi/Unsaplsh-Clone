import { useState } from 'react';
import { useAddColQuery } from '../redux/addcol'; 
import { FaChevronLeft, FaChevronRight, FaHeart, FaPlus } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import { useLikeImgQuery } from '../redux/like'; 
import CreateCol from './createcol'; 
import './style.css';

const Popup = ({ photoUrl, onClose, images }) => {
  const Navigate = useNavigate(); 
  const [currentImageIndex, setCurrentImageIndex] = useState(images.findIndex(image => image.urls.regular === photoUrl));
  const [liked, setLiked] = useState(false); 

  const { data, error, isLoading, isSuccess, isError, refetch } = useLikeImgQuery();

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = photoUrl; 
    anchor.download = 'image.jpg'; 
    anchor.click(); 
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleLike = () => {
    if (!isSuccess) {
      Navigate('/login'); 
    } else {
      setLiked(!liked);
      refetch(); 
    }
  };

  return (
    <div className='imagepopup'>
      <button className='closebtn' onClick={onClose}></button> 
      <a href={photoUrl} className='downloadbtn' download onClick={handleDownload}>Download</a>
      <div className='largeimg'>
        <img src={images[currentImageIndex].urls.regular} alt="Clicked Photo" className='popup-image' /> 
      </div>
      <button className='controls prebtn' onClick={handleNext}><FaChevronRight/></button>
      <button className='controls nxtbtn' onClick={handlePrev}><FaChevronLeft/></button>

      <button className='likeadd  likebtn' onClick={handleLike}>
        {isSuccess ? <FaHeart color="red" /> : <FaHeart />}
      </button>

      <button className='likeadd addbtn'>
        <FaPlus />
      </button>
       <CreateCol />
    </div>
  );
}

export default Popup;
