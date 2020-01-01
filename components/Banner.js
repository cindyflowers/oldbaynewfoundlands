import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import moment from 'moment';


const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    navSpeed: 750,
    autoplay: true,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ]
}


class Banner extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    // handleSaveJson = (dogs) => {
    //     for (var i = 0; i < dogs.length; ++i) {
    //         let dob = moment(dogs[i].dob).toISOString();
    //         dogs[i].dob = dob;
    //     }
    //     let myDogs = JSON.stringify(dogs);
    // }
    render() {
        return (
            <React.Fragment>
            {/* <div className="main-banner">
                <div className="">*/}
            <div className="main-banner-content">
                <div className="row"> 
                            <div className="col-lg-4 col-sm-12 col-md-5 col-12">
                                <div className="main-banner-content">
                                    <span>
                                        Established in 1988
                                    </span>
                                    <h1>
                                        OLD BAY NEWFOUNDLANDS
                                    </h1>
                                    <p>
                                        Dedicated to perserving the future of purebred Newfoundlands
                                    </p>
                                    <p> 
                                        <ul className="main-banner-nav">
                                            <li> 
                                                <Link href="https://www.NewfPuppy.com" >
                                                    <a target="_blank"><i className="fas fa-dog"></i> www.NewfPuppy.com <i className="fas fa-dog"></i></a>
                                                </Link>
                                            </li> 
                                        </ul>can help you decide if a Newfoundland is the right breed of dog for you.
                                    </p>

                                    <div className="main-banner-button-row">
                                        <Link href="/specialties">
                                            <a className="btn btn-primary">
                                                Specialty Awards
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="main-banner-button-row">
                                        <Link  href="/rom">
                                            <a className="btn btn-primary">
                                                Register of Merit
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="main-banner-button-row">

                                        <Link  href="/aboutUs">
                                            <a className="btn btn-primary">
                                                About Old Bay
                                            </a>
                                        </Link>
                                    </div>
                                    <div className=" main-banner-button-row">
                                        <Link  href="/contactUs">
                                            <a className="btn btn-primary">
                                                Contact Us
                                            </a>
                                        </Link>
                                    </div>
                                    
                                    {/* <Link href="#">
                                        <a 
                                            data-tip="Save Json" 
                                            data-place="left" 
                                            onClick={e => {
                                                    e.preventDefault(); 
                                                    this.handleSaveJson(this.props.dogs);
                                                }
                                            }
                                        >
                                            Save Json
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                        {/* </div>
                    </div> */}
                    <div className="col-lg-8 col-sm-12 col-md-7 col-12"> 
                    {this.state.display ? <OwlCarousel 
                            className="home-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="main-banner item-bg2">
                            </div>

                            <div className="main-banner item-bg1">
                            </div>

                            <div className="main-banner item-bg3">
                            </div>
                        </OwlCarousel>  : ''}
                    </div>
                </div>
            </div> 
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dogs: state.dogs
    }
}

export default connect(
    mapStateToProps,
)(Banner);
