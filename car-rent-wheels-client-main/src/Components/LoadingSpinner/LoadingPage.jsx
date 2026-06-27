import React from "react";
import Container from "../Container/Container";

const LoadingPage = () => {
  return (
    <Container className="h-screen w-full bg-transparent grid place-items-center">
      <span className="loading loading-bars text-primary loading-xl"></span>
    </Container>
  );
};

export default LoadingPage;
