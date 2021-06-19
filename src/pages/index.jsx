import React, { useState, useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer, Landing, Section, Carousel, Image , CoffeeDetails, CoffeeOrder, CoffeeSelection, Cart, MoreInfo } from 'components';
import { ThemeProvider } from '../context/ThemeContext';
import { CartProvider } from '../context/Cart';
import '../sass/global/styles.scss';
import * as styles from './styles.module.scss';

const Homepage = () => (
  <ThemeProvider>
    <CartProvider>
      <div className={styles.mainContainer}>
        <Header />
        <MoreInfo />
        <Landing />
        <CoffeeDetails />
        <CoffeeOrder />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  </ThemeProvider>
);
export default Homepage;
