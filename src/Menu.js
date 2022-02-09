import {
  MenuButton,
  Line,
  MenuNavigation,
  NavList,
  NavItem,
  NavLink,
} from './Menu.styles';

export const Menu = () => {
  return (
    <>
      <MenuButton>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </MenuButton>
      <MenuNavigation>
        <NavList>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
        </NavList>
      </MenuNavigation>
    </>
  );
};
