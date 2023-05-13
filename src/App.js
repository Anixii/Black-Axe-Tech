
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Auth/pages/LoginPage';
import RegisterPage from './components/Auth/pages/Register';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App"> 
    <NavLink to={'/login'}> hello</NavLink>
      <Routes>  
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/> 
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
