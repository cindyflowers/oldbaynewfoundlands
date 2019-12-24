import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentDog, setCurrentLitter } from '../../store/actions/cartActions';
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

    handleSetCurrentLitter = (id) => {
        this.props.setCurrentLitter(id); 
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

        let boys = this.props.dogs.filter(dog => dog.sex == "male" && dog.ours == true && dog.rip == ""  );
        let coboys = this.props.dogs.filter(dog => dog.sex == "male" && dog.ours == false && dog.rip == ""  );
        let studs = this.props.dogs.filter(dog => dog.sex == "male" && dog.stud == true && dog.rip == ""  );
        let girls = this.props.dogs.filter(dog => dog.sex == "female" && dog.ours == true  && dog.rip == "" );
        let cogirls = this.props.dogs.filter(dog => dog.sex == "female" && dog.ours == false  && dog.rip == "" );
        let past = this.props.dogs.filter(dog =>  dog.rip != "" );
        let past1to10 = this.props.dogs.filter(dog =>  dog.rip != "" && dog.id <= 20 );
        let past10andOver = this.props.dogs.filter(dog =>  dog.rip != "" && dog.id > 20);
        let litters1to10 = this.props.litters.filter(litter => litter.id < 11);
        let litters11to20 = this.props.litters.filter(litter => litter.id >10 && litter.id < 21);
        let litters21andOver = this.props.litters.filter(litter => litter.id >20);
        let toptwenty = this.props.dogs.filter(dog => dog.toptwenty != "");
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
                                                <a className="nav-link" type="button" id="ddAwards" data-toggle="dropdown" >
                                                    Awards <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className={ddAwardClass} 
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
                                                                        <Link href="/specialties">
                                                                            <a>Specialties</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/topTwenty">
                                                                            <a>Top Twenty</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/rom">
                                                                            <a>Register of Merit</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/vn">
                                                                            <a>Versatile Newfoundland</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/champions">
                                                                            <a>Champions</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/working">
                                                                            <a>Working</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <div className="col">
                                                                <h6 className="submenu-title">NCA Top Twenty</h6>

                                                                <ul className="megamenu-submenu top-brands">
                                                                    {toptwenty.map((data, idx) => (
                                                                        <Link href="/about">
                                                                            <li key={idx}>
                                                                                <a data-tip={data.call + ' (' + data.toptwenty + ')'} data-place="left" onClick={(e) => {
                                                                                    this.handleSetCurrentDog(data.id)
                                                                                }}><img src={data.image} alt="image" /></a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}

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
                                                <a className="nav-link" type="button" id="ddBoys" data-toggle="dropdown" >
                                                    The Boys <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className={ddBoysClass}>
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Old Bay Co-owned</h6>

                                                                <ul className="megamenu-submenu">
                                                                    {coboys.map((data, idx) => (
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
                                                                <h6 className="submenu-title">Old Bay Boys</h6>

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
                                                                <h6 className="submenu-title">The Studs</h6>

                                                                <ul className="megamenu-submenu top-brands">
                                                                    {studs.map((data, idx) => (
                                                                        <li>
                                                                            <Link href="/about">
                                                                                <a data-tip={data.call} data-place="left" onClick={(e) => {this.handleSetCurrentDog(data.id)}}>
                                                                                    <img src={data.image} alt="image" />
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
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
                                                <a className="nav-link" type="button" id="ddAwards" data-toggle="dropdown" >
                                                    The Girls <i className="fas fa-chevron-down"></i>
                                                    </a>
                                            </Link>
                                            <ul className={ddGirlsClass}>
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Old Bay Co-owned</h6>

                                                                <ul className="megamenu-submenu">
                                                                    {cogirls.map((data, idx) => (
                                                                        <Link href="/about">
                                                                            <li key={data.id}>
                                                                                <a onClick={(e) => {
                                                                                    this.handleSetCurrentDog(data.id)
                                                                                }}>{data.call}</a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Old Bay Girls</h6>

                                                                <ul className="megamenu-submenu">
                                                                    {girls.map((data, idx) => (
                                                                        <Link href="/about">
                                                                            <li key={data.id}>
                                                                                <a onClick={(e) => {
                                                                                    this.handleSetCurrentDog(data.id)
                                                                                }}>{data.call}</a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}

                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">The Dams</h6>

                                                                <ul className="megamenu-submenu top-brands">
                                                                    {girls.map((data, idx) => (
                                                                        <li>
                                                                            <Link href="/about">
                                                                                <a data-tip={data.call} data-place="left" onClick={(e) => {this.handleSetCurrentDog(data.id)}}>
                                                                                    <img src={data.image} alt="image" />
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
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
                                                <a className="nav-link" type="button" id="ddPuppies" data-toggle="dropdown" >
                                                    Puppies <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className={ddPuppiesClass}>
                                            <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Past Litters </h6>

                                                            <ul className="megamenu-submenu">
                                                                {litters1to10.map((data, idx) => (
                                                                    
                                                                    <Link href="/litter">
                                                                        <li key={idx}>
                                                                            <a data-tip={data.parents + ' Born: ' + data.dob} data-place="left" onClick={(e) => {
                                                                                this.handleSetCurrentLitter(data.id)
                                                                            }}>{data.parents}</a>
                                                                        </li>
                                                                    </Link>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Past Litters (continued)</h6>

                                                            <ul className="megamenu-submenu">
                                                                {litters11to20.map((data, idx) => (
                                                                        <Link href="/litter">
                                                                            <li key={idx}>
                                                                                <a data-tip={data.parents + ' Born: ' + data.dob} data-place="left" onClick={(e) => {
                                                                                    this.handleSetCurrentLitter(data.id)
                                                                                }}>{data.parents}</a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Past Litters (continued)</h6>

                                                            <ul className="megamenu-submenu">
                                                                {litters21andOver.map((data, idx) => (
                                                                    <Link href="/litter">
                                                                        <li key={idx}>
                                                                            <a data-tip={data.parents + ' Born: ' + data.dob} data-place="left" onClick={(e) => {
                                                                                this.handleSetCurrentLitter(data.id)
                                                                            }}>{data.parents}</a>
                                                                        </li>
                                                                    </Link>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                    </div>
                                    <div onClick={(e) => {this.togglePastOpen()}}>  
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a className="nav-link" type="button" id="ddPast" data-toggle="dropdown" >
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
                                                                    {past1to10.map((data, idx) => (
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
                                                                <h6 className="submenu-title">Our Past</h6>
                                                                
                                                                <ul className="megamenu-submenu top-brands">
                                                                    {past1to10.map((data, idx) => (
                                                                        <Link href="/about">
                                                                            <li key={idx}>
                                                                                <a data-tip={data.call + ' (' + data.dob + ' - ' + data.rip + ')'} data-place="left" onClick={(e) => {
                                                                                    this.handleSetCurrentDog(data.id)
                                                                                }}><img src={data.image} alt="image" /></a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}

                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="submenu-title">Our Past</h6>

                                                                <ul className="megamenu-submenu">
                                                                    {past10andOver.map((data, idx) => (
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
                                                                <h6 className="submenu-title">Our Past</h6>
                                                                
                                                                <ul className="megamenu-submenu top-brands">
                                                                    {past10andOver.map((data, idx) => (
                                                                        <Link href="/about">
                                                                            <li key={idx}>
                                                                                <a data-tip={data.call + ' (' + data.dob + ' - ' + data.rip + ')'} data-place="left" onClick={(e) => {
                                                                                    this.handleSetCurrentDog(data.id)
                                                                                }}><img src={data.image} alt="image" /></a>
                                                                            </li>
                                                                        </Link>
                                                                    ))}

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
        dogs: state.dogs,
        litters: state.litters
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        setCurrentDog: (id) => { dispatch(setCurrentDog(id)) },
        setCurrentLitter: (id) => { dispatch(setCurrentLitter(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (MegaMenu)
