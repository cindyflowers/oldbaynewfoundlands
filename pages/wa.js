import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import DogFilterOptions from '../components/DogFilterOptions';
import DogWACard from '../components/DogWACard';

class wa extends Component {

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
        let { workingAchievementSort } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Working Achievement Awards" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Newfoundland Club of America Working Achievemen Nefoundlands</h2>
                            <p>The following Working Achievemen Newfoundland awards were received by dogs bred, co-bred or owned by Old Bay Newfoundlands.<br></br>
                            The NCA has adopted a Working Achievement Award to honor those Newfoundland/handler teams that excel in dog sports that highlight the intelligence and versatility of our breed, to recognize the unique bond between a handler and their dog, and to promote participation at a high level of excellence in performance events.
                            <br></br>The core requirements for the Working Achievement Award are:
                            <br></br>•AKC Companion Dog Excellent (CDX)
                            <br></br>•NCA Draft Dog (DD)
                            <br></br>•NCA Water Rescue Dog (WRD)
                        <br></br>
                        In addition, the Newfoundland must have earned three titles from any of the following categories.
                        <table width="100%" border="1" cellspacing="1" cellpadding="0">
                            <tbody><tr>
                            <td width="14%" class="tabletitle"><p>Obedience</p></td>
                            <td width="18%" class="tabletitle"><p>Agility</p></td>
                            <td width="14%" class="tabletitle"><p>Rally</p></td>
                            <td width="14%" class="tabletitle"><p>Tracking</p></td>
                            <td width="18%" class="tabletitle"><p>NCA Water</p></td>
                            <td width="22%" class="tabletitle"><p>NCA Draft</p></td>
                            </tr>
                            <tr>
                            <td class="text"><p>UD</p></td>
                            <td class="text"><p>any Open level title, standard or preferred</p></td>
                            <td class="text"><p>RE</p></td>
                            <td class="text"><p>TD</p></td>
                            <td class="text"><p>WRDX</p></td>
                            <td class="text"><p>TDD</p></td>
                            </tr>
                            <tr>
                            <td class="text"><p>UDX</p></td>
                            <td class="text"><p>&nbsp;</p></td>
                            <td class="text"><p>&nbsp;</p></td>
                            <td class="text"><p>TDX</p></td>
                            <td class="text"><p>three requalifications in WRD</p></td>
                            <td class="text"><p>three requalifications in draft (DD or TDD or any combination)</p></td>
                            </tr>
                            <tr>
                            <td class="text"><p>OTCh</p></td>
                            <td class="text"><p>&nbsp;</p></td>
                            <td class="text"><p>&nbsp;</p></td>
                            <td class="text"><p>VST</p></td>
                            <td class="text"><p>&nbsp;</p></td>
                            <td class="text"><p>&nbsp;</p></td>
                            </tr>
                            <tr>
                            <td class="text">VER</td>
                            <td class="text">&nbsp;</td>
                            <td class="text">&nbsp;</td>
                            <td class="text">UTD</td>
                            <td class="text">&nbsp;</td>
                            <td class="text">&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                        </p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} sort={workingAchievementSort} awardType="workingAchievement"/>

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <DogWACard />
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
        workingAchievementSort: state.workingAchievementSort
    }
}

export default connect(
    mapStateToProps,
)(wa)