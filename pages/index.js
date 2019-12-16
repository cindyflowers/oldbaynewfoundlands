import React, { Component } from 'react';
import Head from 'next/head'
import Banner from '../components/shop-style-two/Banner';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';


class Index extends Component {
  render() {
      return (
          <React.Fragment>
              {/* <Head>
                <title>Old Bay Newfoundlands</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>  */}
              <Navbar></Navbar>
              <Banner />
              <Footer />
          </React.Fragment>
      );
  }
}

export default Index
