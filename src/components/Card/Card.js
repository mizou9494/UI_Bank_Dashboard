import React from 'react';
import styled from 'styled-components';

function Card({holder_name, card_number, expiration_date, balance}) {
  return (
    <Wrapper>
      <div>
        <BalanceRow>
          <InfoColumn>
            <Label>Balance</Label>
            <DataLabel>{balance}</DataLabel>
          </InfoColumn> 
          <ChipIcon src='../../images/chip.png' alt='chip' />
        </BalanceRow>
        <SecondInfoRow>
          <InfoColumn>
            <Label>CARD HOLDER</Label>
            <DataLabel>{holder_name}</DataLabel>
          </InfoColumn>
          <InfoColumn>
            <Label>VALID THRU</Label>
            <DataLabel>{expiration_date}</DataLabel>
          </InfoColumn>
        </SecondInfoRow>
        <NumberRow>
          <p>{card_number}</p>
          <MasterLogo src='../../images/masterCard.png' />
        </NumberRow>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: white;
  min-width: 265px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(76,73,237,1) 13%, rgba(4,0,255,1) 46%);
  border-radius: 18px;
`;

const Label = styled.label`
  font-weight: 300;
`
const DataLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const BalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const SecondInfoRow = styled(BalanceRow)`
  justify-content: flex-start;
  gap: 50px;
`

const NumberRow = styled(BalanceRow)`
  margin-bottom: revert;
`

const ChipIcon = styled.img`
  border-radius: 8px;
  background-color: white;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`
const MasterLogo = styled.img`
  width: 50px;
  height: 50px;
`


export default Card;
