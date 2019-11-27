import React from "react";
// import NavbarHalo from './components/NavbarHalo';
//import Imagee from './SpaceshipsAlien.png';
import BenKaylee from '../images/BenandKaylee.jpg'; 

export default function Home() {

  
    return(
      <div className='mainbox'>
          <h1 className='margintext'>ABOUT ME</h1>

        <div className='name'>
          <h1 className='margintextName'>Benjamin Solt</h1>
        </div>

        <div className="section1">
            <img class='imgBenKaylee'src={BenKaylee} alt="BenandKaylee(dog)" />
            <div class="textholder1">
              <p> Currently, I am attending school at Lambda, online, for Web Design. I love
                it and cant wait to use my experiences in the working world.
                <br/>
                <br/>
                Apart from school, I hang out with family, friends, and play sports. I also enjoy, 
                creating artwork, working with the Unreal Engine, and playing 
                the occasional video game with friends.
              </p>
            </div>
        </div>

        <div className="sectionContact">

          <div className="contactbox">
              <h4 className="margintext2">Email: Bensolt@gmail.com</h4>
              <h4 className="margintext2">Cell#: 215-360-5410</h4>
              <button class="btn" href="https://www.linkedin.com/in/ben-solt-8447bb94/">LinkedIn</button>
              <button class="btn" href="https://github.com/BenSolt">GitHub</button>
          </div>
          
          <div className="skillbox">
            <h2 className='margintext'>Skills</h2>
              <div className='ulholder'>
                <ul className='litext'>
                  <li>Javascript</li>
                  <li>CSS, HTML</li>
                  <li>Adobe Creative Suite</li>
                </ul>
                <ul className='litext'>
                  <li>3D Studio Max</li>
                  <li>Unreal Engine</li>
                </ul>
              </div>
             
          </div>
        </div>
    
              {/* <img  className="imag1" src={Imagee} 
                 style={{objectFit: "none"}}/>
              <img  className="imag2" src={Imagee} 
                 style={{objectFit: "none"}}/>
              <img  className="imagdefault" src={Imagee}/>  */}
                
      </div>
    )
;}