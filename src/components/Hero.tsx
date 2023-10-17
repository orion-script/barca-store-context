import React from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
// import logo from "../assets/barça-logo.png";
// import Button from "./button/button.component";

function Hero() {
  return (
    <ContainerLayout>
      <div className="w-full text-center mt-20">
        <p className="font-extrabold text-3xl">FC BARCELONA</p>

        <p className="font-medium text-xl my-8">
          Original Paintings and Fine Art Prints of FC Barcelona
        </p>

        {/* <Button children="SHOP ALL" /> */}
        {/* <img
          src={logo}
          alt="barca logo"
          className="w-2/5 h-[20rem] m-auto mt-5 rounded-xl"
        /> */}
      </div>
    </ContainerLayout>
  );
}

export default Hero;
