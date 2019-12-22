import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';

// id: 1,
// parents: "Rhone and Kiss",
// breeders: "Old Bay Newfs - Cindy Flowers and Kathy Hamilton",
// sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
// dam: "GCHB Old Bay's Keep It Simple ROM",
// dob: "November 8, 2019",
// boys: 0,
// girls: 1,
// puppies: [
//     "Sing",
// ],
// sireimg: require('../../images/litters/sire.jpg'),
// damimg: require('../../images/litters/Kiss.jpg'),
// pupimg: require('../../images/info/Sing.jpg'),

class Index extends Component {
    render() {
        let litter = this.props.litters.filter(litter => litter.id == this.props.currentLitter );
        return (
            
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={litter[0].parents} />
                <section className="litter-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">

                                <div className="col-xxl-4 col-md-6" key={litter[0].id}>
                                    <div className="litter-content">
                                    <h2><b>{litter[0].parents}</b></h2>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tr>
                                                <td>Born</td>
                                                <td>{litter[0].dob}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td>Sire</td>
                                                <td>{litter[0].sire}</td>
                                            </tr>
                                            <tr>
                                                <td>Dam</td>
                                                <td>{litter[0].dam}</td>
                                            </tr>
                                            <tr>
                                                <td>Boys</td>
                                                <td>{litter[0].boys}</td>
                                            </tr>
                                            <tr>
                                                <td>Girls</td>
                                                <td>{litter[0].girls}</td>
                                            </tr> 
                                            <tr>
                                                <td>Puppies</td>
                                                <td>
                                                    {litter[0].puppies.map((data, idx) => (
                                                        <div>
                                                            {data}
                                                        </div>
                                                    ))} 
                                                </td>
                                            </tr> 

                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-4 col-md-3">
                                    <h2><b>Sire</b></h2>
                                    <img src={litter[0].sireimg} className="litter-image" alt="image" />
                            </div>
                            <div className="col-xxl-4 col-md-3">
                                    <h2><b>Dam</b></h2>
                                    <img src={litter[0].damimg} className="litter-image" alt="image" />
                            </div>

                        </div>
                        <div className="col-xxl-8 col-md-6">
                            <h2><b>Puppies</b></h2>
                            <img src={litter[0].pupimg} className="litter-img2" alt="image" />
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        litters: state.litters,
        currentLitter: state.currentLitter
    }
}

export default connect(
    mapStateToProps)
    (Index)