import Navbar from './components/Navbar';
// import Login from './pages/Login';
import LoginNav from './components/LoginNav';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import TrendingPlaces from './components/TrendingPlaces';
import Filter from './components/Filter';
import Carousel from './components/Carousel';
import Rating from './components/Rating';
import Comment from './components/Comment';
import ConfirmMsg from './components/ConfirmMsg';
import Suggestions from './components/Suggestions';
import Activities from './components/Activities';
import AddComment from './components/AddComment';

function App() {
  return (
    <>
    <Navbar/>
    {/* <LoginNav/> */}
    <div className='pt-20'>
    <Filter/>
    <SearchBar/>
    <Suggestions/>
    <Activities/>
    <TrendingPlaces/>
    <Carousel/>
    <AddComment/>
    <Rating/>
    <ConfirmMsg/>
    <Comment/>
    {/* <Login/>     */}
    <Footer/>
    </div>
    </>
  )
}

export default App
