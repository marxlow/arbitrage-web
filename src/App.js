import React, { Component } from 'react';
import './App.css';
import ResultSection from './components/ResultSection';
import StepsSection from './components/StepsSection';
import CreditSection from './components/CreditSection';

const capitalCurrency = 'SGD';
const capitalAmount = 50000;
const profitRate = 0.0008118701263617467;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="content-section bg-primary text-white">
          <div className="container">
            <div className="row flex-column">
              <h1>Arbitrage</h1>
              <h2>A better way to earn money from Bitcoin</h2>
              {/* <h5 className="small mt-4">With many unrealistic assumptions</h5> */}
            </div>
          </div>
        </header>
        {/* Result section */}
        <ResultSection
          capitalCurrency={capitalCurrency}
          capitalAmount={capitalAmount}
          profitRate={profitRate}
        />
        {/* Steps section */}
        <StepsSection />
        {/* Credit section */}
        <CreditSection />
      </div>
    );
  }
}

export default App;
