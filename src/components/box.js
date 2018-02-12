import React, { Component } from 'react';
import { stepImages } from '../js/company-info';
import styles from './styles.css';

class Box extends Component {

    genImage(n) {
      switch(n) {
        case 1:
          return <img className="box-style" src={stepImages.step1} />
        case 2:
          return <img className="box-style" src={stepImages.step2} />
        case 3:
          return <img className="box-style" src={stepImages.step3} />
        default:
          return <h4>loading...</h4>
      }
    }

    render() {
        const { heading, blurb, imgSrc, stepNo } = this.props;
        return (
            <div className="col-sm">
                <h3 className="step">Step {stepNo}</h3>
                <h4 className="box-heading">{heading}</h4>
                {this.genImage(stepNo)}
                <p className="box-blurb">{blurb}</p>
            </div>
        );
    }
}

export default Box;
