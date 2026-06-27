import React from "react";
import Container from "../Container/Container";

const LoadingComponent = () => {
  return (
    <Container className=" w-full bg-transparent grid place-items-center  py-20">
      <span className="loading loading-bars text-primary loading-xl"></span>
    </Container>
  );
};

export default LoadingComponent;
