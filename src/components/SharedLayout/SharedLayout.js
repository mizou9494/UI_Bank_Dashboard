import React from 'react';

import styled from 'styled-components';

import { Outlet, useLocation } from "react-router-dom";

import Header from '../Header';
import SideBar from '../SideBar';
import MaxWidthWrapper from '../MaxWidthWrapper';

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
  // outputs '/'
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <MaxWidthWrapper>
      <Header pageName={pageNames[currentPageName]} toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Overlay $isOpen={isSidebarOpen} onClick={toggleSidebar} />
      <Outlet />
    </MaxWidthWrapper>
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
