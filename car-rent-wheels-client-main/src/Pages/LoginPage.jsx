import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useContextHook } from "../Hooks/useContextHook";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const { user, googleLogin, signInUser, setLoading } = useContextHook();
  const [showPassword, setShowPassword] = useState(false);
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

  //  email password log in
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        e.target.reset();
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

  //  google log in
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
      <title>Rent Wheels - Login</title>

      <Container className="grid place-items-center py-20">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl sm:px-6">
          <div className="card-body">
            <h1 className="text-3xl text-center font-semibold">Login now</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
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

                <button className="btn btn-secondary hover:btn-primary hover:text-secondary outline-none border-none shadow-none mt-4">
                  Log in
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
              Don't have an account? Please{" "}
              <Link className="text-blue-700 hover:underline" to="/register">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
