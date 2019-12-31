import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ReactTooltip from 'react-tooltip'
import Moment from 'react-moment'

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

const options = {
    nav: true,
    dots: true,
    items: 1,
    smartSpeed: 750,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ]
}

function getIndex (litters, id) {
    for (var i = 0; i < litters.length; ++i) {
     if (litters[i].id === id) {
       return i;
     }
    }
    return -1;
  }

class Index extends Component {
    state = { 
        display: false,
    };

    componentDidMount(){ 
        this.setState({ display: true}) 
    }
    render() {

        options.startPosition = getIndex(this.props.litters, this.props.currentLitter);
        return (
            
            <React.Fragment>
                <Navbar />
                
                <Breadcrumb title="Litters" />
                <section className="litter-area ptb-60">
                    <ReactTooltip />
                    {this.state.display ? <OwlCarousel className="litter-slides owl-carousel owl-theme" {...options} >
                    {this.props.litters.map((data, idx) => (
                        <div className="container">
                            <div className="row">                         
                                <div className="col-xxl-4 col-md-6" key={data.id}>
                                    <div className="litter-content">
                                    <h2><b>{data.parents}</b></h2>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tr>
                                                <td>Born</td>
                                                <td><Moment format="MMMM DD, YYYY">{data.dob}</Moment></td>
                                            </tr>
                                            
                                            <tr>
                                                <td>Sire</td>
                                                <td>{data.sire}</td>
                                            </tr>
                                            <tr>
                                                <td>Dam</td>
                                                <td>{data.dam}</td>
                                            </tr>
                                            <tr>
                                                <td>Boys</td>
                                                <td>{data.boys}</td>
                                            </tr>
                                            <tr>
                                                <td>Girls</td>
                                                <td>{data.girls}</td>
                                            </tr> 
                                            <tr>
                                                <td>Puppies</td>
                                                <td>
                                                    {data.puppies.map((data, idx) => (
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
                                    <img data-tip={data.sire} data-place="left"  src={data.sireimg} className="litter-image" alt="image" />
                            </div>
                            <div className="col-xxl-4 col-md-3">
                                    <h2><b>Dam</b></h2>
                                    <img data-tip={data.dam} data-place="left"  src={data.damimg} className="litter-image" alt="image" />
                            </div>
                        </div>
                        <div className="col-xxl-8 col-md-6">
                            <h2><b>Puppies</b></h2>
                            <img src={data.pupimg} className="litter-img2" alt="image" />
                        </div>
                    </div>
                    ))}
                    </OwlCarousel> : ''}
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