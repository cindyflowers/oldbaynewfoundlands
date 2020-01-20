import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogCard from '../components/DogCard';

class Index extends Component {

    state = {
        gridClass: 'products-col-four'
    }

    handleGrid = (e) => {
        this.setState({
            gridClass: e
        });
    }
    
    render() {
        let { gridClass} = this.state;
        let { specialtiesSort, length } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Specialty Awards" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Specialty Awards</h2>
                            <p>The following awards were received by dogs bred, co-bred or owned by Old Bay Newfoundlands.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={specialtiesSort} awardType="specialties" total={length}/>

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogCard />
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
        specialtiesSort: state.specialtiesSort,
        length: state.specialties.length
    }
}

export default connect(
    mapStateToProps,
)(Index)

