import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import '@smastrom/react-rating/style.css'

function App() {

  return (
      <div>
        <ToastContainer />
        <Navigation></Navigation>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  )
}

export default App
