// import React from 'react'
import BasicCard from "./Card";
import "./Cards.css";
import Cloud from "../assets/cloud.png";
import Foodi from "../assets/foodi.png";
import Pass from "../assets/pass.png";
import TaskTracker from "../assets/tasktracker.png";
// import Divider from '@mui/material';

function Cards() {
  return (
    <div >
    <div className="containers gap-5 mt-14"  style={{background:'none'}}>
      <div>
        <BasicCard
          name="Cloud Files"
          githublink="https://github.com/manjuhiremath/cloud-files"
          websitelink="https://cloud-files-manjuhiremath.vercel.app/"
          img={Cloud}
          tech="ReactJs,Firebase"
        />
      </div>
      <div>
        <BasicCard
          name="Task Tracker"
          websitelink="https://manjuhiremath.github.io/Task-Tracker/"
          githublink="https://github.com/manjuhiremath/Task-Tracker"
          img={TaskTracker}
          tech="ReactJs,NodeJs,Express"
        />
      </div>
      <div>
      <BasicCard
        name="Password Generator"
        githublink="https://github.com/manjuhiremath/passgenerator"
        websitelink="https://passgenerator-ashen-xi.vercel.app/"
        img={Pass}
        tech="ReactJs,Tailwindcss,Javascript"
      />
    </div>
    </div>
    <div className="containers gap-5 mt-5"   style={{background:'none'}}>
    <div>
      <BasicCard
        name="Foodi"
        githublink="https://github.com/manjuhiremath/Neuronexa"
        websitelink="https://manjuhiremath.github.io/Neuronexa/"
        img={Foodi}
        tech="ReactJs,css"
      />
    </div>

    </div>
  </div>
  );
}

export default Cards;
