import React, { Component } from 'react';
import Link from 'next/link';
//import Wishlist from '../Modal/Wishlist';

class TopHeader extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/"><a>About</a></Link></li>
                                    <li><Link href="/"><a>Contact</a></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li>
                                        <Link href="https://www.akc.org/dog-breeds/newfoundland/" >
                                                <a target="_blank">AKC <i className="fas fa-dog"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="http://www.ncanewfs.org/">
                                            <a target="_blank">NCA <i className="fas fa-paw"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="http://cncnewfs.com/">
                                            <a target="_blank">CNC <i className="fas fa-dog"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="http://www.middleburgkc.com/index.html/">
                                            <a target="_blank">MKC <i className="fas fa-paw"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
            </React.Fragment>
        );
    }
}

export default TopHeader;
