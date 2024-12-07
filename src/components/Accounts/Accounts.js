import React from 'react';

import styled from 'styled-components';

import { TbMoneybag } from "react-icons/tb"

function Accounts() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <Card>
        <IconSide>
          <TbMoneybag color='yellow' size={30} />
        </IconSide>
        <OtherSide>
          <span>Accounts</span>
          <span>$5,600</span>
        </OtherSide>
      </Card>
    </div>
  )
}

const Card = styled.div`
  display: flex;
  flex: 1;
`

const IconSide = styled.div`
  display: grid;
  place-content: center;
  background-color: #EAF0FF;
  border-radius: 50%;
  width: 50px;
  height: 50px;
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
