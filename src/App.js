import './App.css';

import SharedLayout from '../src/components/SharedLayout';

import Overview from './components/Overview';
// import Transactions from './components/Transactions';
// import Accounts from './components/Accounts';
// import Investments from './components/Investments';
// import CreditCards from './components/CreditCards';
// import Loans from './components/Loans';
// import Services from './components/Services';
// import Settings from './components/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route index element={<Overview />} />
               {/* <Route path="/Transactions" element={<Transactions />} />
               <Route path="/Accounts" element={<Accounts />} />
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
      </BrowserRouter>
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
