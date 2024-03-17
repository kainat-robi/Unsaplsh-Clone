import { useState } from 'react';
import { useAddColQuery } from '../redux/addcol'; 
import { useNavigate } from 'react-router-dom';
import './style.css';

const CreateCol = () => {
  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const { data, error, isLoading, isSuccess, refetch } = useAddColQuery();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch({ id: 'your-collection-id', submit: collectionName }); 
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!isSuccess) {
    Navigate('/login'); 
  } else {
    setCollectionDescription(!collectionDescription);
    refetch(); 
  }

  return (
    <div className='collection'>
      <div>
      </div>
      <div>
        <h1>Add to Collection</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Create new collection' 
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          /><br/>
          <input 
            type='text' 
            placeholder='Collection Description' 
            value={collectionDescription}
            onChange={(e) => setCollectionDescription(e.target.value)}
          />
          <button type="submit">Create Collection</button>
        </form>
      </div>
    </div>
  );
}

export default CreateCol;
