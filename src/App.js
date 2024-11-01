import './App.css';
import Header from './components/Header';
import CardSection from './components/CardSection';
import RecentTransaction from './components/RecentTransaction';

import MaxWidthWrapper from './components/MaxWidthWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <MaxWidthWrapper as='main'>
        <CardSection />
        <RecentTransaction />
      </MaxWidthWrapper>
    </div>
  );
}

export default App;
