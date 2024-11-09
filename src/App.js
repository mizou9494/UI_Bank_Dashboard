import React from 'react';
import './App.css';

import styled from 'styled-components';
import { QUERIES } from './constants';

import Header from './components/Header';
import CardSection from './components/CardSection';
import RecentTransaction from './components/RecentTransaction';
import WeeklyActivity from './components/WeeklyActivity';
import ExpenseStats from './components/ExpenseStats';
import QuickTransfer from './components/QuickTransfer';
import BalanceHistory from './components/BalanceHistory';
import SideBar from './components/SideBar';

import MaxWidthWrapper from './components/MaxWidthWrapper';


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Wrapper>
        <Header toggleSidebar={toggleSidebar} />
        <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
        <Main>
          <MaxWidthWrapper as='main'>
            <CardSection />
            <RecentTransaction />
            <WeeklyActivity />
            <ExpenseStats />
            <QuickTransfer />
            <BalanceHistory />
          </MaxWidthWrapper>
        </Main>
      </Wrapper>
    </div>
  );
}

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
