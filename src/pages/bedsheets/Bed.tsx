


import React, { useState } from 'react';
import Filter from '../../components/filter/Filter';
import styles from './bed.module.css';
import img from './../../assets/offer3.png';
import Hero from '../../components/hero/Hero';
import Products from '../../components/products/Products';
import HomeCategories from '../../components/homeCategories/HomeCategories';
import Footer from '../../components/footer/Footer';

const Bed: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <HomeCategories />
      <div className={styles.main}>

        <div className={styles.filterContainer}>
          <Filter />
        </div>

        <div className={styles.bestSellerContainer}>
          <div className={styles.container}>
            <span className={styles.heading}>Best Sellers</span>
          </div>
          <Hero imageSrc={img} />


          <div className={styles.filterButtonContainer}>
            <button className={styles.filterButton} onClick={toggleFilter}>
              Filter
            </button>
          </div>


          {showFilter && (
            <div className={styles.filterContainerMobile}>
              <Filter />
            </div>
          )}

          <Products />

        </div>
      </div>
    </>
  );
};

export default Bed;