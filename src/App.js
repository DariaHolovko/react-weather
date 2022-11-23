import "./App.css";
import Search from "./Search";
import Adds from "./adds";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

function App(props) {
  return (
    <div className="App">
      <div className="App">
        <div className="top">
          <Search />
          <div className="row">
            <div className="col" id="mainInfo">
              <h1 id="city">{props.city}</h1>
              <h2 id="temp">{props.temp}˚C</h2>
              <p id="weatherDescription">Rainy</p>
              <ul>
                <li>Last updated</li>
                <li id="date">Tuesday, November 8th</li>
              </ul>
            </div>
            <div class="col" id="weatherIcon">
              <ReactAnimatedWeather
                icon="SNOW"
                color="White"
                size={150}
                animate={true}
              />
            </div>
          </div>
          <Adds humidity={50} wind={10} feeling={15} />
        </div>
        <span class="sourceCode">
          <a
            href="https://github.com/DariaHolovko/react-weather"
            class="sourceLink"
          >
            Open-source code
          </a>
          by Daria Holovko
        </span>
      </div>
    </div>
  );
}

export default App;
