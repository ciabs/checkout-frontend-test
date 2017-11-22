import React from 'react';
import '../../App.css';
import logo from '../../assets/images/logo.png';
import {HeaderStyled} from './Header.style';

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <h1>Customer feedback page</h1>
    </HeaderStyled>
  );
};

export default Header;
