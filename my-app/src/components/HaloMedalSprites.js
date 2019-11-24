import React from "react";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

function SpriteSheet() {
    
    let img = new Image();
    //img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
    
    img.onload = function() {
      init();
    };
    
    
    const scale = 3;
    const width = 16;
    const height = 18;
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;
    
    
    function init() {
           ctx.drawImage(img, 0, 0, 16 , 18, 0, 0, 16 * scale, 18 * scale);
        // ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
        // ctx.drawImage(img, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
    }

    return (
        
        <div className="container">
            
    <h4>Draw individual sprites from a spritesheet</h4>
          <h1>TEST</h1>
          <canvas id="gameScreen" width='100' height='100' border='2px solid black'/>
            <img src={spaceship}/>
            
             </div>
      );

}

export default SpriteSheet