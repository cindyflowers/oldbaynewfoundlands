import React, { Component } from 'react';
import Head from 'next/head'
import Nav from '../components/nav'
import Navbar from '../components/Layout/Navbar';


class Home extends Component {
  render() {
      return (
          <React.Fragment>
              <Head>
                <title>Old Bay Newfoundlands</title>
                <link rel="icon" href="/favicon.ico" />
              </Head> 
              <Nav/>
          </React.Fragment>
      );
  }
}

export default Home
