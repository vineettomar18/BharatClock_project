import ClockName from "./components/ClockName";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockName />
      <div classNameName="clock-container">
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </div>
    </center>
  );
}

export default App;
