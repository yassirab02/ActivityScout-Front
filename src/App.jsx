import Navbar from './components/Navbar';
import Login from './pages/Login';
import LoginNav from './components/LoginNav';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <>
    <Navbar/>
    {/* <LoginNav/> */}
    <div className='pt-20'>
    <SearchBar/>
    <Suggestions/>
    {/* <Login/>     */}
    <Footer/>
    </div>
    </>
  )
}

export default App
