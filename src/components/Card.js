import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card col-3 mx-2">
        <img className="card-img-top" alt=""/>
        <div className="card-body">
          <p className="card-text text-info"> Hello world</p>
        </div>
      </div>
    );
  }

}

export default Card;