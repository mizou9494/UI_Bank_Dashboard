import React from 'react';

import styled from 'styled-components';

import CardSection from '../CardSection';
import AddNewCard from '../AddNewCard';
import CardSetting from '../CardSetting';
import CardList from '../CardList';
import CardExpenseStats from '../CardExpenseStats';

function CreditCards() {
  return (
    <>    
      <CardSection />
      <CardExpenseStats />
      <CardList />
      <AddNewCard />
      <CardSetting />
    </>   
  )
}

export default CreditCards;
