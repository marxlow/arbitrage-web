import React, { Component } from 'react';
import Card from './Card';

class StepsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <section className="content-section bg-tertiary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <h1>How it works</h1>
          </div>
          <div className="row justify-content-center">
          {/* Current market rates */}
          <Card />
          <Card />
          <Card />
          </div>
        </div>
      </section>
    )
  }
}

export default StepsSection;