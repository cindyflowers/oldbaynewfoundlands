import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentDog } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true,
        isAwardsOpen: false,
        isBoysOpen: false,
        isGirlsOpen: false,
        isPuppiesOpen: false,
        isPastOpen: false
    };

    handleSetCurrentDog = (id) => {
        this.props.setCurrentDog(id); 
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleCloseAllDropdowns () {
        this.setState({ isAwardsOpen: false });
        this.setState({ isBoysOpen: false });
        this.setState({ isGirlsOpen: false });
        this.setState({ isPuppiesOpen: false });
        this.setState({ isPastOpen: false });
    }

    toggleAwardsOpen = () => { this.toggleCloseAllDropdowns(); this.setState({ isAwardsOpen: !this.state.isAwardsOpen })};
    toggleBoysOpen = () => {this.toggleCloseAllDropdowns(); this.setState({ isBoysOpen: !this.state.isBoysOpen })};
    toggleGirlsOpen = () => {this.toggleCloseAllDropdowns(); this.setState({ isGirlsOpen: !this.state.isGirlsOpen })};
    togglePuppiesOpen = () => {this.toggleCloseAllDropdowns(); this.setState({ isPuppiesOpen: !this.state.isPuppiesOpen })};
    togglePastOpen = () => { this.toggleCloseAllDropdowns(); this.setState({ isPastOpen: !this.state.isPastOpen })};

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
        const { isAwardsOpen } = this.state;
        const { isBoysOpen } = this.state;
        const { isGirlsOpen } = this.state;
        const { isPuppiesOpen } = this.state;
        const { isPastOpen } = this.state;
        
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const ddAwardClass = `dropdown-menu${isAwardsOpen ? " show" : ""}`;
        const ddBoysClass = `dropdown-menu${isBoysOpen ? " show" : ""}`;
        const ddGirlsClass = `dropdown-menu${isGirlsOpen ? " show" : ""}`;
        const ddPuppiesClass = `dropdown-menu${isPuppiesOpen ? " show" : ""}`;
        const ddPastClass = `dropdown-menu${isPastOpen ? " show" : ""}`;

        let boys = this.props.dogs.filter(dog => dog.sex == "male" && dog.rip == ""  );
        let girls = this.props.dogs.filter(dog => dog.sex == "female" && dog.rip == "" );
        let past = this.props.dogs.filter(dog =>  dog.rip != "" );
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

                            <div id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-relative">
                                        <Link href="/#">
                                            <a className="nav-link active">
                                                Home 
                                            </a>
                                        </Link>
                                    </li>
                                    <div onClick={(e) => {this.toggleAwardsOpen()}}>
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a class="nav-link" type="button" id="ddAwards" data-toggle="dropdown" >
                                                    Awards <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul class={ddAwardClass} 
                                            role="menu" aria-labelledby="ddAwards">
                                                <li className="nav-item" role="presentation">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Over the Years</h6>
                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/about">
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
                                    </div>
                                    <div onClick={(e) => {this.toggleBoysOpen()}}>    
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a class="nav-link" type="button" id="ddBoys" data-toggle="dropdown" >
                                                    The Boys <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className={ddBoysClass}>
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
                                    </div>
                                    <div onClick={(e) => {this.toggleGirlsOpen()}}>    
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a class="nav-link" type="button" id="ddAwards" data-toggle="dropdown" >
                                                    The Girls <i className="fas fa-chevron-down"></i>
                                                    </a>
                                            </Link>
                                            <ul className={ddGirlsClass}>
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
                                    </div>
                                    <div onClick={(e) => {this.togglePuppiesOpen()}}>  
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a class="nav-link" type="button" id="ddPuppies" data-toggle="dropdown" >
                                                    Puppies <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className={ddPuppiesClass}>
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Litters</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/category-left-sidebar">
                                                                            <a>Rhône and Kiss</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Future</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/category-without-sidebar-fullwidth">
                                                                            <a>Powder Ridge Newfs - Late 2019</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>


                                                            <div className="col">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div onClick={(e) => {this.togglePastOpen()}}>  
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a class="nav-link" type="button" id="ddPast" data-toggle="dropdown" >
                                                    Our Past <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className={ddPastClass}>
                                                <li className="nav-item">
                                                <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Our Past</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/category-without-sidebar-fullwidth">
                                                                            <a>Carson</a>
                                                                        </Link>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="submenu-title">Our Past</h6>

                                                                <ul className="megamenu-submenu top-brands">
                                                                    <li>
                                                                        <Link href="#">
                                                                            <a data-tip="Flash (2018)" data-place="left">
                                                                                <img src={require("../../images/20-Flash.jpg")} alt="image" />
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
                                    </div>
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
        dogs: state.dogs
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        setCurrentDog: (id) => { dispatch(setCurrentDog(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (MegaMenu)
