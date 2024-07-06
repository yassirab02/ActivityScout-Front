import Navbar from './components/Navbar';
import Login from './pages/Login';
import LoginNav from './components/LoginNav';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
    <Navbar/>
    {/* <LoginNav/> */}
    <div className='bg-gray-500 pt-20'>
    <SearchBar/>
    <Login/>    
    </div>
    </>
  )
}

export default App
