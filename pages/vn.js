import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogVNCard from '../components/DogVNCard';

class vn extends Component {

    state = {
        gridClass: 'products-col-four'
    }

    handleGrid = (e) => {
        this.setState({
            gridClass: e
        });
    }
    
    render() {
        let { gridClass } = this.state;
        let { versitileNewfoundlandSort, length } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Versatile Nefoundaland Awards" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Newfoundland Club of America Versatile Nefoundlands</h2>
                            <p>The following Versatile Newfoundland awards were received by dogs bred, co-bred or owned by Old Bay Newfoundlands.<br></br>
                        This award is given to Newfoundlands who have completed each of the following:
                        <br></br>• AKC Championship
                        <br></br>• AKC or CKC Companion Dog Title
                        <br></br>• NCA Water Rescue Dog Title
                        <br></br>• NCA Draft Dog Title</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid}  sort={versitileNewfoundlandSort} awardType="versitileNewfoundland" total={length}/>

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogVNCard />
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

const mapStateToProps = (state) => {
    return {
        versitileNewfoundlandSort: state.versitileNewfoundlandSort,
        length: state.versitileNewfoundland.length
    }
}

export default connect(
    mapStateToProps,
)(vn)