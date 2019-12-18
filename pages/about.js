import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';

// id: 1,
// call: "Sirius",
// sex: "male",
// name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
// sire: "",
// dam: "",
// dob: "10/26/2010",
// living: true,
// rip: "",
// owner: "Cindy and John Flowers",
// aka: "Seriously Cute, Serial",
// lives: "Cindy and John Flowers",
// health: "",
// image: require("../../images/info/Sirius.jpg"),
// Titles: [
//     "AKC Champion",
//     "AKC Grand Champion",
//     "Canine Good Citizen",
//     "Therapy Dog International"
// ],

class Index extends Component {
    render() {
        let dog = this.props.dogs.filter(dog => dog.id == this.props.currentDog );
        return (
            
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={dog[0].call} />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">

                                <div className="col-xxl-6 col-md-8" key={dog[0].id}>
                                    <div className="about-content">
                                    <h2><b>{dog[0].call}</b> - {dog[0].name}</h2>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tr>
                                                <td>Born</td>
                                                <td>{dog[0].dob}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td>Sire</td>
                                                <td>{dog[0].sire}</td>
                                            </tr>
                                            <tr>
                                                <td>Dam</td>
                                                <td>{dog[0].dam}</td>
                                            </tr>
                                            <tr>
                                                <td>Owner</td>
                                                <td>{dog[0].owner}</td>
                                            </tr>
                                            <tr>
                                                <td>Lives With</td>
                                                <td>{dog[0].lives}</td>
                                            </tr> 
                                            <tr>
                                                <td>Titles</td>
                                                <td>
                                                    {dog[0].Titles.map((data, idx) => (
                                                        <div>
                                                            {data}
                                                        </div>
                                                    ))} 
                                                </td>
                                            </tr> 
                                            <tr>
                                                <td>AKA</td>
                                                <td>{dog[0].aka}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-md-4">
                                    <img src={dog[0].image} className="about-img2" alt="image" />
                            </div>
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
        dogs: state.dogs,
        currentDog: state.currentDog
    }
}

export default connect(
    mapStateToProps)
    (Index)
