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
      <section className="content-section bg-tertiary text-info">
        <div className="container">
          <div className="row justify-content-center">
            <h1>How it works</h1>
          </div>
          <div className="row mt-4 justify-content-center">
            <img className="col-md-2 col-5 bg-white circular-wrapper-sm" />
            <div className="col-9 ml-4 bg-white border rounded">
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default StepsSection;