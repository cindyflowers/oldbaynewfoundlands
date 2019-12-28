import React, { Component } from 'react';
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
        let { gridClass } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Men's" />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Specialties</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <DogFilterOptions onClick={this.handleGrid} />

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

export default Index;


// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import Navbar from '../components/Layout/Navbar';
// import Footer from '../components/Layout/Footer';
// import Breadcrumb from '../components/Common/Breadcrumb';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));
// import ReactTooltip from 'react-tooltip'
// import Moment from 'react-moment'

// class Index extends Component {
//     state = { 
//         display: false,
//     };

//     componentDidMount(){ 
//         this.setState({ display: true}) 
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Navbar /> 
//                 <Breadcrumb title="Specialties" />
//                 <section className="specialty-area ptb-60">
//                     <div className="container">
//                     <h2><b>Specialty Awards</b></h2>
//                         {this.props.awards.length > 0 ? this.props.awards.map((data, idx) => (
//                             <div className="row">                         
//                                 <div className="col-sm-12">
//                                     <div className="specialty-content">
//                                         <div className="table-responsive">
//                                             <table className="table">
//                                                 <tr>
//                                                     <td>
//                                                         <h2>{data.dog}</h2>
//                                                         <img  src={data.image} className="specialty-image" alt="image" />
//                                                     </td>
//                                                     <td>
//                                                         <tr>
//                                                             <td>{data.award}</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td>{data.show}</td>
//                                                         </tr>
//                                                         <tr>
//                                                             <td><Moment format="MMMM DD, YYYY">{data.date}</Moment></td>
//                                                         </tr>
//                                                     </td>
//                                                 </tr>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
                        
//                         )) : ""}   
//                     </div> 
//                 </section>
//                 <Footer />
//             </React.Fragment>
//         );
//     }
// }

// const mapStateToProps = (state)=>{
//     return{
//         awards: state.awards,
//     }
// }

// export default connect(
//     mapStateToProps)
//     (Index)