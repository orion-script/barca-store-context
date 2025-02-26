import React from "react";

const styles = {
  parentContainer: "w-11/12 md:w-2/4 h-screen m-auto",
  container: "2xl:container 2xl:mx-auto h-full",
  chiefCenter: "max-w-[1500px] w-full mx-auto h-full",
};

const LoginContainer = ({ children }: any) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default LoginContainer;
