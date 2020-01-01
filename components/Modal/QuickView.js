import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment'

class QuickView extends Component {
    state = { 
        display: false,
    };

    componentDidMount(){ 
        this.setState({ display: true}) 
    }
    render() {
        const { closeModal } = this.props;
        let dog = this.props.dogs.filter(dog => dog.id == this.props.idd);
        let awards = this.props.awards.filter(award => award.id == this.props.idd);
        let data = dog[0];
        return (
            <div className="modal fade productQuickView show" style={{paddingRight: '16px', display: 'block'}}>
                <ToastContainer />
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="productQuickView-image">
                                    <h2><b>{data.call}</b></h2>
                                    <img src={this.props.image} alt="image" /> 
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6">
                                
                                {this.state.display ? (
                                    <div className="about-content">
                                        <h2>{data.name}</h2>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <tbody>
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
                                        </div>
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                        {this.state.display && data.Titles.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Title</th><th>Date</th><th>Organization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.Titles.map((data, idx) => (
                                        <tr>
                                            <td>{data.title}</td>
                                            <td><Moment format="MMMM DD, YYYY">{data.date}</Moment></td>
                                            <td>{data.org}</td>
                                        </tr>
                                    ))} 
                                </tbody>
                                </table>
                            </div>
                            ) : ""}
                        {this.state.display && awards.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Award</th><th>Show</th><th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awards.map((data, idx) => (
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
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return{
        dogs: state.dogs,
        awards: state.awards
    }
}

export default connect(
    mapStateToProps)
    (QuickView)
