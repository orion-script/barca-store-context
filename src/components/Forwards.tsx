import React from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import { ForwardsData } from "../utils/forward";
import Navbar from "./Navbar";

function Forwards() {
  return (
    <>
      <Navbar />
      <ContainerLayout>
        <h1 className="mt-20 mb-5 text-center text-[28px] font-extrabold">
          FORWARDS
        </h1>
        <div className="flex flex-wrap justify-center">
          {ForwardsData.map((item, index) => {
            return (
              <div className="w-11/12 md:w-1/4 p-4 relative" key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div
                    className="bg-cover bg-no-repeat object-cover bg-center h-56 p-4"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                  <div className="flex justify-between items-center py-5 px-2">
                    <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                      {item.name}
                    </p>
                    <p className="text-3xl text-gray-900">${item.price}</p>
                  </div>
                </div>
                <button className="bg-red-800 text-white p-3 absolute top-[55%] left-[30%] rounded-lg hover:bg-red-200 hover:text-black">
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </ContainerLayout>
    </>
  );
}

export default Forwards;
