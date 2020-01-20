import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogTop20Card from '../components/DogTop20Card';
import { timingSafeEqual } from 'crypto';

class Top20 extends Component {

    state = {
        gridClass: 'products-col-four',
        sortValue: "1",
       // myAwards: null,
    }

    handleGrid = (gridClass) => {
        this.setState({
            gridClass: gridClass
        });
    }

    componentDidMount() {
        //this.setState({myAwards: this.state.awards.sort(byDateAsc).filter(dog => dog.toptwenty == true)});
    }


    
    render() {
        let { gridClass, myAwards } = this.state;
        let { topTwentySort } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Register of Merit" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Newfoundland Club of America Top Twenty</h2>
                            <p><i className="fas fa-dog"></i> The Best of Breed gets points equal to the total number of Newfoundlands in the competition at that show, minus one.
                            <br></br>
                            <i className="fas fa-dog"></i> The Best of Opposite Sex gets points equal to the number of Newfoundlands in that sex in competition at that show, minus one. 
                            <br></br>
                            <i className="fas fa-dog"></i> Selects at the National Specialty get points as follows: Total number of Newfoundlands in competition in a sex minus one (1) divided by the total number of selects in that sex.  Selects can only receive a maximum of 50% of the points that the Newfoundland of its own sex receives who wins BOB or BOS.
                            <br></br>
                            <i className="fas fa-dog"></i> Awards of Merit at Regional Specialties get points as follows: Total number of Newfoundlands in competition in a sex minus one (1) divided by the total number of Awards of Merit in that sex.  Awards of Merit can only receive a maximum of 50% of the points that the Newfoundland of its own sex who wins BOB or BOS.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={topTwentySort} awardType="topTwenty"/>
                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogTop20Card />
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
        topTwentySort: state.topTwentySort
    }
}

export default connect(
    mapStateToProps,
)(Top20)