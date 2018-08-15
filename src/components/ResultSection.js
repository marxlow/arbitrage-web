import React, { Component } from 'react';
import CircularCard from './CircularCard';

const ARBITRAGE_CARDS = [
  { name: 'SGD', image: 'img/sg_currency_logo.jpg' },
  { name: 'BTC', image: 'img/btc_currency_logo.jpg' },
  { name: 'USD', image: 'img/usd_currency_logo.jpg' },
]

class ResultSection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // Functions
  render() {
    const { capitalCurrency, capitalAmount, profitRate } = this.props;

    return (
      <section className="content-section bg-secondary text-white">
        <div className="container">
          <div className="row flex-column">
            <h1>{`Make ${(capitalAmount * profitRate).toFixed(2)} ${capitalCurrency}`}</h1>
            <h3 className="mt-4">In 3 transactions, with</h3>
          </div>
          <div className="row justify-content-center mt-4">
            {ARBITRAGE_CARDS.map((card, index) => {
              return (
                <CircularCard
                  key={index}
                  name={card.name}
                  image={card.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ResultSection;