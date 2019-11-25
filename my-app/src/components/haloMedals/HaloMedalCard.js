import React, {useState} from "react";



export default function HaloMedalCard({m}) {

  //let canvas = document.getElementById("gameScreen");
  // let ctx = canvas.getContext("2d");

  const cycleLoop = [0,1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  let currentLoopIndex= 0;
  let frameCount = 0;
  
  // function drawFrame(frameX, frameY, canvasX, canvasY) {
  //   ctx.drawImage(img,
  //                 frameX * width, frameY * height, width, height,
  //                 canvasX, canvasY, scaledWidth, scaledHeight);
  // }
  
  function step() {
    // frameCount++;
    // if (frameCount < 15) {
    //   window.requestAnimationFrame(step);
    //   return;
    // }
    // frameCount = 0;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawFrame(cycleLoop[currentLoopIndex,0], 0, 0, 0);
    // // currentLoopIndex++;
    // if (currentLoopIndex >= cycleLoop.length) {
    //   currentLoopIndex = 0;
    // }
    // window.requestAnimationFrame(step);
  }

    let img = new Image();
    img.src = m.spriteLocation.spriteSheetUri
    img.onload = function() {
    init();
    
    };

    const scale = 2;
    const width = 74;
    const height = 74;
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;
    
    const [medalimg, setMedalimg] = useState([]);
    
    function init() {
      window.requestAnimationFrame(step);
       
      //ctx.drawImage(img, 0, 0, 74, 74, 0, 0, 18 * scale, 18 * scale);

      // ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
      // ctx.drawImage(img, width * 0, 0, width, height, scaledWidth * 0, 0, scaledWidth, scaledHeight);
      // ctx.drawImage(img, width * 1, 0, width, height, scaledWidth * 1, 0, scaledWidth, scaledHeight);
    }

//////////////////////////

    return (
      <div className="Mapcard">
  
          {/* <h3>{m.id}</h3> */}
          <h3>{m.name}</h3>
          <h3>{m.description}</h3>
          {/* <h3>{m.spriteLocation.left}</h3> */}
          {/* <h3>{m.spriteLocation.top}</h3> */}
          {/* <span className="sprite1 medal"></span> */}
          
          <img className="sprite1 medal" src={m.spriteLocation.spriteSheetUri}/> 

          {/* <img className="MapImage" src={m.spriteLocation.spriteSheetUri}/> */}
          {/* <img  id="gameScreen" src={m.spriteLocation.spriteSheetUri}/> */}
          
          {/* 0px 0px */}
           {/* -148px, -222px */}
          {/* width 74px; */}
          {/* height: 74px;  */}
         
         
      </div>

    )
}