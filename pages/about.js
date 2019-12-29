import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Moment from 'react-moment'

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
        let {dogs, awards, currentDog } = this.props;
        let dog = dogs.filter(dog => dog.id == currentDog);
        let myDogs;
        if (dog[0].rip == "" ) 
        {
            myDogs = dogs.filter(d => dog[0].sex == d.sex && d.ours == true && d.rip == "");
        }
        else
        {
            myDogs = dogs.filter(d => d.ours == true && d.rip != "");
        }
        let startPosition =  myDogs.findIndex(d => d.id == currentDog);
        options.startPosition = startPosition;
        return (
            
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={dog[0].sex == "male" ? "The Boys" : "The Girls"} />
                <section className="about-area ptb-60">
                    {this.state.display ? <OwlCarousel className="litter-slides owl-carousel owl-theme" {...options} >
                        {myDogs.map((data, idx) => (
                            <div className="container">
                                <div className="row">
                                        <div className="col-xxl-4 col-md-6" key={data.id}>
                                            <div className="about-content">
                                            <h2><b>{data.call}</b> - {data.name}</h2>
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <tbody>
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
                                                        <td>AKA</td>
                                                        <td>{data.aka}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                {this.state.display && data.Titles.length > 0 ? (
                                                    <div className="table-responsive">
                                                       <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Title</th><th>Organization</th><th>Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.Titles.map((data, idx) => (
                                                                <tr>
                                                                    <td>{data.title}</td>
                                                                    <td>{data.org}</td> 
                                                                    <td>{data.date}</td>
                                                                </tr>
                                                            ))} 
                                                        </tbody>
                                                        </table>
                                                    </div>
                                                ) : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 col-md-6">
                                            <img src={data.image} className="about-img2" alt="image" />
                                    </div>
                                </div>
                                {this.state.display > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Award</th><th>Show</th><th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {awards.filter(dog => dog.id == data.id).map((data, idx) => (
                                                <tr>
                                                    <td>{data.award}</td>
                                                    <td>{data.show}</td>
                                                    <td><Moment format="MMMM DD, YYYY">{data.date}</Moment></td>
                                                </tr>
                                            ))} 
                                        </tbody>
                                        </table>
                                    </div>
                                ) : ""} 
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
        awards: state.awards,
        currentDog: state.currentDog
    }
}

export default connect(
    mapStateToProps)
    (Index)
