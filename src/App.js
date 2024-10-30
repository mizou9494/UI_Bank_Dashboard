import './App.css';
import Header from './components/Header';
import CardSection from './components/CardSection';
import MaxWidthWrapper from './components/MaxWidthWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <MaxWidthWrapper>
        <CardSection />
      </MaxWidthWrapper>
    </div>
  );
}

export default App;
