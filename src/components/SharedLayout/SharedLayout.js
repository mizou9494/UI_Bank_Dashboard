import React from 'react';

import styled from 'styled-components';

import { Outlet, useLocation } from "react-router-dom";

import Header from '../Header';
import SideBar from '../SideBar';

function SharedLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const location = useLocation();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pageNames = {
    '/': 'Overview',
    '/Transactions': 'Transactions',
    '/Accounts': 'Accounts',
    '/Investments': 'Investments',
    '/Credit_Cards': 'Credit Cards',
    '/Loans': 'Loans',
    '/Services': 'Services',
    '/Settings': 'Settings',
  };

  // Determine the current page name
const currentPageName = Object.keys(pageNames)
  .sort((a, b) => b.length - a.length)
  .find((path) => location.pathname.startsWith(path)) || 'Page';
  console.log(currentPageName)
  // outputs '/'
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Current path',location.pathname) 
    // outputs '/Transactions'
    console.log('Current page name', pageNames[currentPageName])
    // outputs 'Transactions' now when we are on the /Transactions page

  }, [location]);

  return (
    <>
      <Header pageName={pageNames[currentPageName]} toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Overlay $isOpen={isSidebarOpen} onClick={toggleSidebar} />
      <Outlet />
    </>
  )
}

const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export default SharedLayout;
