import React from "react";
import Container from "../../Container/Container";
import { motion } from "motion/react";

const CustomerTestimonial = () => {
  return (
    <Container>
      <section className="pt-10 pb-20 ">
        <h2 className="text-xl sm:text-3xl font-semibold text-center mb-10">
          Customer Testimonials
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0 }}
          className="grid gap-8 grid-cols-1 md:grid-cols-3 w-full mx-auto"
        >
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 ">
            <p className="text-primary text-2xl mb-1">★★★★★</p>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Loved by Traveler
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              “Booking was fast, and the car was spotless. Made my trip
              completely stress-free.”
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/Wpp0tNQ6/images.jpg"
                alt="Ashikur Rahman"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Ashikur Rahman
                </p>
                <p className="text-xs text-gray-500">Date : 12 Dec, 2024</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 ">
            <p className="text-primary text-2xl mb-1">★★★★★</p>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Loved by Traveler
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              “I loved how smooth and simple the whole process was. Definitely
              renting again!”
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/qMcFbpD9/360-F-200902415-G4e-Z9-Ok3-Ypd4-SZZKjc8nq-Jy-FVp1e-OD6-V.jpg"
                alt="Md.Tamim Khan"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Md.Tamim Khan
                </p>
                <p className="text-xs text-gray-500">Date : 5 March, 2025</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 ">
            <p className="text-primary text-2xl mb-1">★★★★★</p>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Loved by Traveler
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              “Perfect car for my weekend getaway. Excellent service from start
              to finish.”
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/4wgP74MT/360-F-751582764-ww6i-AKj-V7y-NAl-Kiyekex-KMi-Nbqt-R8-Usy.jpg"
                alt="Mr.Chowdhury"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Mr.Abid Chowdhury
                </p>
                <p className="text-xs text-gray-500">Date : 3 Sep, 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  );
};

export default CustomerTestimonial;
