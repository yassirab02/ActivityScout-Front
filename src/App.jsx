import Navbar from './components/Navbar';
// import Login from './pages/Login';
import LoginNav from './components/LoginNav';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Suggestions from './components/Suggestions';
import TrendingPlaces from './components/TrendingPlaces';
import Filter from './components/Filter';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
    <Navbar/>
    {/* <LoginNav/> */}
    <div className='pt-20'>
    <Filter/>
    <SearchBar/>
    <Suggestions/>
    <TrendingPlaces/>
    {/* <Login/>     */}
    <Footer/>
    </div>
    </>
  )
}

export default App
