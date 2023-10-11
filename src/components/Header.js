import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Image from "../asserts/img.png"
// import Image from "../asserts/img.png"

const HeaderContainer = styled.header`
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  img {
    max-width: 177px; /* Adjust the size as needed */
  }

  @media (max-width: 768px) {
    text-align: center;

    img {
      max-width: 177px;
    }
  }
`;

const Links = styled.nav`
  a {
    text-decoration: none;
    margin: 0 20px;

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer className='headerg'>
      <Logo>
      <a href="https://dreamster.world/">
      <img src={Image} className="" alt="" />
      </a>

      </Logo>
      <Links className='llinks'>
        <NavLink to="/admin">Apply your DSTER</NavLink>
        <NavLink to="/">Claim for DSTER</NavLink>
      </Links>
    </HeaderContainer>
  );
};

export default Header;
