import React from 'react';

import { X } from 'react-feather';

import { QUERIES } from '../../constants';
import styled from 'styled-components'
import { LinksData } from '../../data';

function SideBar({ isSidebarOpen, toggleSidebar }) {

  return (
    <Container $isSidebarOpen={isSidebarOpen}>
      <CloseButton onClick={toggleSidebar}>
        <X color='black' size={34} />
      </CloseButton>
      <Wrapper>
        {LinksData.map(({label, Icon, path}) => (
          <Link key={label} href={`/${path}`}> <Icon />{label}</Link>
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
  left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
  padding: 30px 0px 0px 50px;
  z-index: 3;
`;
    
const Wrapper = styled.div`
  // display: none;
  // padding-top: 8px;
  // grid-area: sidebar;
  
  
  @media ${QUERIES.laptopAndUp} {
    // display: flex;
    // flex-direction: column;
    // gap: 15px;
    // justify-content: center;
    // align-items: center;
    // width: 100%;
    // padding: 0px;
    
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

  padding: 15px 25px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: blue;
    border-left: 2px solid blue;
  }
`

export default SideBar;
