import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogRomCard from '../components/DogRomCard';

class Rom extends Component {

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
        let { registerOfMeritSort } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Register of Merit" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Register of Merit</h2>
                            <p>A ROM is a Newfoundland that has been admitted to the Newfoundland Club of America's Register of Merit for producing multiple ROMs, Champions, and performance (suffix) titled offspring.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={registerOfMeritSort} awardType="registerOfMerit"/>

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogRomCard />
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
        registerOfMeritSort: state.registerOfMeritSort
    }
}

export default connect(
    mapStateToProps,
)(Rom)