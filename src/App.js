import './App.css';
import Header from './Header.js';
import Room from './Room.js';
import Mate from './Mate.js';
import Navigation from './Navigation.js';
// import { Menu } from './Menu.js';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [hasError, setHasError] = useState(false);
  const _ = require('lodash');
  const [isRoomsVisable, setIsRoomsVisable] = useState(true);
  const [isMatesVisable, setIsMatesVisable] = useState(false);
  const [headContent, setHeadContent] = useState('Happy Cleaning');

  async function loadCharacters() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/
        ${_.random(1, 826)},${_.random(1, 826)},${_.random(1, 826)}`
      );

      if (response.ok) {
        // check, if there is "no 404"
        const data = await response.json();
        setCharacters(data);
      } else {
        // make code execution continue in catch block
        throw new Error('404 - not found');
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  const [rooms, updateRooms] = useImmer(
    loadFromLocal('rooms') ?? [
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
    ]
  );

  useEffect(() => {
    saveToLocal('rooms', rooms);
  }, [rooms]);

  return (
    <AppContainer>
      {/* {Menu()} */}
      {hasError && <p>Error: could not load characters.</p>}
      <Header>{headContent}</Header>
      {isRoomsVisable &&
        rooms.map(
          ({ text, isClean, description, isDescriptionVisible }, index) => (
            <Room
              key={text}
              text={text}
              isClean={isClean}
              description={description}
              isDescriptionVisible={isDescriptionVisible}
              toggleStatus={event => {
                event.stopPropagation();

                updateRooms(draft => {
                  draft[index].isClean = !isClean;
                });
              }}
            />
          )
        )}
      {isMatesVisable &&
        characters.map(({ name, id }) => <Mate key={id} name={name} />)}
      <Navigation
        showFlatmatesClick={() => {
          setIsRoomsVisable(false);
          setIsMatesVisable(true);
          setHeadContent('Flatmates');
        }}
        showRoomsClick={() => {
          setIsRoomsVisable(true);
          setIsMatesVisable(false);
          setHeadContent('Happy Cleaning');
        }}
      />
    </AppContainer>
  );

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

const AppContainer = styled.main`
  display: grid;
  gap: 20px;
`;

export default App;
