import React, { useEffect, useRef, useState } from "react";
import Container from "../Components/Container/Container";
import { useContextHook } from "../Hooks/useContextHook";

import LoadingComponent from "../Components/LoadingSpinner/LoadingComponent";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

import ModalLoading from "../Components/LoadingSpinner/ModalLoading";

const MyListingPage = () => {
  const { user } = useContextHook();
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedCar, setUpdatedCar] = useState(null);
  const [updatedId, setUpdatedId] = useState(null);
  const [error, setError] = useState(null);
  const updateModalRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    fetch(
      `https://car-rent-wheels-server.vercel.app/my-cars?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, [user?.email]);

  const handleUpdateModal = (id) => {
    updateModalRef.current.showModal();
    setLoading(true);
    fetch(`https://car-rent-wheels-server.vercel.app/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedCar(data);
        setError(null);
        setLoading(false);
      });

    setUpdatedId(id);
  };

  const handleUpdateBtn = (e) => {
    e.preventDefault();

    const car_name = e.target.car_name.value.trim();
    const category = e.target.category.value;
    const price_per_day = Number(e.target.price_per_day.value.trim());
    const photo_url = e.target.photo_url.value.trim();
    const location = e.target.location.value.trim();
    const description = e.target.description.value.trim();

    if (isNaN(price_per_day) || price_per_day <= 0) {
      setError("Invalid price.Please enter valid amount.");
      return;
    } else {
      setError(null);
    }

    const carInfo = {
      car_name,
      category,
      price_per_day,
      location,
      photo_url,
      description,
    };

    fetch(`https://car-rent-wheels-server.vercel.app/cars/${updatedId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        updateModalRef.current.close();
        if (data.modifiedCount === 1) {
          const existingCars = cars.filter((e) => e._id !== updatedId);
          const update = cars.find((e) => e._id === updatedId);
          update.car_name = car_name;
          update.category = category;
          update.price_per_day = price_per_day;
          update.location = location;
          update.description = description;
          update.photo_url = photo_url;
          setCars([update, ...existingCars]);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        if (data.modifiedCount === 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Nothing Updated",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-rent-wheels-server.vercel.app/cars/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount === 1) {
              const remainingCars = cars.filter((e) => e._id !== id);
              setCars(remainingCars);
              Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <title>Rent Wheels - My Listing</title>
      <Container>
        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : cars.length === 0 ? (
          <h3 className="text-primary font-medium text-xl sm:text-3xl py-20 text-center">
            No car available now !
          </h3>
        ) : (
          <div className="overflow-x-auto my-10 bg-white p-5 lg:p-10 rounded-xl">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Car Name</th>
                  <th>Category</th>
                  <th>Rent Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={car?._id}>
                    <td>{index + 1}</td>
                    <td className=" capitalize">{car?.car_name}</td>
                    <td className=" capitalize">{car?.category}</td>
                    <td>{car?.price_per_day} Tk</td>

                    <td
                      className={` ${
                        car?.status === "available"
                          ? "text-green-500"
                          : "text-red-500"
                      } capitalize`}
                    >
                      {car?.status}
                    </td>
                    <td className="space-x-1 space-y-1">
                      <button
                        onClick={() => handleUpdateModal(car?._id)}
                        className="btn w-[70px] h-8 text-secondary "
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(car?._id)}
                        className="btn h-8 w-[70px] text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* modal */}
        <dialog ref={updateModalRef} className="modal">
          <div className="modal-box max-h-[500px] w-11/12 max-w-[800px]">
            {loading ? (
              <ModalLoading></ModalLoading>
            ) : (
              <form onSubmit={handleUpdateBtn}>
                <h3 className=" font-semibold text-xl ">
                  Update your car details
                </h3>
                <fieldset className="fieldset">
                  <label className="label text-accent text-base font-medium mt-2">
                    Car Name
                  </label>
                  <input
                    type="text"
                    className="input shadow-none bg-gray-100 border-none outline-none "
                    placeholder="Enter Car Name..."
                    defaultValue={updatedCar?.car_name}
                    name="car_name"
                    spellCheck={false}
                    required
                  />

                  <label className="label text-accent text-base font-medium mt-2">
                    Description
                  </label>
                  <textarea
                    defaultValue={updatedCar?.description}
                    name="description"
                    placeholder="Enter Description Here..."
                    className="textarea-lg p-3 text-sm bg-gray-100 border-none outline-none min-h-[200px] resize-none "
                    spellCheck={false}
                  ></textarea>

                  {/* dropdown */}
                  <label className="label text-accent text-base font-medium mt-2">
                    Category
                  </label>
                  <select
                    defaultValue={updatedCar?.category}
                    className="select"
                    name="category"
                  >
                    <option value="defaultValue" disabled={true}>
                      Choose your Category
                    </option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="luxury">Luxury</option>
                    <option value="electric">Electric</option>
                  </select>

                  {/* rent price */}
                  <label className="label text-accent text-base font-medium mt-2">
                    Rent Price (Per day)
                  </label>

                  <input
                    defaultValue={updatedCar?.price_per_day}
                    type="text"
                    className="input shadow-none bg-gray-100 border-none outline-none "
                    placeholder="Enter Rent Price..."
                    name="price_per_day"
                    required
                  />

                  {error && <p className="text-red-500 mt-1">{error}</p>}

                  {/* location */}
                  <label className="label text-accent text-base font-medium mt-2">
                    Location
                  </label>

                  <input
                    defaultValue={updatedCar?.location}
                    type="text"
                    className="input shadow-none bg-gray-100 border-none outline-none "
                    placeholder="Enter Location..."
                    name="location"
                    spellCheck={false}
                    required
                  />

                  {/* image url */}

                  <label className="label text-accent text-base font-medium mt-2">
                    PhotoURL
                  </label>

                  <input
                    defaultValue={updatedCar?.photo_url}
                    type="text"
                    className="input shadow-none bg-gray-100 border-none outline-none "
                    placeholder="Enter PhotoURL..."
                    name="photo_url"
                    spellCheck={false}
                    required
                  />

                  {/* provider name */}
                  <label className="label text-accent text-base font-medium mt-2">
                    Provider Name
                  </label>

                  <input
                    type="text"
                    className="input shadow-none bg-gray-100 border-none outline-none "
                    defaultValue={user?.displayName}
                    name="provider_name"
                    readOnly
                  />

                  {/* provider email */}
                  <label className="label text-accent text-base font-medium mt-2">
                    Provider Email
                  </label>

                  <input
                    type="text"
                    className="input shadow-none bg-gray-100 border-none outline-none "
                    defaultValue={user?.email}
                    name="provider_email"
                    readOnly
                  />

                  <button className="btn btn-secondary hover:btn-primary hover:text-secondary outline-none border-none shadow-none mt-4 w-[150px]">
                    Update Car
                  </button>
                </fieldset>
              </form>
            )}

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </Container>
    </>
  );
};

export default MyListingPage;
