import React, { Component } from 'react';
import { stepImages } from '../js/company-info';
import styles from './styles.css';

class Box extends Component {

    genImage(n) {
      switch(n) {
        case 1:
          return <div className="img-container"><img className="box-style" src={stepImages.step1} /></div>
        case 2:
          return <div className="img-container"><img className="box-style" src={stepImages.step2} /></div>
        case 3:
          return <div className="img-container"><img className="box-style" src={stepImages.step3} /></div>
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
                <hr className="breakpoint" />
                <p className="box-blurb">{blurb}</p>
                <hr className="breakpoint" />
            </div>
        );
    }
}

export default Box;
