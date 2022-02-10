import './App.css';
import Header from './Header.js';
import Room from './Room.js';
// import { Menu } from './Menu.js';
import { useImmer } from 'use-immer';

function App() {
  const [rooms, updateRooms] = useImmer([
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
  ]);
  return (
    <main className="App">
      {/* {Menu()} */}
      <Header>Happy Cleaning!</Header>
      {rooms.map(
        ({ text, isClean, description, isDescriptionVisible }, index) => (
          <Room
            text={text}
            isClean={isClean}
            description={description}
            isDescriptionVisible={isDescriptionVisible}
            toggleStatus={event => {
              event.stopPropagation();

              updateRooms(draft => {
                draft[index].isClean = !isClean;
              })
            }}
          />
        )
      )}
    </main>
  );
}

export default App;
