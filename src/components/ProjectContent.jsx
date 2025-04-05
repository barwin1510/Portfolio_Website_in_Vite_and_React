import React from "react";
import ProjectVideo from "../assets/videos/Registration_Project_Video.mp4";
import pse1 from "../assets/images/pse1.jpg";
import pse2 from "../assets/images/pse2.jpg";
import pse3 from "../assets/images/pse3.jpg";
import pse4 from "../assets/images/pse4.jpg";
import pse5 from "../assets/images/pse5.jpg";
import pse6 from "../assets/images/pse6.jpg";
import pse7 from "../assets/images/pse7.jpg";
import pse8 from "../assets/images/pse8.jpg";
import pse9 from "../assets/images/pse9.jpg";
import pse10 from "../assets/images/pse10.jpg";
import pse11 from "../assets/images/pse11.jpg";
import pse12 from "../assets/images/pse12.jpg";
import pse13 from "../assets/images/pse13.jpg";
import pse14 from "../assets/images/pse14.jpg";
import pse15 from "../assets/images/pse15.jpg";
import pse16 from "../assets/images/pse16.jpg";
import pse17 from "../assets/images/pse17.jpg";
import pse18 from "../assets/images/pse18.jpg";

const ProjectContent = () => {
  return (
    <>
      <h1 className="project">Project</h1>
      <h2 className="subprojects">React</h2>
      <p className="tl">Calculator:</p>
      <iframe
        src="https://calculator-in-vite-and-react.vercel.app/"
        title="Calculator"
      ></iframe>
      <p className="tl">Todo List:</p>
      <iframe
        src="https://todo-list-in-vite-and-react.vercel.app/"
        title="Todo List"
      ></iframe>
      <h2 className="subprojects">Spring Boot with MySQL</h2>
      <p className="tl">Book Store API:</p>
      <a
        href="https://bookstore-50023441913.development.catalystappsail.in/"
        target="_blank"
      >
        Click here
      </a>
      <p className="tl">Results API:</p>
      <a
        href="https://results-50023441913.development.catalystappsail.in/"
        target="_blank"
      >
        Click here
      </a>
      <h2 className="subprojects">React & Spring Boot with MySQL</h2>
      <video className="rp"
        controls
        src={ProjectVideo}
      />
      <h2 className="subprojects">Photoshop</h2>
      <div className="pseditscontainer">
        <div className="pseditsbox">
          <img src={pse1} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse2} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse3} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse4} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse5} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse6} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse7} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse8} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse9} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse10} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse11} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse12} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse13} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse14} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse15} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse16} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse17} className="pseditsimage"></img>
        </div>
        <div className="pseditsbox">
          <img src={pse18} className="pseditsimage"></img>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
