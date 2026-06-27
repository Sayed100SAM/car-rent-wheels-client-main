import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import BookingCard from "../Components/MyBooking/BookingCard";
import { useContextHook } from "../Hooks/useContextHook";
import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";
import { useLocation } from "react-router";

const MyBookingPage = () => {
  const { user } = useContextHook();
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    fetch(
      `https://car-rent-wheels-server.vercel.app/my-bookings?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <>
      <title>Rent Wheels - My Bookings</title>
      <Container className="pt-10 pb-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold ">
          My booked Cars
        </h2>

        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : cars.length === 0 ? (
          <h3 className="text-primary font-medium text-xl sm:text-3xl  py-10 text-center">
            No cars have been booked yet.
          </h3>
        ) : (
          <div className="mt-10 flex flex-col gap-6">
            {cars.map((car) => (
              <BookingCard key={car?._id} car={car}></BookingCard>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default MyBookingPage;
