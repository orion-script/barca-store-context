import React from "react";
interface navlayout {
    children:any
}
const styles = {
  parentContainer: "w-full h-full     ",
  container: "2xl:container 2xl:mx-auto px-12 h-full ",
  chiefCenter: "max-w-[1500px] w-full  px-4  mx-auto h-full  ",
};
const NavLayout = ({ children } : navlayout) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default NavLayout;
