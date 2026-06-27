import React from "react";
import Navbar from "../Components/Headers/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import LoadingPage from "../Components/LoadingSpinner/LoadingPage";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="flex-1 pt-16">
        {isNavigating && <LoadingPage></LoadingPage>}
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
