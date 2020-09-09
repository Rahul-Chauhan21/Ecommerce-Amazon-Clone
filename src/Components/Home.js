import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR2lAl93qQLMfaXAnsSzlIvjRaMYjdpjnk1Dd4Sky37GHD2GGnqL60wONAY"
          alt=""
        />
        <div className="home__row">
          <Product
            id={123}
            title="The Lean Startup"
            price={29.99}
            image=""
            rating={5}
          />
          <Product
            id={123}
            title="The Lean Startup"
            price={29.99}
            image=""
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={123}
            title="The Lean Startup"
            price={29.99}
            image=""
            rating={5}
          />
          <Product
            id={123}
            title="The Lean Startup"
            price={29.99}
            image=""
            rating={5}
          />
          <Product
            id={123}
            title="The Lean Startup"
            price={29.99}
            image=""
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={123}
            title="The Lean Startup"
            price={29.99}
            image=""
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
