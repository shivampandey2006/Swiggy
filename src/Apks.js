import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from "./Header";
import Middle from "./Middle"
import Footer from './footer';


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