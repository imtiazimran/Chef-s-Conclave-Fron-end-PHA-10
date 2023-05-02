import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
