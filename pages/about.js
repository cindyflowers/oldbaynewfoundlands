import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
let options = {
    nav: true,
    dots: true,
    items: 1,
    startPosition: 0,
    smartSpeed: 750,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ]
}
class Index extends Component {
    state = { 
        display: false,

    };

    componentDidMount(){ 
        this.setState({ display: true}) 
    }
    render() {
        let dog = this.props.dogs.filter(dog => dog.id == this.props.currentDog);
        let dogs;
        if (dog[0].rip == "" )
            dogs = this.props.dogs.filter(d => dog[0].sex == d.sex && d.rip == "");
        else
            dogs = this.props.dogs.filter(d => d.rip != "");
        let startPosition =  dogs.findIndex(d => d.id == this.props.currentDog);
        options.startPosition = startPosition;
        return (
            
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={dog[0].sex == "male" ? "The Boys" : "The Girls"} />
                <section className="about-area ptb-60">
                    {this.state.display ? <OwlCarousel className="litter-slides owl-carousel owl-theme" {...options} >
                        {dogs.map((data, idx) => (
                            <div className="container">
                                <div className="row">
                                        <div className="col-xxl-4 col-md-6" key={data.id}>
                                            <div className="about-content">
                                            <h2><b>{data.call}</b> - {data.name}</h2>
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <tr>
                                                        <td>Born</td>
                                                        <td>{data.dob}</td>
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
                                                        <td>Owner</td>
                                                        <td>{data.owner}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lives With</td>
                                                        <td>{data.lives}</td>
                                                    </tr> 
                                                    <tr>
                                                        <td>Titles</td>
                                                        <td>
                                                            {data.Titles.map((data, idx) => (
                                                                <div>
                                                                    {data}
                                                                </div>
                                                            ))} 
                                                        </td>
                                                    </tr> 
                                                    <tr>
                                                        <td>AKA</td>
                                                        <td>{data.aka}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 col-md-6">
                                            <img src={data.image} className="about-img2" alt="image" />
                                    </div>
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
        dogs: state.dogs,
        currentDog: state.currentDog
    }
}

export default connect(
    mapStateToProps)
    (Index)
