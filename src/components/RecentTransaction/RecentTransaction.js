import React from 'react';

import styled from 'styled-components';

import Transaction from '../Transaction/Transaction';
import { transaction_Info } from '../../data';
function RecentTransaction() {
  return (
    <>
      <SectionHead>
        <h3>Recent Transaction</h3>
      </SectionHead>
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
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
`;

export default RecentTransaction;