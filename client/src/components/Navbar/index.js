import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          BookADoc
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/appointments' activeStyle>
            Appointment
          </NavLink>
          <NavLink to='/doctors' activeStyle>
            Doctors
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
