import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Contact Us" />
                <section className="contact-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contact Old Bay Newfoundlands</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info">
                                    <h3>Here to Help</h3>
                                    <p>Have a question about Newfoundlands? Feel free to contact us.</p>

                                    <ul className="contact-list">
                                        <li><i className="fas fa-map-marker-alt"></i> Location: Purcellville, VA USA</li>
                                        <li><i className="far fa-envelope"></i> Email Us: <a href="#">cf@docwizard.com</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="contact-form">
                                    <h3>Drop Us A Line</h3>
                                    <p>We’re happy to answer any questions you have. Just send us a message in the form below.</p>

                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Name <span>(required)*</span></label>
                                                    <input type="text" name="name" id="name" className="form-control" required={true} data-error="Please enter your name" placeholder="Enter your name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Email <span>(required)*</span></label>
                                                    <input type="email" name="email" id="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Enter your Email Address" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Phone Number <span>(required)*</span></label>
                                                    <input type="text" name="phone_number" id="phone_number" className="form-control" required={true} data-error="Please enter your phone number" placeholder="Enter your Phone Number" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Your Message <span>(required)*</span></label>
                                                    <textarea name="message" id="message" cols="30" rows="8" required={true} data-error="Please enter your message" className="form-control" placeholder="Enter your Message" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;