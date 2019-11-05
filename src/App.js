import React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import logo from "./logo.svg";
import "./App.css";

// https://geo.nyu.edu/catalog/nyu-2451-34510
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
      >
        <GeoJSONLayer
          data={data}
          fillPaint={{
            "fill-color": "#00FF00",
            "fill-opacity": 0.3
          }}
        />
      </Map>
    );
  }
}
export default App;
