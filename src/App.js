import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import Review from './Component/Review/Review';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element ={<Home></Home>}></Route>
      <Route path='review' element={<Review></Review>}></Route>
      <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='about' element={<About></About>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
