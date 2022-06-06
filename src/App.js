import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componenet/About/About';
import Blog from './Componenet/Blog/Blog';
import Cart from './Componenet/Cart/Cart';
import Dashboard from './Componenet/Dashboard/Dashboard';
import Header from './Componenet/Header/Header';
import Home from './Componenet/Home/Home';
import NotFound from './Componenet/NotFound/NotFound';
import Orders from './Componenet/Orders/Orders';
import Review from './Componenet/Review/Review';

function App() {
  return (

    <div className="App">
      < Header ></Header>

      <div className=' mt-20'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>



    </div >
  );
}

export default App;
