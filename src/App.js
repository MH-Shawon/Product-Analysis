import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import DashBoard from './Component/DashBoard/DashBoard';

import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Review from './Component/Review/Review';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
