
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Auth/pages/LoginPage';
import RegisterPage from './components/Auth/pages/Register';
import HomePage from './components/HomePage';
import BookingContainer from './components/Booking/BookingContainer';
import AdminContainer from './components/adminPanel/adminContainer';


function App() {
  return (
    <div className="App"> 
      <Routes>  
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/> 
        <Route path='/register' element={<RegisterPage/>}/> 
        <Route path='/booking' element={<BookingContainer/>}/> 
        <Route path='/admin' element={<AdminContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
