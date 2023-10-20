import React from "react";

const styles = {
  parentContainer: "w-full h-full",
  container: "2xl:container 2xl:mx-auto h-full md:px-10",
  // chiefCenter: "max-w-[1500px] w-full px-4 md:px-10 mx-auto h-full",
};
const ContainerLayout = ({ children }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default ContainerLayout;
