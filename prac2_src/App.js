
import './App.css';
import React from 'react';
import {Navbar} from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import {About} from './components/pages/About';
import {Home} from './components/pages/Home';
import {Services} from './components/pages/Services';
import {Contact} from './components/pages/Contact';

function App() {
  return (

   <div className="App"><Navbar/>
        <Routes>
<Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
           </Routes>
</div>

  );
}

export default App;
