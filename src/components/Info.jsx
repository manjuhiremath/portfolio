// import  Box  from "@mui/material";
// import Item from "@mui/material";
import manjuImage from "../assets/manjuprofile.jpeg"; // Make sure to adjust the path accordingly
import hilogo from "../assets/hilogo.png";
import "./info.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Typewriter } from "react-simple-typewriter";

function Info() {
  return (
    <section className="column-center">
      <div
        style={{ marginLeft: "10px", marginRight: "20px" }}
        className="col col1 "
      >
       <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
  <h1 style={{
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 700,
    textAlign: "left",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem"
  }}>
    Hi, I'm Manju
    <img
      style={{
        width: "clamp(40px, 4vw, 50px)",
        height: "auto",
        objectFit: "contain"
      }}
      src={hilogo}
      alt="Hi emoji"
    />
  </h1>
  
  <h1 style={{
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    fontWeight: 700,
    textAlign: "left",
    color: "#333",
    marginBottom: "1rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  }}>
    I'm a&nbsp;
    <span style={{ 
      color: "orange",
      fontSize: "inherit",
      fontWeight: "inherit"
    }}>
      <Typewriter
        loop
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={70}
        delaySpeed={1000}
        words={["Developer", "Designer", "Tech Enthusiast"]}
      />
    </span>
  </h1>
  
  <p style={{
    fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
    color: "#403e3e",
    textAlign: "left",
    lineHeight: 1.6,
    marginBottom: "2rem"
  }}>
    Full Stack MERN Developer specializing in end-to-end web development,
    <br /> based in Bengaluru, Karnataka, India. 📍
  </p>
</div>

        <div
          className="mt-4 px-4"
          style={{
            // fontSize: "1.2rem",
            // color: "#403e3e",
            textAlign: "left",
          }}
        >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <a href="https://github.com/manjuhiremath">
              <Button color="secondary">
                <GitHubIcon sx={{ fontSize: 25 }} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/manju-hiremath/">
              <Button color="primary">
                {" "}
                <LinkedInIcon sx={{ fontSize: 25 }} />
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1__mxy-0TJ7_4MD0qGwHcZ_rRB2LssJr7/view?usp=sharing">
              <Button color="success" font="medium">
                <p>Resume</p>
                <DownloadRoundedIcon sx={{ fontSize: 25 }} />
              </Button>
            </a>
          </ButtonGroup>
        </div>
      </div>

      <div className="maininfo col col2 ml-4">
        <div className="info bg-black">
          <div
            className="info1 border-solid border-zinc-950"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "125%",
                height: "130%",
                position: "relative",
                top: "-6%",
              }}
              src={manjuImage}
              alt="Manju"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
