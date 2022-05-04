import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Login from './Login'
import Header from './Header';
import Home from './Home';

function App() {
  return ( 
   <div className='App'>
     <BrowserRouter>
     <div>         
        <div className="content">
             <Header/>
            <Routes>
              <Route exact path ="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>
     </div>
     </BrowserRouter>
   </div>
  )
}

export default App