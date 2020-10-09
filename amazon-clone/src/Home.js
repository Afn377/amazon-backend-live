import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={15935934}
            title="The lean startup"
            price={29.99}
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt"
            rating={5}
          />
          <Product
            id="49538094"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="89101112"
            title="PlayStation 4 Console - 1TB Slim Edition"
            price={364.99}
            image="https://m.media-amazon.com/images/I/715RBdgZtHL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="13141516"
            title="Xbox One X 1TB Console - Star Wars Jedi: Fallen Order Bundle [DISCONTINUED]"
            price={539.99}
            image="https://m.media-amazon.com/images/I/610BYaKjVDL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="17181920"
            title="HyperX Cloud Alpha S - PC Gaming Headset, 7.1 Surround Sound, Adjustable Bass, Dual Chamber Drivers, Chat Mixer, Breathable Leatherette, Memory Foam, and Noise Cancelling Microphone - Blue"
            price={109.99}
            image="https://m.media-amazon.com/images/I/61h7WVCfw6L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU8000FXZA, 2020 Model)"
            price={500}
            image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
