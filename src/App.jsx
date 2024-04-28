import Homepage from './components/Homepage'; // Import your Homepage component
import "./App.css"; // Import your CSS file for styling
import Info from './components/Info';


const App = () => {
  return (
    <div className="main-container"> {/* Apply styling to the main container */}
      <div className="header">
        <div className="inner-header flex">
          <div className="intro" >
          <Info />
        </div>
         
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(154, 200, 205)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgb(14, 70, 163)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgb(30, 3, 66)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <Homepage />
    </div>
  );
}

export default App;
