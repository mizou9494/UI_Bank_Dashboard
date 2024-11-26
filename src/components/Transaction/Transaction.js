import React from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

import { ArrowDownCircle, ArrowUpCircle } from 'react-feather';

function Transaction({description, DirectionIcon, date, Icon, iconType, amount, positive}) {

  const location = useLocation();
  
  return (
    <Wrapper>
      <IconWrapper $location={location.pathname} $iconType={iconType}>
        {location.pathname === "/Transactions" ? <DirectionIcon size={45} color="gray" /> : <Icon size={25} />}
      </IconWrapper>
      <MiddlePart>
        <TransactionDescription>
          {description}
        </TransactionDescription>
        <span>{date}</span>
      </MiddlePart>
      <AmountPart $positive={positive}>
        <span>{positive === "true" ? "+" : "-"}</span><span>{amount}</span>
      </AmountPart>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  &:not(:last-of-type) {
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #EAF0FF;
  }
`;

const TransactionDescription = styled.p`
  margin: 0;
  color: #000000;
  font-weight: 500;
  font-size: 20px;
`

const AmountPart = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.$positive === "true" ? "green" : "red"};
`

const MiddlePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`

const IconWrapper = styled.div`
  display: grid;
  place-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.$location === "/Transactions" && "white"} !important;
  background-color: ${(props) => {
    switch (props.$iconType) {
      case "Facebook":
        return "#e7edff";
      case "DollarSign":
        return "#fff5d9";
      default:
        return "#3b5998";
    }
  }};

  color: ${(props) => {
    switch (props.$iconType) {
      case "Facebook":
        return "#396aff";
      case "DollarSign":
        return "#ffbb38";
      default:
        return "#000000";
    }
  }};
  
  svg {
    // width: 30px;
    // height: 30px;
    font-weight: 500;
  }
`

export default Transaction;