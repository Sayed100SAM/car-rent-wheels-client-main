import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import { useContextHook } from "../Hooks/useContextHook";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const AddCarPage = () => {
  const { user } = useContextHook();
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleAddCar = (e) => {
    e.preventDefault();
    const car_name = e.target.car_name.value.trim();
    const category = e.target.category.value;
    const price_per_day = Number(e.target.price_per_day.value.trim());
    const photo_url = e.target.photo_url.value.trim();
    const location = e.target.location.value.trim();
    const description = e.target.description.value.trim();
    const provider_name = user?.displayName;
    const provider_email = user?.email;

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
      provider_name,
      provider_email,
      status: "available",
      create_at: new Date(),
    };

    fetch("https://car-rent-wheels-server.vercel.app/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New car added successfully.",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
        }
      });
  };

  return (
    <>
      <title>Rent Wheels - Add Car</title>

      <Container className="pb-16 pt-10">
        <form
          onSubmit={handleAddCar}
          className="max-w-[800px] mx-auto bg-white p-5 sm:p-10 rounded-2xl shadow-lg"
        >
          <h3 className=" font-semibold text-xl">
            {" "}
            Fill in the Required Information
          </h3>
          <fieldset className="fieldset">
            <label className="label text-accent text-base font-medium mt-2">
              Car Name
            </label>
            <input
              type="text"
              className="input shadow-none bg-gray-100 border-none outline-none "
              placeholder="Enter Car Name..."
              name="car_name"
              spellCheck={false}
              required
            />

            {/* description */}

            <label className="label text-accent text-base font-medium mt-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter Description Here..."
              className="textarea-lg p-3 text-sm bg-gray-100 border-none outline-none min-h-[200px] resize-none "
              spellCheck={false}
              required
            ></textarea>

            {/* dropdown */}
            <label className="label text-accent text-base font-medium mt-2">
              Category
            </label>
            <select
              defaultValue="defaultValue"
              className="select"
              name="category"
              required
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
              value={user?.displayName}
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
              value={user?.email}
              name="provider_email"
              readOnly
            />

            <button className="btn btn-secondary hover:btn-primary hover:text-secondary outline-none border-none shadow-none mt-4 w-[150px]">
              Add Car
            </button>
          </fieldset>
        </form>
      </Container>
    </>
  );
};

export default AddCarPage;
