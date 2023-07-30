import React from 'react'
import styled from "styled-components";
import Nav from "./nav";
import { NavLink } from "react-router-dom";
import '../css/style.css'


const Header = () => {
    return <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.webp" alt="my logo img" className='header_logo' />
        </NavLink>
        <Nav />
    </MainHeader>
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    width:200px;
  }
`;

export default Header