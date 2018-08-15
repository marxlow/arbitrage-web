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
      <div>
        <div className="">
          <img src={image} className="circular-img" />
        </div>
        <h4 className="text-white">{name}</h4>
      </div>
    )
  }
};

export default CircularCard;