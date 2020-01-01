import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import QuickView from './Modal/QuickView';
import Moment from 'react-moment'

class DogRomCard extends Component {
    state = {
        modalOpen: false,
        modalImage: '',
        idd: null
    };
   
    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image,  id) => {
        this.setState({ 
            modalImage: image, 
            idd: id
        });
    }

    render() {
        let { awards } = this.props;
        const { modalOpen } = this.state;
        return (
            <React.Fragment>
                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                {awards.filter(dog => dog.rom == true).map((data, idx) => (
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item" key={idx}>
                        <div className="single-product-box">
                            <div className="product-image">
                                <a onClick={e => {
                                        e.preventDefault(); 
                                        this.openModal();
                                        this.handleModalData(data.image,data.id)
                                    }}>
                                    <img className="specialty-image" src={data.image} alt="image" />
                                </a>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a 
                                                data-tip="Quick View" 
                                                data-place="left" 
                                                onClick={e => {
                                                        e.preventDefault(); 
                                                        this.openModal();
                                                        this.handleModalData(data.image,data.id)
                                                    }
                                                }
                                            >
                                                <i className="far fa-eye"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="product-content">
                            
                                <h3><a onClick={e => {
                                        e.preventDefault(); 
                                        this.openModal();
                                        this.handleModalData(data.image,data.id)
                                    }}>{data.dog}</a></h3>
                                {data.award}
                                <br></br>{data.show} 
                                <br></br><Moment format="MMMM DD, YYYY">{data.date}</Moment>
                            </div>
                        </div>
                    </div>
                ))}
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    image={this.state.modalImage} 
                    price={this.state.price}
                /> : '' }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        awards: state.awards
    }
}

export default connect(
    mapStateToProps,
)(DogRomCard)