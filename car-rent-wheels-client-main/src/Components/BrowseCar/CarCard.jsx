import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import { motion } from "motion/react";

const CarCard = ({ car }) => {
  const {
    _id,
    car_name,
    category,
    price_per_day,
    photo_url,
    provider_name,
    status,
  } = car;

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
        cursor: "pointer",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white shadow-sm  rounded-xl space-y-2 w-full">
        <div className="w-full h-[250px] sm:h-[200px] rounded-xl mb-3 relative">
          {status === "available" ? (
            <div className="badge badge-success absolute top-2 right-2 text-white font-semibold py-4">
              Available
            </div>
          ) : (
            <div className="badge badge-error absolute top-2 right-2 text-white font-semibold py-4">
              Booked
            </div>
          )}

          <img
            src={photo_url}
            alt={car_name}
            className="w-full h-full object-cover bg-gray-100 rounded-tr-xl rounded-tl-xl"
          />
        </div>

        <div className="p-4 pt-1 space-y-2">
          <h3
          className=" font-medium capitalize truncate "
          data-tooltip-id="my-tooltip"
          data-tooltip-content={car_name}
          data-tooltip-delay-hide={2000}
          data-tooltip-delay-show={1000}
        >
          {car_name}
        </h3>
        <Tooltip
          id="my-tooltip"
          style={{ backgroundColor: "#FFB51D", color: "#001931" }}
        />

        <div>
          <h3 className="text-sm font-medium">
            Rent Price :{" "}
            <span className="font-normal"> {price_per_day} Tk /day</span>
          </h3>
        </div>
        <div className="badge badge-soft badge-warning text-primary font-medium py-3 capitalize">
          {category}
        </div>
        <div>
          <h3 className="text-sm font-medium mb-1">Provider Name </h3>
          <p className="text-sm capitalize truncate">{provider_name}</p>
        </div>
        <Link to={`/car-details/${_id}`}>
          {" "}
          <button className="btn border-none outline-none shadow-none hover:btn-primary hover:text-secondary btn-secondary w-full mt-1">
            View Details
          </button>
        </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
