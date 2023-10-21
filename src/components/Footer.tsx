import React from "react";
// import { SHOP_DATA } from "../utils/db";

function Footer() {
  return (
    <footer className="w-full h-[5rem] bg-slate-400 flex flex-col justify-end text-center">
      <div className="w-2/4 h-20 m-auto my-5">
        {/* {SHOP_DATA[4].items.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))} */}
      </div>
      <p className="pb-1">
        Designed By{" "}
        <a
          href="https://github.com/Hadestech01"
          target="_blank"
          className="border-b-2 border-gray-800 italic"
        >
          HadesCodes
        </a>
      </p>
    </footer>
  );
}

export default Footer;
