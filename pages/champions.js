import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogChampionCard from '../components/DogChampionCard';
import Link from 'next/link';

class champions extends Component {

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
        let { championsSort, length,  
                GCHTitles,
                CHTitles,
                GCHBTitles,
                GCHSTitles, 
                AllCHTitles = GCHTitles + CHTitles + GCHBTitles + GCHSTitles,
            } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Champions" />
                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>{AllCHTitles} - AKC Championship Titles</h2>
                            <p>{CHTitles} Champions, {GCHSTitles} Grand Champions, {GCHBTitles} Grand Champion Bronze, {GCHSTitles} Grand Champion Silver</p>
                            <p>The following AKC Champion titles were received by dogs bred, co-bred or owned by Old Bay Newfoundlands.</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={championsSort} awardType="champions" total={length}/>
                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogChampionCard />
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
        championsSort: state.championsSort,
        length: state.champions.length,
        GCHTitles: state.GCHTitles,
        CHTitles: state.CHTitles,
        GCHBTitles: state.GCHBTitles,
        GCHSTitles: state.GCHSTitles,
    }
}

export default connect(
    mapStateToProps,
)(champions)