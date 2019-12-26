import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
}

class TopPanel extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        let { panel } = this.state;
        return (
            <div className={`top-panel ${panel ? '' : 'hide'}`}>
                <div className="container">
                    <div className="panel-content">
                        {this.state.display ? <OwlCarousel 
                            className="top-panel-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-item-box">
                                <p><strong>SING has arrived!</strong> born on November 8, 2019 <Link href="litter"><a>Read More</a></Link></p>
                            </div>

                            <div className="single-item-box">
                                <p><strong>SING has arrived!</strong> born on November 8 2019 <Link href="litter"><a>Read More</a></Link></p>
                            </div>

                            <div className="single-item-box">
                                <p><strong>SING has arrived!</strong> born on November 8 2019 <Link href="litter"><a>Read More</a></Link></p>
                            </div>
                        </OwlCarousel> : ''}

                        <i onClick={() => this.setState({panel: false})} className="fas fa-times panel-close-btn"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopPanel;
