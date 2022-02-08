import "./App.css";
import Room from "./Room.js";

function App() {
  return <main className="App">
    <Room text="Küche" isClean/>
    <Room text="Wohnzimmer"/>
    <Room text="Schlafzimmer"/>
    <Room text="Gästebad"/>
    <Room text="Bad" isClean/>
    <Room text="Arbeitszimmer"/>
  </main>;
}

export default App;
