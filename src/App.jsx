import Navbar from './components/Navbar';
import Login from './pages/Login';
import LoginNav from './components/LoginNav';

function App() {
  return (
    <>
    <div className='bg-gray-500 w-full h-screen'>
    {/* <LoginNav/> */}
    <Navbar/>
    <Login/>    
    </div>
    </>
  )
}

export default App
