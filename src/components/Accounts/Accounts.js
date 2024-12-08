import React from 'react';

import styled from 'styled-components';

import { expenses_accountPage } from '../../data';

function Accounts() {
  return (
    <div className='grid place-content-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50'>
      {expenses_accountPage.map(({id, Icon, title, amount, color, backgroundColor}) => (
        <Card key={id}>
          <IconSide $backgroundColor={backgroundColor}>
            <Icon color={color} size={30} />
          </IconSide>
          <OtherSide>
            <span>{title}</span>
            <span>{amount}</span>
          </OtherSide>
        </Card>
      ))}
      {/* <Card>
        <IconSide>
          <TbPigMoney color='green' size={30} />
        </IconSide>
        <OtherSide>
          <span>Accounts</span>
          <span>$5,600</span>
        </OtherSide>
      </Card> */}
    </div>
  )
}

const Card = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  background-color: 'white';
  border-radius: 20px;
  padding: 10px 20px;
`

const IconSide = styled.div`
  display: grid;
  place-content: center;
  background-color: ${props => props.$backgroundColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const OtherSide = styled.div`
  display: flex;
  flex-direction: column;

  & span:nth-child(1) {
    color: gray;
  }

  & span:nth-child(2) {
    font-weight: 600;
    font-size: 20px;
  }
`

export default Accounts;
