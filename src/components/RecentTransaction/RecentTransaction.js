import React from 'react';

import styled from 'styled-components';

import CardSection from '../CardSection';

import Transaction from '../Transaction/Transaction';
import { transaction_Info } from '../../data';
import { useLocation } from 'react-router-dom';
function RecentTransaction() {

  const location = useLocation();

  return (
    <>
      {location.pathname === "/Transactions" 
        ? <CardSection buttonName="Add Card" /> 
        : null
      }
      <SectionHead>
        <h3>Recent Transaction</h3>
      </SectionHead>
      {location.pathname === "/" ? (
        <TransactionsGroup>
          {transaction_Info.map(({id, description, date, amount, Icon, iconType, positive}) => (
            <Transaction
              key={id}
              description={description}
              date={date}
              amount={amount}
              positive={positive}
              Icon={Icon}
              iconType={iconType}
              />
            ))}
        </TransactionsGroup>
     ) : (
       <TransactionsPageGroup>
          {transaction_Info.map(({id, DirectionIcon, description, date, amount, Icon, iconType, positive}) => (
            <Transaction
              key={id}
              description={description}
              date={date}
              amount={amount}
              positive={positive}
              Icon={Icon}
              DirectionIcon={DirectionIcon}
              iconType={iconType}
            />
          ))}
        </TransactionsPageGroup>
     )}
    </>
  ) 
}

const SectionHead = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TransactionsGroup = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const TransactionsPageGroup = styled(TransactionsGroup)`
 
`

export default RecentTransaction;