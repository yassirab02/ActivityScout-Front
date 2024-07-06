import Navbar from './components/Navbar';
import Login from './pages/Login';
import LoginNav from './components/LoginNav';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    {/* <LoginNav/> */}
    <div className='pt-20'>
    <SearchBar/>
    {/* <Login/>     */}
    <Footer/>
    </div>
    </>
  )
}

export default App
