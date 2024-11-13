import React from 'react';

import MaxWidthWrapper from '../MaxWidthWrapper';
import CardSection from '../CardSection';
import RecentTransaction from '../RecentTransaction';
import WeeklyActivity from '../WeeklyActivity';
import ExpenseStats from '../ExpenseStats';
import QuickTransfer from '../QuickTransfer';
import BalanceHistory from '../BalanceHistory';

function Overview() {

  return (
    <>
      <MaxWidthWrapper as='main'>
        <CardSection />
        <RecentTransaction />
        <WeeklyActivity />
        <ExpenseStats />
        <QuickTransfer />
        <BalanceHistory />
      </MaxWidthWrapper>
    </>
  )
}

export default Overview;
