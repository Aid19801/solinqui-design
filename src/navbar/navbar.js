import React, { Component } from 'react';
import styles from './styles.css';

class Navbar extends Component {
    render() {
      const { brandName } = this.props;
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand top-right-brandname" href="#">{brandName}</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
