import React from 'react';
import Container from '../Container/Container';

const ModalLoading = () => {
    return (
      <Container className=" w-full min-h-[400px] max-h-full  bg-transparent grid place-items-center  ">
      <span className="loading loading-bars text-primary loading-xl"></span>
    </Container>
    );
};

export default ModalLoading;