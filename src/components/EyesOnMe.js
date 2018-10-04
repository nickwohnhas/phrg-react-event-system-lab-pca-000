import React from 'react';

class EyesOnMe extends React.Component {
  eyes = () => {
    console.log('Hey! Eyes on me!')
  }
  good = () => {
    console.log('Good!')
  }
  render() {
    return (
      <button onFocus={this.good} onBlur={this.eyes}></button>
    )
  }
}
export default EyesOnMe;
