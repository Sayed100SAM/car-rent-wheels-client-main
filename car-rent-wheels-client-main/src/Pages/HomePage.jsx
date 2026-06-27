import React, { useEffect, useState } from "react";
import SwiperSlider from "../Components/Home/Banner/SwiperSlider";
import Container from "../Components/Container/Container";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";
import CarCard from "../Components/BrowseCar/CarCard";
import { Link, useLocation } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import WhyRentUs from "../Components/Home/WhyRentUs/WhyRentUs";
import TopRatedCar from "../Components/Home/TopRatedCar/TopRatedCar";
import CustomerTestimonial from "../Components/Home/CustomerTestimonial/CustomerTestimonial";

import QandA from "../Components/Home/QandA/QandA";

const HomePage = () => {
  const [cars, setCars] = useState(null);

  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    fetch("https://car-rent-wheels-server.vercel.app/latest-cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();

    if (search.length === 0) {
      return;
    }

    fetch(`https://car-rent-wheels-server.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
        e.target.reset();
      });
  };

  return (
    <>
      <title>Rent Wheels - Home</title>

      <div>
        <SwiperSlider></SwiperSlider>
      </div>

      <Container>
        {/* featured cars */}
        <div className="mt-20 mb-10">
          <h2 className="text-center text-xl sm:text-3xl font-semibold ">
            Featured Cars
          </h2>
          {/* search */}
          <form onSubmit={handleSearch} className="flex justify-center  mt-12 ">
            <div className="relative h-[45px] mb-8">
              <input
                type="text"
                name="search"
                placeholder="Search By Name..."
                spellCheck={false}
                className="bg-gray-200 w-full sm:w-[400px] px-5 pr-24 py-2 rounded-4xl h-full outline-none "
                required
              />
              <button
                type="submit"
                className="btn bg-gray-200 hover:bg-gray-300  text-secondary shadow-none rounded-br-4xl rounded-tr-4xl absolute top-0 right-0 h-full"
              >
                Search
              </button>
            </div>
          </form>

          {loading ? (
            <LoadingComponent></LoadingComponent>
          ) : cars.length === 0 ? (
            <h3 className="text-primary font-medium text-xl sm:text-3xl py-10  text-center">
              No car available now !
            </h3>
          ) : (
            <>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 pt-10">
                {" "}
                {cars.map((car) => (
                  <CarCard key={car._id} car={car}></CarCard>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  to="/browse-cars"
                  className="inline-flex btn btn-outline btn-secondary items-center gap-1 shadow-none"
                >
                  View All Cars <FaArrowRight></FaArrowRight>
                </Link>
              </div>
            </>
          )}
        </div>
      </Container>

      {/* why rent us */}
      <WhyRentUs></WhyRentUs>

      {/* Top rated cars */}
      <TopRatedCar></TopRatedCar>

      {/* customer Testimonials */}
      <CustomerTestimonial></CustomerTestimonial>

      {/* question and answer  */}
      <QandA></QandA>
    </>
  );
};

export default HomePage;
