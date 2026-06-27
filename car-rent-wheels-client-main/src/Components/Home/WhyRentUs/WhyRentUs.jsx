import React from "react";
import Container from "../../Container/Container";
import { motion } from "motion/react";

const WhyRentUs = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <h2 className="text-center text-3xl font-semibold ">
          Why Rent With Us
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  sm:gap-x-10 lg:gap-x-5 gap-y-12 mt-20 mb-10 text-white"
        >
          <div className=" rounded-xl p-5 space-y-3 bg-[#131222] relative">
            <div className="flex gap-2 justify-center items-center text-4xl font-bold  ">
              <span className="border-10 border-white text-[#131222]  bg-primary rounded-full w-20 h-20 grid place-items-center absolute -top-10">
                1
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary text-center mt-10">
              Easy Booking
            </h3>
            <p className="text-center text-gray-300">
              Book your ride in just a few clicks. No paperwork, no hassle fully
              online. Instant confirmation for every reservation.
            </p>
          </div>

          <div className=" rounded-xl p-5 space-y-3 bg-[#131222] relative">
            <div className="flex gap-2 justify-center items-center text-4xl font-bold  ">
              <span className="border-10 border-white text-[#131222]  bg-primary rounded-full w-20 h-20 grid place-items-center absolute -top-10">
                2
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary text-center mt-10">
              Affordable Rates
            </h3>
            <p className="text-center text-gray-300">
              Get premium cars at budget-friendly prices. No hidden fees what
              you see is what you pay. Flexible rental plans for every need.
            </p>
          </div>

          <div className=" rounded-xl p-5 space-y-3 bg-[#131222] relative">
            <div className="flex gap-2 justify-center items-center text-4xl font-bold  ">
              <span className="border-10 border-white text-[#131222]  bg-primary rounded-full w-20 h-20 grid place-items-center absolute -top-10">
                3
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary  text-center mt-10">
              Trusted Providers
            </h3>
            <p className="text-center text-gray-300">
              All cars verified for quality and safety. Rented only from
              top-rated owners. Thousands of happy customers nationwide.
            </p>
          </div>

          <div className=" rounded-xl p-5 space-y-3 bg-[#131222] relative">
            <div className="flex gap-2 justify-center items-center text-4xl font-bold  ">
              <span className="border-10 border-white text-[#131222]  bg-primary rounded-full w-20 h-20 grid place-items-center absolute -top-10">
                4
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary text-center mt-10">
              24/7 Support
            </h3>
            <p className="text-center text-gray-300">
              Need help ! We're always here for you. Chat, call, or email
              anytime day or night. Quick response and real-time issue
              resolution.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default WhyRentUs;
