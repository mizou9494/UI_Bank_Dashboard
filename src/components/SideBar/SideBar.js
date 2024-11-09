import React from 'react';

import { X } from 'react-feather';

import { QUERIES } from '../../constants';
import styled from 'styled-components'
import { LinksData } from '../../data';

// import Link from '../Link/Link';

function SideBar({ isSidebarOpen, toggleSidebar }) {
  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <CloseButton onClick={toggleSidebar}>
        <X color='black' size={34} />
      </CloseButton>
      <Wrapper>
        {LinksData.map(({label, Icon}) => (
          <Link href='/'> <Icon /> {label}</Link>
        ))}
      </Wrapper>
    
    </Container>
  )
}

const Container = styled.div`
  // position: relative;
  position: fixed;
  height: 100vh;
  background-color: white;
  min-width: 250px;
  top: 60px;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-290px')};
  transition: left 0.1s ease-in-out;
  padding: 15px 25px;
  z-index: 15;
  
  @media ${QUERIES.laptopAndUp} {
    grid-area: sidebar;
    top: 60px;
    left: 0;
  }
`;
    
const Wrapper = styled.div`
  // display: none;
  // padding-top: 8px;
  // grid-area: sidebar;
  
  
  @media ${QUERIES.laptopAndUp} {
    width: 100%;
    
  //   display: revert;
  //   height: 100%;
  //   position: fixed;
  //   background-color: white;
  //   top: 60px;
  //   left: 0;
  //   padding: 15px 25px;
  }
`
    
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin: 10px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Link = styled.a`
  color: gray;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  padding: 15px 0px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`

export default SideBar;
