import React, { Component } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';


class Index extends Component {
  render() {
      return (
          <React.Fragment>
              <Navbar></Navbar>
              <Banner />
              <Footer />
          </React.Fragment>
      );
  }
}

export default Index
