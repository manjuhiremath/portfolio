// import React from 'react'
import BasicCard from "./Card";
import "./Cards.css";
import Cloud from "../assets/cloud.png";
import TaskTracker from "../assets/tasktracker.png";
// import Divider from '@mui/material';

function Cards() {
  return (
    <div className="containers gap-5 mt-14">
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
          tech="ReactJs,TailwindCSS"
        />
      </div>
    </div>
  );
}

export default Cards;
