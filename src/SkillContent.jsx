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
      <div class="skillcontent">
            <h1 class="skill">Skill</h1><br></br>
            <h2 class="technicalskills">Technical Skills</h2>
              <div class="TechDiv">
              <p class="ts1"><img src={HTML} style={{width:35,marginRight:5}}></img>HTML<div class="border1"><div class="bar1"></div></div>87%</p><br></br>
              <p class="ts2"><img src={CSS} style={{width:35,marginRight:5}}></img>CSS<div class="border2"><div class="bar2"></div></div>84%</p><br></br>
              <p class="ts3"><img src={JavaScript} style={{width:35,marginRight:5}}></img>Java Script<div class="border3"><div class="bar3"></div></div>81%</p><br></br>
              <p class="ts4"><img src={ReactIcon} style={{width:35,marginRight:5}}></img>React<div class="border4"><div class="bar4"></div></div>83%</p><br></br>
              <p class="ts5"><img src={Java} style={{width:35,marginRight:5}}></img>Java<div class="border5"><div class="bar5"></div></div>90%</p><br></br>
              <p class="ts6"><img src={SpringBoot} style={{width:35,marginRight:5}}></img>Spring Boot<div class="border6"><div class="bar6"></div></div>84%</p><br></br>
              <p class="ts7"><img src={GitHub} style={{width:35,marginRight:5}}></img>GitHub<div class="border7"><div class="bar7"></div></div>92%</p><br></br>
              <p class="ts8"><img src={Photoshop} style={{width:35,marginRight:5}}></img>Photoshop<div class="border8"><div class="bar8"></div></div>93%</p>
              </div>
            <h2 class="softskills">Soft Skills</h2>
            <div class="SoftDiv">
              <p class="ts1"><img src={Leadership} style={{width:35,marginRight:5}}></img>Leadership<div class="border9"><div class="bar9"></div></div>83%</p><br></br>
              <p class="ts2"><img src={Teamwork} style={{width:35,marginRight:5}}></img>Teamwork<div class="border10"><div class="bar10"></div></div>90%</p><br></br>
              <p class="ts3"><img src={Creativity} style={{width:35,marginRight:5}}></img>Creativity<div class="border11"><div class="bar11"></div></div>93%</p><br></br>
              <p class="ts4"><img src={Chess} style={{width:35,marginRight:5}}></img>Chess<div class="border12"><div class="bar12"></div></div>95%</p>
              </div>
      </div>
    </>
  )
}

export default SkillContent

