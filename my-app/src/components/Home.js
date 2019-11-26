import React from "react";
// import NavbarHalo from './components/NavbarHalo';
//import Imagee from './SpaceshipsAlien.png';
export default function Home() {

  
    return(
      <div>
      
        <h1 className='textwhite'>ABOUT ME</h1>

        <h2 className='textwhite'>Benjamin Solt</h2>
        
        <p className='textwhite'> Apart from attending school online with Lambda, I enjoy hanging out with 
            family, friends, meeting new people, and playing sports, especially Ultimate Frisbee.
            <br/>
            In addition, I enjoy coding, creating artwork, working with the Unreal Engine, and playing 
            the occasional video game.
        </p>

        <button class="button" href="https://www.linkedin.com/in/ben-solt-8447bb94/">LinkedIn</button>
                            <h4>Email: Bensolt@gmail.com</h4>
                            <h4>Cell#: 215-360-5410</h4>


        <div class="info2">
          <h2>Skills</h2>
            <ul>
              <li>Javascript</li>
              <li>CSS, HTML</li>
              <li>Adobe Creative Suite</li>
              <li>3D Studio Max</li>
              <li>Unreal Engine</li>
            </ul>
        </div>

        <div class="imageholder">
          <img class='img'src="../images/BenandKaylee.jpg" alt="BenandKaylee(dog)" />
         
        </div>



              {/* <img  className="imag1" src={Imagee} 
                 style={{objectFit: "none"}}/>
              <img  className="imag2" src={Imagee} 
                 style={{objectFit: "none"}}/>
              <img  className="imagdefault" src={Imagee}/>  */}
                
      </div>
    )
;}