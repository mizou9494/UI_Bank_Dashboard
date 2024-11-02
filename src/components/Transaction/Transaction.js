import React from 'react';
import styled from 'styled-components';


function Transaction({id, description, date, Icon, iconType, amount, positive}) {
  console.log(iconType)
  return (
    <Wrapper>
      <IconWrapper iconType={iconType}>
        <Icon  />
      </IconWrapper>
      <h3>{description}</h3>
      <p>{date}</p>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: start;
  gap: 20px;

  p  {
    margin-left: auto;
  }
`;

const IconWrapper = styled.div`
  display: grid;
  place-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.iconType) {
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
    switch (props.iconType) {
      case "Facebook":
        return "#396aff";
      case "DollarSign":
        return "#ffbb38";
      default:
        return "#000000";
    }
  }};
  
  svg {
    width: 30px;
    height: 30px;
  }
`

export default Transaction;
