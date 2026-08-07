


export default  function LowHeader(){
    return (

        <>
           
        <div className="header1 flex flex-col md:flex-row items-center  justify-between bg-white h-50 md:h-30  pt-8 md:pt-15  md:p-10 ">
        
         <div className="flex  md:gap-2 gap-4 "> 
            <div className="flex h-12 sm:h- "  ><  img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSctaMkvaFuimJoGAg-UCZewh-AvIZOGlaMpdi0vYX4ZcPl7EImEYruZE&s=10" className="rounded-xl border-2 border-amber-50 "/></div>
          <div className="pt-2 font-bold text-black text-2xl  font-sans " >Swiggy</div>
           </div>


           <div className=" text-bold flex flex-row gap-5 md:gap-14  flex-wrap md:flex-nowrap  justify-center items-center ">
           
        <div><button className=" font-bold text-black text-2x">Swiggy Corporate</button></div>
         <div> <button className="font-bold text-black">Partner With US</button></div>
         <div className=" font-bold text-black rounded-2xl h-10 w-25 mb-2 "><button className="h-10 w-25 border-2 border-gray-200 rounded-2xl">Get the App</button></div>
         <div className="font-bold bg-black  text-white rounded-2xl h-10 w-25 mb-2"><button className="h-10 w-25 ">Sign in</button></div>
      </div>
      
          </div>
        
        </>
    )
}