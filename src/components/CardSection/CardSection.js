import React from 'react';
import { card_Info } from '../../data';

import { Plus } from 'react-feather';

import styled from 'styled-components';

import Card from '../Card/Card';

function CardSection({ buttonName = "See All" }) {
  return (
    <>
      <SectionHead>
        <h3>My Cards</h3>
        <Button>{buttonName === "See All" ? buttonName : <><Plus size={20} />{buttonName}</>}</Button>
      </SectionHead>
      <CardSectionWrapper>
        {card_Info.map(({id, holder_name, card_number, expiration_date, balance}) => (
          <Card 
            key={id}
            holder_name={holder_name}
            card_number={card_number}
            expiration_date={expiration_date}
            balance={balance}
          />
        ))}
      </CardSectionWrapper>
    </>
  )
}

const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343C6A;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
  

const CardSectionWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
`

export default CardSection;
