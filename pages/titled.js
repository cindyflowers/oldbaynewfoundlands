import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogTitledCard from '../components/DogTitledCard';
import Link from 'next/link';

class titled extends Component {

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
        let { titledSort, length } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Titled" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Titled</h2>
                            <p>The following dogs with titles were received by dogs bred, co-bred or owned by Old Bay Newfoundlands.</p>

                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={titledSort} awardType="titled" total={length}/>

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogTitledCard />
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
        titledSort: state.titledSort,
        length: state.titled.length
    }
}

export default connect(
    mapStateToProps,
)(titled)