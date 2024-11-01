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
        {transaction_Info.map(({id, description, date, amount, Icon, positive}) => (
          <Transaction
            key={id}
            description={description}
            date={date}
            amount={amount}
            positive={positive}
            Icon={Icon}
          />
        ))}
        <Transaction></Transaction>
      </TransactionsGroup>
      <img alt='paypal' style={{ backgroundColor: "red", width: '30px', height: '30px' }} src='../../images/paypal.png' />
    </>
  ) 
}

const SectionHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TransactionsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export default RecentTransaction;