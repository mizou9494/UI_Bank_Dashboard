import React from 'react';
import { Menu, Search, Bell, Settings } from 'react-feather';
import styled from 'styled-components';

import { QUERIES } from '../../constants';


function Header({ toggleSidebar, pageName }) {

  return (
    <Wrapper>
      <UpperNav>
        <Menu onClick={toggleSidebar} style={{cursor: 'pointer'}} />
        <PageName>{pageName}</PageName>
        <Avatar alt="avatar" src="/images/avatar-stephen-abebe.jpg" />
      </UpperNav>
      <MainNav>
        <LeftNavPart>
          <Logo>BankDash.</Logo>
          <PageName>{pageName}</PageName>
        </LeftNavPart>
        <RightNavPart>
          <SearchContainer>
            <SearchIcon />
            <StyledInput placeholder="Search for something" />
          </SearchContainer>
          <IconWrapper>
            <Settings />
          </IconWrapper>
          <IconWrapper>
            <Bell color='red' />
          </IconWrapper>
          <LaptopAvatar alt="avatar" src="/images/avatar-stephen-abebe.jpg"></LaptopAvatar>
        </RightNavPart>
      </MainNav>
    </Wrapper>
  ) 
}

const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const HamburgerMenu = styled.div`
  cursor: pointer;
`

const LeftNavPart = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const RightNavPart = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`

const Logo = styled.h1`
  display: none;
  
  @media ${QUERIES.tabletAndUp} {
    display: revert;
    margin: 0;
    border-right: 1px solid #343C6A;
    padding-right: 10px;
    margin-right: 10px;
    font-weight: 700;
    color: #343C6A;
    
  }
`

const Wrapper = styled.div`
  padding: 15px 25px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #343C6A;
  // width: 100%;
  // position: fixed;
  // top: 0;
  // left: 0;
  // background-color: white;
  // z-index: 15;

  @media ${QUERIES.laptopAndUp} {
    grid-area: nav;
    background-color: white;
  }
`;

const UpperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #F5F7FA;
  display: flex;
  border-radius: 50px;


  // place-content: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 8px 8px 48px;
  outline: none;
  border: none;
  background-color: transparent;
`

const SearchIcon = styled(Search)`
  position: absolute;
  left: 15px;
  top: 15px;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;  

const LaptopAvatar = styled(Avatar)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`
const IconWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    place-content: center;
    width: 50px;
    height: 50px;
    background-color: #F5F7FA;
    border-radius: 50%;
  }
`

const PageName = styled.h1`
  margin: 0 auto;
  font-size: 1.5rem;
`;  


export default Header;
