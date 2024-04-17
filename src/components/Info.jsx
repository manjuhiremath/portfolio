// import  Box  from "@mui/material";
// import Item from "@mui/material";
import manjuImage from "../assets/profile.png"; // Make sure to adjust the path accordingly
import hilogo from "../assets/hilogo.png";
import "./info.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

function Info() {
  return (
    <section className="column-center">
      <div style={{ margin: "20px" }} className="col col1 ">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "left",

            color: "#333",
            display: "flex",
            alignItems: "center",
          }}
          className=""
        >
          Hi, I'm Manju 
          <img
            style={{
              width: "50px",
            }}
            src={hilogo}
          ></img>
        </h1>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "left",
            color: "#333",
          }}
        >
          Front-End React Developer
        </h1>
        <h1
          style={{
            fontSize: "1.2rem",
            color: "#403e3e",
          }}
          className="para mt-4"
        >
          A passionate Front-end React Developer
          <br /> based in Bengaluru, Karnataka, India. 📍
        </h1>

        <div className="flex mt-4">
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
              <Button color="success" font= 'medium'>
                <p>Resume</p>
                <DownloadRoundedIcon sx={{ fontSize: 25 }} />
              </Button>
             
            </a>
          </ButtonGroup>
        </div>
      </div>

      <div className="col col2">
        <div className="info bg-black">
          <div className="info1 border-solid border-zinc-950">
            <img
              style={{ width: "100%", height: "100%" }}
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
