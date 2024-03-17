import { useState } from 'react';
import { useSearchImgQuery } from '../redux/searchapi';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const { data, isLoading, error } = useSearchImgQuery(searchValue);

  const handleSearch = () => {
    navigate(`/${searchValue}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
      
    }
  };

  return (
    <div className='SearchBarContainer'>
      <input
        className='search-input'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Search images"
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {data.results.map((item) => (
            <img key={item.id} src={item.urls.regular} alt={item.alt_description} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
