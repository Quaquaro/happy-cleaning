import './App.css';
import Header from './Header.js';
import Room from './Room.js';

function App() {
  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      <Room
        text="Küche"
        isClean={true}
        description="Herd nicht vergessen!"
        isDescriptionVisible={true}
      />
      <Room
        text="Wohnzimmer"
        description="Alle 3 Monate das Sofa mit dem Sauger bearbeiten."
        isDescriptionVisible={true}
      />
      <Room text="Schlafzimmer" />
      <Room text="Gästebad" />
      <Room text="Bad" isClean />
      <Room text="Arbeitszimmer" />
    </main>
  );
}

export default App;
