import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
    render() {
        return (
            <React.Fragment>
            {this.state.display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            >
                <div className="main-banner item-bg2">
                    <div className="main-banner-d-table">
                        <div className="main-banner-d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="main-banner-content">
                                            <span
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                            >
                                                Established in 1988
                                            </span>
                                            <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                            >
                                                OLD BAY NEWFOUNDLANDS
                                            </h1>
                                            <p
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                            >
                                                Dedicated to perserving the future of purebred Newfoundlands
                                            </p>
                                            
                                            <Link href="#">
                                                <a 
                                                    className={
                                                        `btn btn-primary ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                    }
                                                >
                                                    THE BOYS
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a 
                                                    className={
                                                        `btn btn-primary ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                    }
                                                >
                                                    THE GIRLS
                                                </a>
                                            </Link>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg1">
                    <div className="main-banner-d-table">
                        <div className="main-banner-d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="main-banner-content">
                                            <span
                                                className={
                                                    isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                }
                                            >
                                                Established in 1988
                                            </span>
                                            <h1
                                                className={
                                                    isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                }
                                            >
                                                OLD BAY NEWFOUNDLANDS
                                            </h1>
                                            <p
                                                className={
                                                    isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                }
                                            >
                                                Dedicated to perserving the future of purebred Newfoundlands
                                            </p>
                                            
                                            <Link href="#">
                                                <a 
                                                    className={
                                                        `btn btn-primary ${isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'}`
                                                    }
                                                >
                                                    THE BOYS
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a 
                                                    className={
                                                        `btn btn-primary ${isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'}`
                                                    }
                                                >
                                                    THE GIRLS
                                                </a>
                                            </Link>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg3">
                    <div className="main-banner-d-table">
                        <div className="main-banner-d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="main-banner-content">
                                            <span
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                            >
                                                Established in 1988
                                            </span>
                                            <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                            >
                                                OLD BAY NEWFOUNDLANDS
                                            </h1>
                                            <p
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                }
                                            >
                                                Dedicated to perserving the future of purebred Newfoundlands
                                            </p>
                                            
                                            <Link href="#">
                                                <a 
                                                    className={
                                                        `btn btn-primary ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                    }
                                                >
                                                    THE BOYS
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a 
                                                    className={
                                                        `btn btn-primary ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                    }
                                                >
                                                    THE GIRLS
                                                </a>
                                            </Link>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default Banner;
