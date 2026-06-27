import React from "react";
import { Link } from "react-router";

const BookingCard = ({ car }) => {
  const { _id, car_name, photo_url, category, location, price_per_day } = car;
  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center bg-white p-5 rounded-xl shadow-sm">
      <div className="shrink-0  w-full sm:w-auto">
        <img
          src={photo_url}
          alt={car_name}
          className="sm:w-20 sm:h-20 w-full  object-cover rounded-xl "
        />
      </div>
      <div className="flex justify-between flex-col sm:flex-row gap-5 sm:items-center w-full">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold capitalize truncate">{car_name}</h3>
          <div className="flex gap-y-1 gap-x-5 flex-col ">
            <h3 className="text-sm font-medium">
              Rent Price :
              <span className="font-normal truncate">
                {" "}
                {price_per_day} Tk /day
              </span>
            </h3>

            <h3 className="text-sm font-medium capitalize truncate">
              Location :<span className="font-normal"> {location}</span>
            </h3>

            <div className="badge badge-soft badge-warning text-primary font-medium py-3 capitalize">
              {category}
            </div>
          </div>
        </div>

        <Link
          to={`/car-details/${_id}`}
          className=" btn btn-secondary btn-outline shadow-none w-[140px] sm:w-auto"
        >
          {" "}
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
