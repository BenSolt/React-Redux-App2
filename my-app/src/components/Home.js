import React from "react";
// import NavbarHalo from './components/NavbarHalo';
import Imagee from './SpaceshipsAlien.png';
import Test from '../components/Test';
export default function Home() {

  
    const cycleLoop = [0,1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    let currentLoopIndex= 0;
    
   
    // let canvas = document.getElementById("gameScreen");
    // let ctx = canvas.getContext("2d");
    // let img = new Image();
    //  img.src = Imagee
    // img.onload = function() {
    //             init();
    //       }
 
    const scale = 2;
    const width = 200;
    const height = 200;
    //74 74
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;

  


    // function drawFrame(frameX, frameY, canvasX, canvasY) {
    //   ctx.drawImage(img,
    //                 frameX * width, frameY * height, width, height,
    //                 canvasX, canvasY, scaledWidth, scaledHeight);
    //   } 

      // function step(){
      //   drawFrame(cycleLoop[currentLoopIndex,0], 2, 0,0);
      // } 
     
      // function init() {
      //   window.requestAnimationFrame(step);
      // }
      

    return(
      <div>
              
        <Test/>

            <h1>HOME</h1>
              
              {/* <canvas id="gameScreen"></canvas> */}

              <img  id="imagg" src={Imagee} />
              {/* <img id='test' src={Imagee}/> */}
              <span className="sprite ie"></span>
              
              
              {/* <img src={Imagee} /> */}
              
            {/* <canvas id='gameScreen'width="256" height="256"></canvas> */}
               
                
      </div>
    )
;}