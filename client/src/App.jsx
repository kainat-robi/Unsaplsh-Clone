import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Search from './components/serach';
import People from './components/people';
import Nature from './components/nature';
import Travel from './components/animal';
import Art from './components/art';
import SubmitPhoto from './components/submitphoto';
import Login from './components/login'; 
import Signup from './components/signup';
import  CreateCol  from './components/createcol';
import Blog from './components/blog'
import Explore from './components/explore';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/blog' element={<Blog/>}/>
       <Route path='/createcol' element={<CreateCol/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/search" element={<Search />} />  
        <Route path='/people' element={<People />}/> 
        <Route path='/nature' element={<Nature/>}/>  
        <Route path='/animal' element={<Travel/>}/> 
        <Route path='/art' element={<Art/>}/> 
        <Route path='/submitphoto' element={<SubmitPhoto/>}/> 
        
      </Routes>
    </Router>
  );
};

export default App;