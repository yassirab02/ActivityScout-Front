import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import TrendingPlaces from "../components/TrendingPlaces";
import Filter from "../components/Filter";
import Rating from "../components/Rating";
import Comment from "../components/comment/Comment";
import ConfirmMsg from "../components/comment/ConfirmMsg";
import Suggestions from "../components/Suggestions";
import Activities from "../components/Activities";
import AddComment from "../components/comment/AddComment";
import AddActivity from "../components/AddActivity";
import Carousel from "../components/Carousel";
import InfiniteScroller from "../components/InfiniteScroller";
// import Login from "./pages/Login";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <LoginNav/> */}
      <div className="pt-20">
        {/* <LandingPage /> */}
        <InfiniteScroller/>
        <SearchBar />
        <Suggestions />
        <Filter />
        <Activities />
        <TrendingPlaces />
        <AddComment />
        <Rating />
        <ConfirmMsg message="Your comment uploaded" />
        <Comment />
        <Carousel/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
