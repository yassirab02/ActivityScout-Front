import Navbar from './components/Navbar';
// import Login from './pages/Login';
import LoginNav from './components/LoginNav';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Suggestions from './components/Suggestions';
import TrendingPlaces from './components/TrendingPlaces';
import ActivityTypes from './components/ActivityTypes';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
    <Navbar/>
    {/* <LoginNav/> */}
    <div className='pt-20'>
      <ActivityTypes/>
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
