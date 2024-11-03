import React from 'react'
import HTML from './assets/images/html.png'
import CSS from './assets/images/css.png'
import JavaScript from './assets/images/javascript.png'
import ReactIcon from './assets/images/react.png'
import Java from './assets/images/java.png'
import SpringBoot from './assets/images/spring-boot.png'
import MySQL from './assets/images/mysql.png'
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
              <p className="ts1"><img className="img1" src={HTML}></img>HTML<div className="border1"><div className="bar1"></div></div>87%</p><br></br>
              <p className="ts2"><img className="img2" src={CSS}></img>CSS<div className="border2"><div className="bar2"></div></div>84%</p><br></br>
              <p className="ts3"><img className="img3" src={JavaScript}></img>Java Script<div className="border3"><div className="bar3"></div></div>81%</p><br></br>
              <p className="ts4"><img className="img4" src={ReactIcon}></img>React<div className="border4"><div className="bar4"></div></div>83%</p><br></br>
              <p className="ts5"><img className="img5" src={Java}></img>Java<div className="border5"><div className="bar5"></div></div>90%</p><br></br>
              <p className="ts6"><img className="img6" src={SpringBoot}></img>Spring Boot<div className="border6"><div className="bar6"></div></div>84%</p><br></br>
              <p className="ts7"><img className="img7" src={MySQL}></img>MySQL<div className="border7"><div className="bar7"></div></div>91%</p><br></br>
              <p className="ts8"><img className="img8" src={GitHub}></img>GitHub<div className="border8"><div className="bar8"></div></div>92%</p><br></br>
              <p className="ts9"><img className="img9" src={Photoshop}></img>Photoshop<div className="border9"><div className="bar9"></div></div>93%</p>
              </div>
            <h2 className="softskills">Soft Skills</h2>
            <div className="SoftDiv">
              <p className="ts1"><img className="img10" src={Leadership}></img>Leadership<div className="border10"><div className="bar10"></div></div>83%</p><br></br>
              <p className="ts2"><img className="img11" src={Teamwork}></img>Teamwork<div className="border11"><div className="bar11"></div></div>90%</p><br></br>
              <p className="ts3"><img className="img12" src={Creativity}></img>Creativity<div className="border12"><div className="bar12"></div></div>93%</p><br></br>
              <p className="ts4"><img className="img13" src={Chess}></img>Chess<div className="border13"><div className="bar13"></div></div>95%</p>
              </div>
      </div>
    </>
  )
}

export default SkillContent

