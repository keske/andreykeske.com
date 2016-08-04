import React, { Component } from 'react';

export const Orientation = DecoratedComponent =>
  class deviceOrientationDecorator extends Component {

    constructor(props) {
      super(props);

      this.state = {
        orientation: {
          alpha: 0,
          beta: 0,
          gamma: 0,
        },
      };
    }

    componentDidMount() {
      window.addEventListener('deviceorientation', this.handleRotation, false);
    }

    handleRotation = event => {
      const { alpha, beta, gamma } = event;

      this.setState({
        orientation: {
          alpha,
          beta,
          gamma,
        },
      });
    };

    render() {
      return (
        <DecoratedComponent {...this.state} />
      );
    }
  };
