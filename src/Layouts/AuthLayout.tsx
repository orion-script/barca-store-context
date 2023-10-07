import React from "react";
// import logo from "../assets/svgs/laploy-logo.svg";

const LoginContainer = ({ children }: any) => {
  return (
    <div className="">
      {/* <div className="w-1/2 flex flex-col pl-16 bg-[#f9f9f9] min-h-screen "> */}
      {/* <div className="lg"> */}
      {/* <img src={logo} alt="laploy" className="w-auto h-auto mt-[30px]" /> */}
      {/* </div> */}
      <div className="">{children}</div>
      {/* </div> */}
    </div>
  );
};

export default LoginContainer;
