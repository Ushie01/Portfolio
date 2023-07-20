import React from 'react';
import Navbar from '../components/Navbar';
import Component from '../components';
import Header from './Header';
import Stack from './Stack';


const Home = () => {
  return (
    <Component>
      <Navbar />
      <Header />
      <Stack />
    </Component>
  );
};

export default Home;
