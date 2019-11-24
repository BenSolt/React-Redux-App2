import React from "react";
// import NavbarHalo from './components/NavbarHalo';
import Imagee from './SpaceshipsAlien.png';

export default function Home(props) {


  
const fruit2 = [
  {name:"Banana"}, {name:"Orange"}, {name:"Apple"}, {name:"Mango"}];


// function fruitFunc2() { 
//   document.getElementById("demo").innerHTML = fruit2.map(a => {
        
// console.log(a.name)
 
//       return(
//         <div>
//           <p id="demo">{a.name}</p>
//         </div> 
//       )
//  })}


fruit2.filter(str => (str.name === "Apple"))

  function numFunc() {
    const filt = 
    fruit2.filter(str => str.name === "Apple") 
    
    //return str.name === "Apple"
    
    console.log(filt)
  }
 
  function fruitFunc2() {
    fruit2.map(a => {
    console.log(a.name)
  })}

//FILTER
  const fruu = fruit2.filter(str => (str.name === "Apple"))

    return(

        <div>
              
          <button onClick={() => { numFunc()
              }}>Filter</button>

          <button onClick={() => { fruitFunc2()
          }}>map to Console</button>

         
     
        

          

          {fruu.map(a =>  {
             
          return(
            <div> 
                
              <p>{a.name}</p>
              
            </div> 
          )
          })}

        

      
            {/* fruit2.filter(a => a.name === "Apple") */}
            
        </div>
    )
}
