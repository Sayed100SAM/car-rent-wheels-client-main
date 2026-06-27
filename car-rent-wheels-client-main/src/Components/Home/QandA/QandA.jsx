import React from "react";
import Container from "../../Container/Container";
import { motion } from "motion/react";

const QandA = () => {
  return (
    <Container className="mb-20">
      <div className="max-w-[800px] mx-auto sm:h-[400px]">
        <h2 className="text-center text-xl sm:text-3xl font-semibold mb-10">
          Questions & Answers
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Log in" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>

          <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              How can I book car?
            </div>
            <div className="collapse-content text-sm">
              Go to "Browse Cars" page and select "View Details" then you can
              book car.
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default QandA;
