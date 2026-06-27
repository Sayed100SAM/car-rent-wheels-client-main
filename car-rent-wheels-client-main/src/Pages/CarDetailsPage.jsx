import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import { useLocation, useParams } from "react-router";
import Swal from "sweetalert2";
import { useContextHook } from "../Hooks/useContextHook";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";

const CarDetailsPage = () => {
  const { user } = useContextHook();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    fetch(`https://car-rent-wheels-server.vercel.app/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);

  const handleBookBtn = (id) => {
    if (car?.status !== "available") {
      return;
    }

    const status = "booked";
    const updatedStatus = {
      status,
      booked_user: {
        email: user?.email,
        name: user?.displayName,
        photo_url: user?.photoURL,
        booked_at: new Date(),
      },
    };

    fetch(`https://car-rent-wheels-server.vercel.app/cars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        car.status = "booked";
        setCar({ ...car });

        if (data.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Car booked successfully!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <>
      <title>Rent Wheels - Car Details</title>

      <Container className="py-20">
        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : (
          <div className="p-5 sm:p-10 rounded-xl  bg-white shadow flex flex-col justify-start  lg:flex-row gap-8">
            <div className="relative w-full lg:w-[500px] shrink-0 h-full">
              <img
                src={car?.photo_url}
                alt={car?.car_name}
                className="w-full  h-full object-cover rounded-xl"
              />

              {car?.status === "available" ? (
                <div className="badge badge-success absolute top-2 left-2 text-white font-semibold py-4">
                  Available
                </div>
              ) : (
                <div className="badge badge-error absolute top-2 left-2 text-white font-semibold py-4">
                  Booked
                </div>
              )}
            </div>

            <div className="space-y-3 w-full flex flex-col lg:justify-center">
              <div className="flex justify-start items-center gap-x-5 gap-y-2 flex-wrap">
                <h3 className="font-semibold text-xl capitalize">
                  {car?.car_name}
                </h3>

                <div className="badge badge-soft badge-warning text-primary text-base font-medium py-3 capitalize">
                  {car?.category}
                </div>
              </div>

              <div>
                <div className="space-y-1 flex gap-x-10 gap-y-1 flex-wrap  ">
                  <h3>
                    <span className="font-semibold">Rent Price :</span>{" "}
                    {car?.price_per_day} Tk /day
                  </h3>
                  <h3 className="capitalize">
                    <span className="font-semibold">Location : </span>
                    {car?.location}
                  </h3>
                </div>
              </div>

              <p>
                <span className="font-semibold">Description : </span>
                {car?.description}
              </p>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Provider Information
                </h3>
                <p className="mb-1 capitalize">
                  <span className="font-semibold">Name : </span>{" "}
                  {car?.provider_name}
                </p>
                <p>
                  <span className="font-semibold">Email : </span>
                  {car?.provider_email}
                </p>
              </div>

              <button
                onClick={() => handleBookBtn(car?._id)}
                disabled={car?.status !== "available"}
                className="btn border-none outline-none shadow-none hover:btn-primary hover:text-secondary btn-secondary w-[120px] mt-1"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default CarDetailsPage;
