import { Link } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaSignInAlt,
  FaHome,
  FaSearchLocation,
  FaExclamation,
  FaPhoneAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaRegSun,
  FaBars,
} from "react-icons/fa";

export default function Header() {
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header"); // Ganti 'header' dengan ID elemen header Anda

    if (window.pageYOffset > 100) {
      header.classList.add("fixed");
      header.style.animation = "header 1s ease-in-out";
    } else {
      header.style.animation = "none";
      header.classList.remove("fixed");
    }
  });

  return (
    <header
      id="header"
      className="bg-base-200/80 z-50 w-full backdrop:blur-xl sm:p-2"
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FaBars className="text-xl" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 w-72 sm:w-96 rounded-none overflow-x-hidden"
            >
              <div className="p-2 mx-auto w-full flex justify-center">
                <Link to="/" className="normal-case text-xl">
                  WIS
                  <span className="text-primary p-1 rounded bg-white ml-1">
                    MAPA
                  </span>
                </Link>
              </div>
              <div className="main-menu px-4 leading-loose">
                <li>
                  <Link to={"/home"} className="p-2 my-2 w-52">
                    <FaHome />
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to={"/destination"} className="p-2 my-2 w-52">
                    <FaSearchLocation />
                    <a
                      href="https://www.pexels.com/id-id/video/laut-pegunungan-pantai-samudra-15052973/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Destinasi Wisata
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="p-2 my-2 w-52">
                    <FaExclamation />
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="p-2 my-2 w-52">
                    <FaPhoneAlt />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} className="p-2 my-2 w-52">
                    <FaSignInAlt />
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} className="p-2 my-2 w-52">
                    <FaUserPlus />
                    Register
                  </Link>
                </li>
                <div className="form-control rounded-lg bg-base-100 block">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input bg-transparent w-52"
                    />
                    <button className="btn btn-square bg-base-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 mb-5 w-full">
                  <li className="">
                    <Link
                      to={"/logout"}
                      className="p-2 my-2 w-52 mx-auto px-20 bg-red-600 text-white"
                    >
                      <FaSignOutAlt />
                      Logout
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={"/setting"}
                      className="p-2 my-2 w-52 mx-auto px-20 bg-blue-600 text-white"
                    >
                      <FaRegSun />
                      Setting
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="normal-case text-xl">
            <span className="bg-secondary p-1 rounded text-white mr-1">
              WIS
            </span>
            <span className="text-primary">MAPA</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="form-control hidden rounded-lg bg-base-100 lg:block">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input bg-transparent"
              />
              <button className="btn btn-square bg-base-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              const html = document.querySelector("html");
              const iconModeLigth = document.querySelector("#icon-mode-light");
              const iconModeDark = document.querySelector("#icon-mode-dark");
              let currentTheme = html.dataset.theme;

              if (currentTheme === "dark") {
                html.dataset.theme = "light";
                iconModeLigth.classList.replace("block", "hidden");
                iconModeDark.classList.replace("hidden", "block");
              } else {
                html.dataset.theme = "dark";
                iconModeDark.classList.replace("block", "hidden");
                iconModeLigth.classList.replace("hidden", "block");
              }
            }}
          >
            <FaSun id="icon-mode-light" className="block" />
            <FaMoon id="icon-mode-dark" className="hidden" />
          </button>
          <Link to="/login" className="btn btn-ghost btn-circle">
            <FaSignInAlt />
          </Link>
        </div>
      </div>
    </header>
  );
}
