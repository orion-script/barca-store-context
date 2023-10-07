import React from "react";

const styles = {
  parentContainer: "w-full h-full  relative   ",
  container: "2xl:container 2xl:mx-auto px-12 h-full relative ",
  chiefCenter: "max-w-[1500px] w-full  px-4  mx-auto h-full relative z-1 ",
};
const ContainerLayout = ({ children }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default ContainerLayout;
