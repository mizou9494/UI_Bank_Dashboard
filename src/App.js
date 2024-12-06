import React from 'react';
import './App.css';

import styled from 'styled-components';
import {QUERIES} from './constants';

import SharedLayout from '../src/components/SharedLayout';
import Overview from './components/Overview';
import RecentTransactions from './components/RecentTransaction';
import CreditCards from './components/CreditCards';
import Accounts from './components/Accounts';
// import Accounts from './components/Accounts';
// import Investments from './components/Investments';
// import Loans from './components/Loans';
// import Services from './components/Services';
// import Settings from './components/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
              <Route index element={<Overview />} />
              <Route path="/Transactions" element={<RecentTransactions />} />
              <Route path="/Credit_Cards" element={<CreditCards />} />
              <Route path="/Accounts" element={<Accounts />} />
              {/* <Route path="/Accounts" element={<Accounts />} />
              <Route path="/Investments" element={<Investments />} />
              <Route path="/Loans" element={<Loans />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Settings" element={<Settings />} /> */}
              {/* this below is a the route for the quran surat*/}
              {/* <Route path="/:surahId" element={<Surah />} />
              <Route path="/:surahId/:verseNumber" element={<SurahWithSingleVerse />} /> */}
          </Route>
        </Routes>
      </>
    </div>
  );
}
{/* <Header />
<MaxWidthWrapper as='main'>
  <CardSection />
  <RecentTransaction />
  <WeeklyActivity />
  <ExpenseStats />
  <QuickTransfer />
  <BalanceHistory />
</MaxWidthWrapper> */}

export default App;
