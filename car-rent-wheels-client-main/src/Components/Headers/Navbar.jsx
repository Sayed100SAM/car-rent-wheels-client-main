import Container from "../Container/Container";
import { Link } from "react-router";
import MyLink from "./MyLink";
import { useContextHook } from "../../Hooks/useContextHook";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, setUser, loading, setLoading, signOutUser } = useContextHook();

  const link = (
    <>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/add-car">Add Car</MyLink>
      <MyLink to="/my-listings">My Listings</MyLink>
      <MyLink to="/my-bookings">My Bookings</MyLink>
      <MyLink to="/browse-cars">Browse Cars</MyLink>
    </>
  );

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged out successfully.",
          showConfirmButton: false,
          timer: 2000,
        });
        setLoading(false);
        setUser(null);
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

  return (
    <div className="bg-base-100 shadow-sm w-full max-w-[1400px]  h-auto mx-auto fixed z-100 top-0">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-2 sm:mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:h-7 sm:w-7 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFB51D"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="font-semibold text-xl sm:text-2xl whitespace-nowrap"
          >
            <span className="text-primary">Rent</span>{" "}
            <span className="text-secondary">Wheels</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                {loading ? (
                  <div className="skeleton w-12 h-12 rounded-full"></div>
                ) : (
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 cursor-pointer"
                  />
                )}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content  bg-gray-600 text-white space-y-2.5 rounded-box z-200 min-w-52 p-3 shadow-sm"
              >
                <li className="text-nowrap text-sm capitalize">{user?.displayName}</li>
                <li className="text-nowrap text-sm">{user?.email}</li>
                <li>
                  <Link>
                    {" "}
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-primary text-secondary rounded-full outline-none border-none shadow-none hover:btn-secondary hover:text-white"
                    >
                      Log out
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              {loading ? (
                <div className="skeleton rounded-full w-18 h-10"></div>
              ) : (
                <button className="btn btn-primary text-secondary rounded-full outline-none border-none shadow-none hover:btn-secondary hover:text-white">
                  Log in
                </button>
              )}
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
