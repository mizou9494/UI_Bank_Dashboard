import React from 'react';

import { 
  DollarSign, 
  Facebook, 
  Home, 
  User, 
  CreditCard, 
  Moon, 
  Settings, 
  ArrowUpCircle, 
  ArrowDownCircle 
} from "react-feather"  

import { TbMoneybag, TbPigMoney, TbReportMoney, TbZoomMoney } from "react-icons/tb";

import styled from 'styled-components';

function CardList() {
  return (
    <>
      <SectionHead>Card List</SectionHead>
      <CardListWrapper>
        <ListItem>
          <IconWrapper><TbMoneybag color='red' size={40} /></IconWrapper>
          <DetailButton>View details</DetailButton>
        </ListItem>
        <ListItem>
          <IconWrapper><TbMoneybag color='blue' size={40} /></IconWrapper>
          <DetailButton>View details</DetailButton>
        </ListItem>
        <ListItem>
          <IconWrapper><TbMoneybag color='white' size={40} /></IconWrapper>
          <DetailButton>View details</DetailButton>
        </ListItem>
      </CardListWrapper>  
    </>
  )
}


const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DetailButton = styled.div`
  color: blue;
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: grid;
  place-content: center;
`

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  &:first-of-type > ${IconWrapper} {
    background-color: green;
    // border: 2px solid darkgreen;
  }
  
  &:nth-of-type(2) > ${IconWrapper} {
    background-color: yellow;
    // border: 2px solid goldenrod;
  }
  &:nth-of-type(3) > ${IconWrapper} {
    background-color: gray;
    // border: 2px solid goldenrod;
  }
`


const SectionHead = styled.h2`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`


export default CardList;
