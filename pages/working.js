import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogWorkingCard from '../components/DogWorkingCard';
import Link from 'next/link';

class working extends Component {

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
        let { workingSort, length } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Working" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>AKC Performance and NCA Working Titles</h2>
                            <p>
                                <br></br>
                                <h2>52 - AKC Obedience and Rally Titles</h2> <br></br>
                                19 Companion Dogs, 3 Companion Dog Excellant, 1 Utiltiy Dog, 4 Beginner Novice,  12 Rally Novice, 5 Rally Advanced, 
                                1 Rally Excellant, 4 Trick Dog Novice, 2 Trick Dog Intermediate, 1 Trick Dog Advanced
                            </p>
                            <p>
                                <h2>13 - AKC Agility Titles</h2><br></br>
                                4 Novice Agility Preferred, 3 Novice Jumpers Preferred, 2 Open Agility Prreferred, 2 Open Jumpers Preferred, 1 Agility Excellent Preferred, 1 Agility Jumpers Excellent Preffered
                            </p>
                            <p>
                                <h2>75 - NCA Working Titles/Requalifications</h2><br></br>
                                20 Water Dog, 25 Water Rescue Dog, 1 Water Rescue Dog Excellant, 16 Draft Dog, 2 Draft Dog Excellant, 9 Team Draft Dogs, 2 Team Draft Dog Excellant
                            </p>
                            <p>The following AKC Performance and NCA Working Titles titles were received by dogs bred, co-bred or owned by Old Bay Newfoundlands.</p>

                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={workingSort} awardType="working" total={length}/>

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogWorkingCard />
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
        workingSort: state.workingSort,
        length: state.working.length
    }
}

export default connect(
    mapStateToProps,
)(working)