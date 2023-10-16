import React from "react";

const styles = {
  parentContainer: "w-full h-full",
  container: "2xl:container 2xl:mx-auto h-full",
  chiefCenter: "max-w-[1500px] w-full px-4 md:px-16 mx-auto h-full",
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
