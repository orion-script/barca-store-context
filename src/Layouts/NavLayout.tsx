import React from "react";
interface navlayout {
  children: any;
}
const styles = {
  parentContainer: "w-full h-full fixed top-0 z-50",
  container: "2xl:container 2xl:mx-auto",
  chiefCenter:
    "bg-[#fff] max-w-[1500px] w-full h-12 px-4 md:px-16 border-b border-gray-500",
};
const NavLayout = ({ children }: navlayout) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default NavLayout;
