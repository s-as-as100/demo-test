import React from "react";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import "./App.scss";
import playButton from "./assets/playButton.png";
import banner from "./assets/leftbanner.png";
import details from "./assets/details.png";
const App = () => {
  return (
    <Layout>
      <Header />
      <div className="bannerContainer">
        <div className="rightBanner">
          <span className="titleLegend">
            <h1>
              Unlock <span className="dashedText">Your</span>
            </h1>
            <h1>Online Growth</h1>
            <h1>
              Potential{" "}
              <span className="buttonLeg">
                <button className="yesbtn">Yes</button>
              </span>
            </h1>
          </span>
          <div className="productLegend">
            <button className="productButton">Our Product</button>
            <img className="plusButton" src={playButton} />
          </div>
        </div>
        <div className="leftBanner">
          <img src={banner} />
        </div>
      </div>
      <div className="detailCont">
        <img src={details} />
      </div>
    </Layout>
  );
};

export default App;
