import React from 'react';
import ReactDOM from 'react-dom/client'

 import { BrowserRouter , Routes , Route  } from 'react-router-dom';
 import Home from './Home';
import Restaurants from './components/Restaurants';
function Apks(){
    return (
        <>
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurants" element={<Restaurants />} />
  </Routes>
</BrowserRouter>

       </>
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<Apks></Apks>)