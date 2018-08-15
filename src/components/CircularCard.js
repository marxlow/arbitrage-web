import React, { Component } from 'react';

class CircularCard extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { name, image } = this.props;
    return (
      <div className="pt-4 col-md-4">
        <div>
          <img src={image} className="circular-wrapper-med" />
        </div>
        <h4 className="text-white mt-2">{name}</h4>
      </div>
    )
  }
};

export default CircularCard;