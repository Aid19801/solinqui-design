import React, { Component } from 'react';
import styles from './styles.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
              <div className="hero">
                  <section id="intro" data-speed="3" data-type="background">
                      <div className="intro-body text-center">
                          <div className="container-fluid">
                              <div className="row">
                                  <div className="col-md-12">
                                      <h1 className="company-name">SOLINQUI DESIGN</h1>
                                      <h2 className="company-tagline">Data-Driven Marketing by Content Creator Professionals</h2>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-12">

                                      <hr className="separator" width="100px" />

                                      <h2 className="reg-interest">Register Interest?</h2>

                                      <hr className="separator" width="100px" />

                                      <div id="mc_embed_signup">
                                          <form action="/action_page.php" method="POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                              <ul className="inputUl">
                                                  <li><input className="email-input" type="text" name="firstname" placeholder="hello@solinqui.com" /></li>
                                                  <li><input className="submit-btn btn btn-primary" type="submit" value="Submit" /></li>
                                              </ul>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
            </div>
        );
    }
}

export default Hero;
