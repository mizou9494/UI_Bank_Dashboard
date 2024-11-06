import React from 'react';

import { ArrowRight, Send } from 'react-feather';

import { Employees } from '../../data';
import styled from 'styled-components';

function QuickTransfer() {
  return (
    <>
      <SectionHead>
        <h3>QuickTransfer</h3>
      </SectionHead>
      <Wrapper>
        <AvatarSection>
          {Employees.map(({id, name, position, src}) => (
            <AvatarColumn key={id}>
              <Avatar alt="avatar" src={src} />
              <EmployeeName>{name}</EmployeeName>
              <div>{position}</div>
            </AvatarColumn>
          ))}
          <ArrowWrapper>
            <ArrowRight />
          </ArrowWrapper>
        </AvatarSection>
        <TransferSection>
          <span>Write Amount</span>
          <InputWrapper>
            <input type="text" placeholder="0.00" />
          </InputWrapper>
          <TransferButton>Send<Send /></TransferButton>
        </TransferSection>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  color: #8dd6df;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ArrowWrapper = styled.div`
  display: grid;
  place-content: center;
  border-radius: 50%;
  background-color: #EAF0FF;
  width: 50px;
  height: 50px;
  box-shadow: 5px 6px 20px -2px rgba(151,140,140,0.53);
  margin-left: auto;
`

const TransferSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative; 

  & span {
    font-size: 15px;
    margin-top: -6px;
  }

  & input {
    max-width: 80px;
    padding: 0 65px 0 10px;
    height: 100%;
    border-radius: 50px;
    border: none;
    outline: none;
    background-color: #EAF0FF;
  }
`
    
const InputWrapper = styled.div`
  height: 35px;
  margin-left: auto;
`

const TransferButton = styled.button`
  position: absolute;
  top: 3%;
  right: 0;
  display: flex;
  align-items: center;
  border-radius: 50px;
  border: none;
  outline: none;
  color: white;
  background-color: blue;
  width: 60px;
  height: 34px;
`

const EmployeeName = styled.div`
  color: black;
  font-size: 15px;
`

const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  width: 62px;
  height: 62px;
  margin-bottom: 10px;
`

const AvatarColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`

const AvatarSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`

const SectionHead = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export default QuickTransfer;
