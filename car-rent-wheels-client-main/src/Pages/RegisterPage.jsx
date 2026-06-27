import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Container from "../Components/Container/Container";
import { useContextHook } from "../Hooks/useContextHook";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
  const {
    user,
    googleLogin,
    createEmailPasswordUser,
    setLoading,
    updateUserProfile,
  } = useContextHook();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location?.state : "/");
      return;
    }
  }, [location?.state, navigate, user]);

  //   create email password user
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim().toUpperCase();
    const email = e.target.email.value;
    const photo = e.target.photo.value.trim();
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
      );
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Password !",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setError(null);
    }

    const updatedInfo = { displayName: name, photoURL: photo };

    createEmailPasswordUser(email, password)
      .then(() => {
        updateUserProfile(updatedInfo)
          .then(() => {
            e.target.reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You have create account successfully.",
              showConfirmButton: false,
              timer: 2000,
            });

            setLoading(false);
          })
          .catch((error) => {
            console.error(error.code);
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${error.code}`,
              showConfirmButton: false,
              timer: 2000,
            });
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error(error.code);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.code}`,
          showConfirmButton: false,
          timer: 2000,
        });
        setLoading(false);
      });
  };

  // google log in
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged in successfully.",
          showConfirmButton: false,
          timer: 2000,
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.code}`,
          showConfirmButton: false,
          timer: 2000,
        });
        setLoading(false);
      });
  };

  return (
    <>
      <title>Rent Wheels - Register</title>

      <Container className="grid place-items-center py-20">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl  sm:px-6">
          <div className="card-body">
            <h1 className="text-3xl text-center font-semibold">
              Register here
            </h1>
            <form onSubmit={handleCreateUser}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label text-accent text-base font-medium mt-2">
                  Name
                </label>
                <input
                  type="text"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Name"
                  name="name"
                  spellCheck={false}
                  required
                />
                {/* email */}
                <label className="label text-accent text-base font-medium mt-2">
                  Email
                </label>
                <input
                  type="email"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="Email"
                  name="email"
                  required
                />

                {/* photoURL */}
                <label className="label text-accent text-base font-medium mt-2">
                  PhotoURL
                </label>
                <input
                  type="text"
                  className="input shadow-none bg-gray-100 border-none outline-none w-full"
                  placeholder="PhotoURL"
                  name="photo"
                  required
                />

                {/* password */}
                <label className="label text-accent text-base font-medium mt-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input shadow-none bg-gray-100 border-none outline-none w-full"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-3 text-xl cursor-pointer z-30"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>

                {error && <p className="text-red-500 mt-1">{error}</p>}

                <button className="btn btn-secondary hover:btn-primary hover:text-secondary outline-none border-none shadow-none mt-4">
                  Register
                </button>
              </fieldset>
            </form>

            <p className="text-center">Or</p>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-center mt-2">
              Already have an account? Please{" "}
              <Link className="text-blue-700 hover:underline" to="/login">
                {" "}
                Log in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
