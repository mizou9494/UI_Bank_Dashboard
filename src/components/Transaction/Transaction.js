import React from 'react';
import styled from 'styled-components';


function Transaction({id, description, date, Icon, icontype, amount, positive}) {
  return (
    <Wrapper>
      <IconWrapper $icontype={icontype}>
        <Icon />
      </IconWrapper>
      <MiddlePart>
        <TransactionDescription>
          {description}
        </TransactionDescription>
        <span>{date}</span>
      </MiddlePart>
      <AmountPart $positive={positive}>
        <span>{positive === "true" ? "+" : "-"}{amount}</span>
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

  // p  {
  //   margin-left: auto;
  // }
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
  display: grid;
  place-content: center;
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
  background-color: ${(props) => {
    switch (props.$icontype) {
      case "Facebook":
        return "#e7edff";
      case "DollarSign":
        return "#fff5d9";
      default:
        return "#3b5998";
    }
    // props.Icon === DollarSign ? "#396aff" : "#ffbb38"};
  }};

  color: ${(props) => {
    switch (props.$icontype) {
      case "Facebook":
        return "#396aff";
      case "DollarSign":
        return "#ffbb38";
      default:
        return "#000000";
    }
  }};
  
  svg {
    width: 25px;
    height: 25px;
    font-weight: 500;
  }
`

export default Transaction;