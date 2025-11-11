import React from "react";
import cowboyquad from "../assets/images/cowboyquad.png"
import dancer1 from "../assets/images/dancer1.png"
import dancer2 from "../assets/images/dancer2.png"
import dancer3 from "../assets/images/dancer3.png"
import dancer4 from "../assets/images/dancer4.png"
import mitchpaints from "../assets/images/mitchpaints.png"
import "../styles.css"

export default function Home() {
  return (
    <>
    <section className="home-container">
    <img src={mitchpaints} className="mitchpaints" alt="Mitchell painting" />
    <div className="home-group">
    <h1 id="mitch-name">CowboyQuad Arts</h1>
      <div className="boxes">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>
      
      <div className="dancer-group">
        <img className="dancers" src={dancer1}/>
        <img className="dancers" src={dancer2}/>
        <img className="dancers" src={dancer3}/>
        <img className="dancers" src={dancer4}/>
      </div>
    </div>
  </section>
  <p className="home-desc">
    Explore the unique artistic journey and works of Mitchell, a gifted artist who paints using his mouth.
  </p>
  </>
  );
}
