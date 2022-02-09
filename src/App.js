import './App.css';
import Header from './Header.js';
import Room from './Room.js';

const rooms = [
  {
    text: 'Küche',
    isClean: true,
    description: 'Den Herd und den Müll nicht vergessen.',
    isDescriptionVisible: false,
  },
  {
    text: 'Wohnzimmer',
    isClean: false,
    description: 'Den Glastisch verschieben, um auch darunter zu saugen.',
    isDescriptionVisible: true,
  },
  {
    text: 'Badezimmer',
    isClean: true,
    description: 'Den kleinen Mülleimer mit in den Restmüll geben.',
    isDescriptionVisible: false,
  },
];

function App() {
  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      {rooms.map(({ text, isClean, description, isDescriptionVisible }) => (
        <Room
          text={text}
          isClean={isClean}
          description={description}
          isDescriptionVisible={isDescriptionVisible}
        />
      ))}
    </main>
  );
}

export default App;
