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
            title="Acer Nitro VG270P IPS 27 inch Gaming Monitor - 1 MS - 144 Hz - Full HD Resolution - 400 Nits - 2XHDMI 1X Display Port - Free Sync - VG270P (Black) "
            price={245.35}
            image="https://images-na.ssl-images-amazon.com/images/I/61Vddza8BrL._SL1336_.jpg"
            rating={5}
          />
          <Product
            id={124}
            title="Apple iPhone 11 (64GB) - Black "
            price={872.36}
            image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={128}
            title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black) "
            price={1361.93}
            image="https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={125}
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black) "
            price={132.89}
            image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg"
            rating={3}
          />
          <Product
            id={126}
            title="NVIDIA Titan RTX Graphics Card "
            price={4361.84}
            image="https://images-na.ssl-images-amazon.com/images/I/71OpiCVK%2B0L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={127}
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
