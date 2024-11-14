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
      {location.pathname === "/Transactions" ? <CardSection buttonName="Add Card" /> : null}
      <SectionHead>
        <h3>Recent Transaction</h3>
      </SectionHead>
      <TransactionsGroup>
        {transaction_Info.map(({id, description, date, amount, Icon, icontype, positive}) => (
          <Transaction
            key={id}
            description={description}
            date={date}
            amount={amount}
            positive={positive}
            Icon={Icon}
            iconType={icontype}
          />
        ))}
      </TransactionsGroup>
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

export default RecentTransaction;