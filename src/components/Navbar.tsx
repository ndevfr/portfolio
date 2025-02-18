import { useState, useEffect, Key, use } from "react";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((current) => !current);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  const goToAnchor = (anchor: string) => {
    closeNavbar();
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  const resetAnim = () => {
    document.getElementById("logo")?.classList.add("reset");
    document.getElementById("logo")?.classList.remove("active");
    window.setTimeout(() => {
      document.getElementById("logo")?.classList.remove("reset");
      document.getElementById("logo")?.classList.add("active");
    }, 10);
  };

  useEffect(() => {
    document.getElementById("logo")?.classList.add("active");
  });

  return (
    <nav
      className={clsx(
        "absolute top-0 w-full bg-navbarL text-white border-b-3 border-black py-2 z-50",
        "dark:bg-navbarD dark:text-whiteD"
      )}
    >
      <div
        className={clsx(
          "container justify-between mx-auto overflow-hidden px-4",
          "md:items-center md:flex"
        )}
      >
        <div>
          <div
            className={clsx("flex items-center justify-between", "md:block")}
          >
            <Link href="/" title="NDev.fr" onMouseEnter={resetAnim}>
              <svg
                width="102"
                height="30"
                viewBox="0 0 405 125"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: "12px 0" }}
                id="logo"
              >
                <g>
                  <path
                    d="M85.075,19.768L85.075,125L67.537,125L19.776,40.299L19.776,125L0,125L0,0L19.776,0L65.299,79.851L65.299,0L142.537,0C155.473,0 166.387,4.975 175.28,14.925C184.173,24.876 188.682,40.734 188.806,62.5C188.682,84.266 184.173,100.124 175.28,110.075C166.387,120.025 155.473,125 142.537,125L103.731,125L103.731,105.215L103.918,105.215L103.918,35.999L123.694,35.999L123.694,105.224L142.537,105.224C150.871,104.975 157.369,100.995 162.034,93.284C166.698,85.572 169.092,75.311 169.216,62.5C169.216,48.818 166.853,38.34 162.127,31.063C157.4,23.787 150.871,20.025 142.537,19.776L85.075,19.768Z"
                    fill="white"
                  ></path>
                  <path
                    id="E"
                    d="M269.963,125L184.886,125C184.89,124.997 184.893,124.995 184.896,124.992C187.195,123.108 189.397,120.988 191.504,118.631C194.86,114.875 197.688,110.406 199.986,105.224C202.524,99.5 204.416,92.905 205.662,85.44C206.668,79.417 207.253,72.828 207.417,65.672C207.441,64.627 207.457,63.569 207.463,62.5C207.429,56.594 207.122,51.057 206.541,45.888C205.717,38.557 204.342,31.967 202.417,26.119L239.856,26.119L245.876,45.893L226.446,45.891C226.941,51.116 227.205,56.652 227.239,62.5C227.233,63.568 227.219,64.625 227.197,65.672L251.899,65.672L257.919,85.446L225.712,85.443C224.709,92.701 223.213,99.294 221.224,105.224L263.941,105.224L269.963,125Z"
                    fill="white"
                    className="svg-elem-2"
                  ></path>
                  <path
                    id="V"
                    d="M279.716,26.119L298.039,83.396L322.6,0L343.682,0L306.808,125L288.71,125L258.604,26.119L279.716,26.119Z"
                    fill="white"
                    className="svg-elem-3"
                  ></path>
                  <path
                    id="fr"
                    d="M328.769,115.113C328.769,113.761 329.022,112.479 329.529,111.268C330.036,110.057 330.74,109 331.642,108.099C332.543,107.197 333.6,106.493 334.811,105.986C336.022,105.479 337.304,105.226 338.656,105.226C340.008,105.226 341.29,105.479 342.501,105.986C343.712,106.493 344.768,107.197 345.67,108.099C346.571,109 347.275,110.057 347.782,111.268C348.289,112.479 348.543,113.761 348.543,115.113C348.543,116.465 348.289,117.747 347.782,118.958C347.275,120.169 346.571,121.225 345.67,122.127C344.768,123.028 343.712,123.732 342.501,124.239C341.29,124.746 340.008,125 338.656,125C337.304,125 336.022,124.746 334.811,124.239C333.6,123.732 332.543,123.028 331.642,122.127C330.74,121.225 330.036,120.169 329.529,118.958C329.022,117.747 328.769,116.465 328.769,115.113ZM374.824,94.409L374.824,125L359.529,125L359.529,94.409L354.036,94.409L354.036,81.649L359.529,81.649L359.529,75.142C359.529,71.536 359.867,68.663 360.543,66.522C361.106,64.719 362.008,63.043 363.247,61.494C364.486,59.945 365.937,58.607 367.599,57.48C369.261,56.353 371.05,55.48 372.965,54.86C374.881,54.241 376.768,53.931 378.627,53.931C379.923,53.931 381.12,54.072 382.218,54.353C383.317,54.635 384.43,55.029 385.556,55.536L385.556,68.888C384.542,68.381 383.599,68.001 382.725,67.747C381.852,67.494 380.937,67.367 379.979,67.367C379.359,67.367 378.726,67.466 378.078,67.663C377.43,67.86 376.824,68.269 376.261,68.888C375.697,69.508 375.317,70.395 375.12,71.55C374.923,72.705 374.824,74.268 374.824,76.24L374.824,81.649L385.556,81.649L385.556,94.409L374.824,94.409ZM391.303,81.649L406.598,81.649L406.598,88.747C408.232,86.156 410.232,84.17 412.598,82.789C414.964,81.409 417.725,80.719 420.88,80.719L422.19,80.719C422.668,80.719 423.218,80.775 423.837,80.888L423.837,95.508C421.809,94.493 419.612,93.986 417.246,93.986C413.697,93.986 411.035,95.043 409.26,97.155C407.486,99.268 406.598,102.353 406.598,106.409L406.598,125L391.303,125L391.303,81.649Z"
                    fill="white"
                    className="svg-elem-4"
                  ></path>
                </g>
              </svg>
            </Link>
            <div className={clsx("md:hidden")}>
              <button
                className={clsx(
                  "p-2 text-white rounded-md outline-none",
                  "focus:border-white focus:border",
                  "dark:text-whiteD dark:focus:border-whiteD"
                )}
                onClick={toggleNavbar}
                aria-label="Afficher/cacher le menu de navigation"
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx("w-6 h-6")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx("w-6 h-6")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={clsx(
              "flex-1 justify-self-center pb-3 mt-8",
              "md:block md:pb-0 md:mt-0",
              { block: navbar, hidden: !navbar }
            )}
          >
            <ul
              className={clsx(
                "items-center justify-center space-y-8",
                "md:flex md:space-x-6 md:space-y-0 text-xl"
              )}
            >
              <li
                className={clsx("m-2 font-semibold text-center cursor-pointer")}
                onClick={() => goToAnchor("welcome")}
              >
                <span
                  className={clsx(
                    "relative inline-block p-1",
                    "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                    "dark:hover:bg-whiteD dark:hover:text-navbarD"
                  )}
                >
                  <span className={clsx("relative")}>À propos</span>
                </span>
              </li>
              <li
                className={clsx("m-2 font-semibold text-center cursor-pointer")}
                onClick={() => goToAnchor("projects")}
              >
                <span
                  className={clsx(
                    "relative inline-block p-1",
                    "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                    "dark:hover:bg-whiteD dark:hover:text-navbarD"
                  )}
                >
                  <span className="relative">Réalisations</span>
                </span>
              </li>
              <li
                className={clsx("m-2 font-semibold text-center cursor-pointer")}
                onClick={() => goToAnchor("technologies")}
              >
                <span
                  className={clsx(
                    "relative inline-block p-1",
                    "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                    "dark:hover:bg-whiteD dark:hover:text-navbarD"
                  )}
                >
                  <span className={clsx("relative")}>Technologies</span>
                </span>
              </li>
              <li
                className={clsx("m-2 font-semibold text-center cursor-pointer")}
                onClick={() => goToAnchor("contacts")}
              >
                <span
                  className={clsx(
                    "relative inline-block p-1",
                    "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                    "dark:hover:bg-whiteD dark:hover:text-navbarD"
                  )}
                >
                  <span className={clsx("relative")}>Contacts</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
