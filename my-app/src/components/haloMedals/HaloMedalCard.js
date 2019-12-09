import React, {useState} from "react";



export default function HaloMedalCard({m}) {

  
  // const cycleLoop = [0,1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  // let currentLoopIndex= 0;
  // let frameCount = 0;
  
  //const aMedal = m.name.filter(str => (str.id == 1))

 
// const scale = 2;
// const width = 16;
// const height = 18;
// const scaledWidth = scale * width;
// const scaledHeight = scale * height;

// let img = new Image();
//img.src = "https://content.halocdn.com/media/Default/games/halo-5-guardians/sprites/medals_10-26-17-1ed917479dd14818b09ef10e29ff60b1.png";


// function init() {
//   ctx.drawImage(img, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
//   ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
//   ctx.drawImage(img, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
// }
//////////////////////////

    return (
      <div className="Medalcard">
  
          {/* <h3>{m.id}</h3> */}
          <h3>{m.name}</h3>
          <h3>{m.description}</h3>
          {/* <h3>{m.spriteLocation.left}</h3> */}
          {/* <h3>{m.spriteLocation.top}</h3> */}
          {/* <span className="sprite1 medal"></span> */}
          
          
          {/*.classification: 'Oddball' */}
          <div className='spriteholder'>
            <img className="sprite" src={m.spriteLocation.spriteSheetUri}
                style={{
                objectFit: "none",
                objectPosition: `-${m.spriteLocation.left}px -${m.spriteLocation.top}px`
                // height: `${m.spriteLocation.height}px`
                // width: `${m.spriteLocation.width}px`
                }}
              />
            {/* <img className="carrierKill" src={m.spriteLocation.spriteSheetUri}
                style={{objectFit: "none"}}/>


            <img className="oddballKill" src={m.spriteLocation.spriteSheetUri}
                style={{objectFit: "none"}}/>

            <img className="killspree" src={m.spriteLocation.spriteSheetUri}
                style={{objectFit: "none"}}/> */}
          </div>

          
         
         
         
      </div>

    )
}