import React from 'react'
import HTML from './assets/images/html.png'
import CSS from './assets/images/css.png'
import JavaScript from './assets/images/javascript.png'
import ReactIcon from './assets/images/react.png'
import Java from './assets/images/java.png'
import SpringBoot from './assets/images/spring-boot.png'
import GitHub from './assets/images/github.png'
import Photoshop from './assets/images/photoshop.png'
import Leadership from './assets/images/leadership.png'
import Teamwork from './assets/images/teamwork.png'
import Creativity from './assets/images/creativity.png'
import Chess from './assets/images/chess.png'


const SkillContent = () => {
  return (
    <>
      <div className="skillcontent">
            <h1 className="skill">Skill</h1><br></br>
            <h2 className="technicalskills">Technical Skills</h2>
              <div className="TechDiv">
              <p className="ts1"><img src={HTML} style={{width:35,marginRight:5}}></img>HTML<div className="border1"><div className="bar1"></div></div>87%</p><br></br>
              <p className="ts2"><img src={CSS} style={{width:35,marginRight:5}}></img>CSS<div className="border2"><div className="bar2"></div></div>84%</p><br></br>
              <p className="ts3"><img src={JavaScript} style={{width:35,marginRight:5}}></img>Java Script<div className="border3"><div className="bar3"></div></div>81%</p><br></br>
              <p className="ts4"><img src={ReactIcon} style={{width:35,marginRight:5}}></img>React<div className="border4"><div className="bar4"></div></div>83%</p><br></br>
              <p className="ts5"><img src={Java} style={{width:35,marginRight:5}}></img>Java<div className="border5"><div className="bar5"></div></div>90%</p><br></br>
              <p className="ts6"><img src={SpringBoot} style={{width:35,marginRight:5}}></img>Spring Boot<div className="border6"><div className="bar6"></div></div>84%</p><br></br>
              <p className="ts7"><img src={GitHub} style={{width:35,marginRight:5}}></img>GitHub<div className="border7"><div className="bar7"></div></div>92%</p><br></br>
              <p className="ts8"><img src={Photoshop} style={{width:35,marginRight:5}}></img>Photoshop<div className="border8"><div className="bar8"></div></div>93%</p>
              </div>
            <h2 className="softskills">Soft Skills</h2>
            <div className="SoftDiv">
              <p className="ts1"><img src={Leadership} style={{width:35,marginRight:5}}></img>Leadership<div className="border9"><div className="bar9"></div></div>83%</p><br></br>
              <p className="ts2"><img src={Teamwork} style={{width:35,marginRight:5}}></img>Teamwork<div className="border10"><div className="bar10"></div></div>90%</p><br></br>
              <p className="ts3"><img src={Creativity} style={{width:35,marginRight:5}}></img>Creativity<div className="border11"><div className="bar11"></div></div>93%</p><br></br>
              <p className="ts4"><img src={Chess} style={{width:35,marginRight:5}}></img>Chess<div className="border12"><div className="bar12"></div></div>95%</p>
              </div>
      </div>
    </>
  )
}

export default SkillContent

