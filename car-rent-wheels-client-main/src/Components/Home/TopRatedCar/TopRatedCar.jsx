import React from "react";
import Container from "../../Container/Container";
import { Link } from "react-router";

import { motion } from "motion/react";

const TopRatedCar = () => {
  return (
    <Container className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0 }}
        className="flex flex-col lg:flex-row justify-center items-center gap-10"
      >
        <div
          className="hero  h-[400px] mx-auto  w-full lg:w-1/2 "
          style={{
            backgroundImage: "url(https://i.ibb.co/Pv082Bb9/to-Rated-Car.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl sm:text-5xl font-bold">
                All Top Rated Cars
              </h1>
              <p className="mb-5">
                Discover the most loved cars, rated by our happy customers.
                Drive the best — every car here is trusted and highly reviewed.
                Quality, comfort, and reliability — experience top-rated rides
                only.
              </p>
              <Link to="/browse-cars">
                {" "}
                <button className="btn btn-primary shadow-none text-secondary">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-5">
            Enjoy your journey
          </h3>
          <p className="mb-4">
            Explore our collection of top-rated cars, handpicked for their
            performance, comfort, and reliability. Each vehicle has earned the
            trust and praise of our customers, making them the most popular
            choices on our platform. Whether you're planning a weekend trip or a
            business journey, our top-rated cars ensure a smooth and enjoyable
            driving experience every time. Drive with confidence — choose the
            cars everyone loves and recommends.
          </p>

          <p>
            Experience excellence on every drive with our top-rated cars,
            carefully selected for their superior quality and performance. Loved
            by hundreds of customers, these cars combine style, comfort, and
            dependability for every journey. From sleek sedans to powerful SUVs,
            each vehicle is maintained to perfection and ready to hit the road.
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default TopRatedCar;
