
import './App.css';

import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LogIn from './components/LogIn';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}/>
    </Routes>
  
    </BrowserRouter>


    </>

  );
}

export default App;
