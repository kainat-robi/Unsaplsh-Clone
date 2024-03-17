import { useState } from 'react';
import './style.css'; 
import { usePostImgQuery } from '../redux/postimage'; 

const SubmitPhoto = ({ onClose }) => {
  const [photo, setPhoto] = useState(null);
  const [submitStatus, setSubmitStatus] = useState('idle'); 

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleSubmit = () => {
    setSubmitStatus('loading'); 
    const formData = new FormData();
    formData.append('photo', photo);
    usePostImgQuery(formData)
      .then((response) => {
        setSubmitStatus('succeeded');
        setPhoto(null);
        onClose();
      })
      .catch((error) => {
        setSubmitStatus('failed');
        console.error('Error submitting photo:', error);
      });
  };

  return (
    <div className="submit-photo-popup">
      <h2>Add Photo</h2>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      <div className="submit-buttons">
        <button onClick={handleSubmit} disabled={submitStatus === 'loading'}>
          {submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SubmitPhoto;
