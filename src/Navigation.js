import styled from 'styled-components';

export default function Navigation({ showRoomsClick, showFlatmatesClick }) {
  return (
    <NavigationContainer>
      <button onClick={showRoomsClick}>Rooms</button>
      <button onClick={showFlatmatesClick}>Flatmates</button>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 8px 4px;
  }
`;
