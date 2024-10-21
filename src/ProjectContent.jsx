import React from "react";
import pse1 from "./assets/images/pse1.jpg"
import pse2 from "./assets/images/pse2.jpg"
import pse3 from "./assets/images/pse3.jpg"
import pse4 from "./assets/images/pse4.jpg"
import pse5 from "./assets/images/pse5.jpg"
import pse6 from "./assets/images/pse6.jpg"
import pse7 from "./assets/images/pse7.jpg"
import pse8 from "./assets/images/pse8.jpg"
import pse9 from "./assets/images/pse9.jpg"
import pse10 from "./assets/images/pse10.jpg"
import pse11 from "./assets/images/pse11.jpg"
import pse12 from "./assets/images/pse12.jpg"
import pse13 from "./assets/images/pse13.jpg"
import pse14 from "./assets/images/pse14.jpg"
import pse15 from "./assets/images/pse15.jpg"
import pse16 from "./assets/images/pse16.jpg"
import pse17 from "./assets/images/pse17.jpg"
import pse18 from "./assets/images/pse18.jpg"

const ProjectContent=()=>{
    return(
        <>
            <h1 class="project">Project</h1>
            <h2 class="react">React</h2>
                <p class="tl">Todo List:</p>
                <iframe src="https://barwin1510.github.io/Todo_List_in_Vite_and_React/" title="Todo List"></iframe>
            <h2 class="ps">Photoshop</h2>
            <div class="pseditscontainer">
                <div class="pseditsbox"><img src={pse1} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse2} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse3} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse4} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse5} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse6} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse7} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse8} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse9} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse10} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse11} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse12} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse13} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse14} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse15} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse16} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse17} class="pseditsimage"></img></div>
                <div class="pseditsbox"><img src={pse18} class="pseditsimage"></img></div>
            </div>
        </>
    )
}

export default ProjectContent