
import { createSlice } from "@reduxjs/toolkit";
const Slicer1 =  createSlice({
    name :'slice1', 
    initialState : {items:[] , count :  0} ,
    reducers:{


  addItems:(state , action )=>{
state.items.push({...action.payload , quantity:1}) ;
state.count++
  } ,


  DecrementItem:(state , action )=>{
     const element  = state.items.find(item=>item.id===action.payload.id)
     if(element.quantity>1){
        element.quantity-- ; 
     }
     else {
         state.items = state.items.filter(item=>item.id!=action.payload.id)
     }
     state.count--
 
  } , 

  IncrementItem:(state , action )=>{
 const element  = state.items.find(item=>item.id===action.payload.id)
  element.quantity++ ; 
  state.count++
  }
}
})
export const {addItems , DecrementItem , IncrementItem} =  Slicer1.actions
export default Slicer1.reducer
//  array bcoz multiple items can be shown
// three fubction n
// adding new one 
// increace which is we already add 
// decrease which is we already dcrease 




// id:238493974
// name 
// category 
// quantity 