import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import Advertisement from "../../components/Others/Advertisment";
import HeadSlider from "../../components/Others/HeadSlider";
import Card1 from "../../components/Others/Card1";
import Card2 from "../../components/Others/Card2";
import Card3 from "../../components/Others/Card3";
import Card4 from "../../components/Others/Card4";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <HeadSlider />
      <Card1 />
      <Card2 />
      <Advertisement />
      <Card3 />
      <Card4 />

      {/* <CarouselTransition /> */}
      {/* <Banner /> */}
      {/* <BannerBottom /> */}
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
