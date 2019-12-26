import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-footer-widget">
                                <p>Cindy and John Flowers together with Kathy Hamilton raise Newfoundland dogs in northern Virginia, USA.<br></br>  Newfoundlands dogs are our passion. Please feel free to ask us any questions you have about Newfoundlands.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <ul className="footer-contact-info">
                                    <li><i className="fas fa-map-marker-alt"></i> Location: Purcellville, VA - USA</li>
                                    <li><i className="far fa-envelope"></i><a href="#"> Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <p>Copyright @ 2019 Old Bay Newfoundlands. All Rights Reserved.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;