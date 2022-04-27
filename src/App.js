import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Login from './Login'
import Header from './Header';

function App() {
  return ( 
   <div className='App'>
     <BrowserRouter>
     <div>         
        <div className="content">
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/header" element={<Header/>} />
            </Routes>
          </div>
     </div>
     </BrowserRouter>
   </div> 
  );
}

export default App;
