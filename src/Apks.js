import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';

function Apks(){
    return (
        <>
      <Header></Header>
      <Middle></Middle>
      <Footer></Footer>

       </>
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<Apks></Apks>)