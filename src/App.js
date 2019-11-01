import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import logo from "./logo.svg";
import "./App.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGFsbGFzYmlsbGUiLCJhIjoiY2p6OHR1aGhoMDZnZDNjbXB2ZWZlcXFudCJ9.gjjYkOkTtA-Qe1jhbvF2gQ"
});
class App extends React.Component {
  render() {
    return (
      <Map
        center={[-73.944534, 40.6454199]}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      ></Map>
    );
  }
}
export default App;
