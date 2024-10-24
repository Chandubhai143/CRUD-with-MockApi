import React from 'react'
import Home from'./Home';
import Input from './Input';
import Show from './Show';

import { DataProvider } from './DataContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <DataProvider>
     
     <Router>
     <nav className="nav justify-content-center mb-4 bg-danger-subtle fixed-top ">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/input">Input</Link>
          <Link className="nav-link" to="/show">Show</Link>
        </nav>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Input" element={<Input/>}/>
      <Route path="/Show"  element={<Show/>}/>
     </Routes>
     
     </Router>
     </DataProvider>
    </>
  )
}

export default App;



