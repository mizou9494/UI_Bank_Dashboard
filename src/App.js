import React from 'react';
import './App.css';

import SharedLayout from '../src/components/SharedLayout';

import Overview from './components/Overview';
import RecentTransactions from './components/RecentTransaction';
// import Accounts from './components/Accounts';
// import Investments from './components/Investments';
// import CreditCards from './components/CreditCards';
// import Loans from './components/Loans';
// import Services from './components/Services';
// import Settings from './components/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">


     <>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route index element={<Overview />} />
               <Route path="/Transactions" element={<RecentTransactions />} />
               {/* <Route path="/Accounts" element={<Accounts />} />
               <Route path="/Investments" element={<Investments />} />
               <Route path="/Credit_Cards" element={<CreditCards />} />
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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 18% 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
      "nav nav"
      "sidebar main"
  }
`

const Container = styled.div`
  grid-area: sidebar;
    
  @media ${QUERIES.laptopAndUp} {
    // position: fixed;
    top: 60px;
    left: 0;
  }
`

const Main = styled.div`
  @media ${QUERIES.laptopAndUp} {
    grid-area: main;
  }
`


const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export default App;
