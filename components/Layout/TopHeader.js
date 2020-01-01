import React, { Component } from 'react';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'

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
                <ReactTooltip  />
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/aboutUs"><a  data-tip="About Old Bay Newfoundlands" data-place="left" >About</a></Link></li>
                                    <li><Link href="/contactUs"><a data-tip="Contact Old Bay Newfoundlands" data-place="left">Contact</a></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li>
                                        <Link href="https://www.akc.org/dog-breeds/newfoundland/" >
                                                <a data-tip="American Kennel Club" 
                                                data-place="left"  target="_blank">AKC <i className="fas fa-dog"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="http://www.ncanewfs.org/">
                                            <a data-tip="Newfoundland Club of America" 
                                                data-place="left" target="_blank">NCA <i className="fas fa-paw"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="http://cncnewfs.com/">
                                            <a  data-tip="Colonial Newfoundland Club" 
                                                data-place="left" target="_blank">CNC <i className="fas fa-dog"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.ofa.org/" >
                                                <a data-tip="Canine Health Information Center" 
                                                data-place="left"  target="_blank">OFA <i className="fas fa-paw"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  href="http://www.middleburgkc.com/index.html/">
                                            <a  data-tip="Middleburg Kennel Club" 
                                                data-place="left" target="_blank">MKC <i className="fas fa-dog"></i></a>
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
