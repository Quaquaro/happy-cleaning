import styled from 'styled-components';

export const MenuButton = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Line = styled.div`
  width: 80%;
  height: 3px;
  background-color: white;
  margin: 0.2rem;
`;

export const MenuNavigation = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  margin-top: 1.4rem;
  z-index: 200;
  background-color: white;
  padding: 1rem 2rem;
  transition: all 0.7s ease;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 5px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

export const NavLink = styled.a`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 0.5rem;
`;
