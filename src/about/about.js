import React, { Component } from 'react';
import Box from '../components/box';
import styles from './styles.css';
import { companyInfo } from '../js/company-info';

class About extends Component {
    render() {
        return (
          <div className="about-container">
            <div className="container">
              <div className="about-title">How Do We Work?</div>
              <hr className="breakpoint" />
                  <div className="row">
                    {companyInfo.stepsInfo.map((each, index) => {
                        return <Box key={index} heading={each.heading} blurb={each.blurb} imgSrc={each.image} stepNo={each.step} />
                    })}
                  </div>
            </div>
          </div>
        );
    }
}

export default About;
