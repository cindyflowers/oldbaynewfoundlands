import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentDog } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true
    };

    handleSetCurrentDog = (id) => {
        this.props.setCurrentDog(id); 
        window.scrollTo(0, 0);
        // var divsToHide = document.getElementsByClassName("dropdown-menu"); //divsToHide is an array
        // for(var i = 0; i < divsToHide.length; i++){
        //     divsToHide[i].style.visibility = "hidden"; 
        //     divsToHide[i].style.opacity = 0;
        // }
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let boys = this.props.dogs.filter(dog => dog.sex == "male" && dog.rip == ""  );
        let girls = this.props.dogs.filter(dog => dog.sex == "female" && dog.rip == "" );
        let past = this.props.dogs.filter(dog =>  dog.rip != "" );
        let litters1to10 = this.props.litters.filter(litter => litter.id < 11);
        let litters11to20 = this.props.litters.filter(litter => litter.id >10 && litter.id < 21);
        let litters21andOver = this.props.litters.filter(litter => litter.id >20);
        return (
            <React.Fragment>
            <div className="navbar-area">
                <ReactTooltip  />
                <div id="navbar" className="comero-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.jpg")} alt="Old Bay Newfoundlands" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-relative">
                                        <Link href="/#">
                                            <a className="nav-link active">
                                                Home 
                                            </a>
                                        </Link>
                                    </li>

                                    
                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Awards <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Over the Years</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/collections-style-one">
                                                                        <a>2019</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Award Type</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/cart">
                                                                        <a>Specialties</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/cart">
                                                                        <a>Top Twenty</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/checkout">
                                                                        <a>Register of Merit</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/compare">
                                                                        <a>Versatile Newfoundland</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/compare">
                                                                        <a>Champions</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/login">
                                                                        <a>Working</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">NCA Top Twenty</h6>

                                                            <ul className="megamenu-submenu top-brands">
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Flash (2018)" data-place="left">
                                                                            <img src={require("../../images/20-Flash.jpg")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Kiss (2018)">
                                                                            <img src={require("../../images/20-Kiss.jpg")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Rolex (2017)">
                                                                            <img src={require("../../images/20-Rolex.jpg")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a  data-tip="Spice (2010, 2012)">
                                                                            <img src={require("../../images/20-Spice.jpg")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Rocky (2006)">
                                                                            <img src={require("../../images/20-Rocky.jpg")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a  data-tip="Opie (2004, 2005)">
                                                                            <img src={require("../../images/20-Opie.jpg")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">
                                                The Boys <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Co-owned by Old Bay</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Flash</a>
                                                                    </Link>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Owned By Old Bay</h6>

                                                            <ul className="megamenu-submenu">
                                                                {/* <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Rolex</a>
                                                                    </Link>
                                                                </li> */}
                                                                {boys.map((data, idx) => (
                                                                    <Link href="/about">
                                                                        <li key={idx}>
                                                                            <a onClick={(e) => {
                                                                                this.handleSetCurrentDog(data.id)
                                                                            }}>{data.call}</a>
                                                                        </li>
                                                                    </Link>
                                                                ))}

                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/rolex.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Rolex</h4>
                                                                        </div>

                                                                        <a href="#"></a>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/maestro.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Maestro</h4>
                                                                        </div>

                                                                        <a href="#"></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">The Girls <i className="fas fa-chevron-down"></i></a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Co-owned by old bay</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Snowball</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Owned by old bay</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Kiss</a>
                                                                    </Link>
                                                                </li>



                                                            </ul>
                                                        </div>


                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/kiss.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Kiss</h4>
                                                                        </div>
                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/snowball.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Snowball</h4>
                                                                        </div>

                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">Puppies <i className="fas fa-chevron-down"></i></a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Past Litters </h6>

                                                            <ul className="megamenu-submenu">
                                                                {litters1to10.map((data, idx) => (
                                                                    <Link href="/litter">
                                                                        <li key={idx}>
                                                                            <a onClick={(e) => {
                                                                                this.handleSetCurrentLitter(data.id)
                                                                            }}>{data.parents}</a>
                                                                        </li>
                                                                    </Link>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Past Litters</h6>

                                                            <ul className="megamenu-submenu">
                                                                {litters11to20.map((data, idx) => (
                                                                        <Link href="/litter">
                                                                            <li key={idx}>
                                                                                <a onClick={(e) => {
                                                                                    this.handleSetCurrentLitter(data.id)
                                                                                }}>{data.parents}</a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Past Litters</h6>

                                                            <ul className="megamenu-submenu">
                                                                {litters21andOver.map((data, idx) => (
                                                                    <Link href="/litter">
                                                                        <li key={idx}>
                                                                            <a onClick={(e) => {
                                                                                this.handleSetCurrentLitter(data.id)
                                                                            }}>{data.parents}</a>
                                                                        </li>
                                                                    </Link>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/Sing.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Rhône and Kiss</h4>
                                                                        </div>
                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/CrosbyAndKissPuppies.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Crosby and Kiss</h4>
                                                                        </div>

                                                                        <Link href="#">
                                                                            <a></a>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Our Past <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about">
                                                    <a className="nav-link">Carson</a>
                                                </Link>
                                            </li>


                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.products,
        dogs: state.dogs,
        litters: state.litters
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        setCurrentDog: (id) => { dispatch(setCurrentDog(id)) },
        // setCurrentLitter: (id) => { dispatch(setCurrentLitter(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (MegaMenu)
