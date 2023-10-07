import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((current) => !current);
  };

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
            <Link href="/" title="NDev.fr">
              <Image
                src="/logo.png"
                alt="NDev.fr Logo"
                width="102"
                height="30"
                style={{ width: 102, height: 30, margin: "12px 0" }}
                priority
              />
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
              <li className={clsx("m-2 font-semibold text-center")}>
                <Link href="/#welcome">
                  <span
                    className={clsx(
                      "relative inline-block p-1",
                      "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                      "dark:hover:bg-whiteD dark:hover:text-navbarD"
                    )}
                  >
                    <span className={clsx("relative")}>À propos</span>
                  </span>
                </Link>
              </li>
              <li className={clsx("m-2 font-semibold text-center")}>
                <Link href="/#projects">
                  <span
                    className={clsx(
                      "relative inline-block p-1",
                      "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                      "dark:hover:bg-whiteD dark:hover:text-navbarD"
                    )}
                  >
                    <span className="relative">Réalisations</span>
                  </span>
                </Link>
              </li>
              <li className={clsx("m-2 font-semibold text-center")}>
                <Link href="/#contacts">
                  <span
                    className={clsx(
                      "relative inline-block p-1",
                      "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded",
                      "dark:hover:bg-whiteD dark:hover:text-navbarD"
                    )}
                  >
                    <span className={clsx("relative")}>Contacts</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavbarMy = () => {
  return (
    <section className={clsx("bg-navbarL text-white border-b-3 border-black")}>
      <div className={clsx("container mx-auto overflow-hidden")}>
        <div className={clsx("flex items-center justify-between py-2")}>
          <div className={clsx("w-auto")}>
            <div className={clsx("flex flex-wrap items-center")}>
              <div className={clsx("block w-auto")} style={{ width: 60 }}>
                <Link href="/" title="NDev.fr">
                  <Image
                    src="/logo.png"
                    alt="NDev.fr Logo"
                    width="102"
                    height="30"
                    style={{ width: 102, height: 30, margin: "12px 0" }}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className={clsx(
              "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg",
              "md:hidden",
              "hover:bg-gray-100",
              "focus:outline-none focus:ring-2 focus:ring-gray-200",
              "dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            )}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className={clsx("sr-only")}>Open main menu</span>
            <svg
              className={clsx("w-6 h-6")}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="navbar-default"
            className={clsx("hidden w-full", "md:block md:w-auto")}
          >
            <div className={clsx("flex flex-wrap items-center")}>
              <div className={clsx("w-auto")}>
                <ul
                  className={clsx(
                    "flex items-center text-xs",
                    "xs:text-base",
                    "sm:text-lg",
                    "md:text-xl"
                  )}
                >
                  <li className={clsx("m-2 font-semibold")}>
                    <Link href="/#welcome">
                      <span
                        className={clsx(
                          "relative inline-block p-1",
                          "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded"
                        )}
                      >
                        <span className={clsx("relative")}>À propos</span>
                      </span>
                    </Link>
                  </li>
                  <li className={clsx("m-2 font-semibold")}>
                    <Link href="/#projects">
                      <span
                        className={clsx(
                          "relative inline-block p-1",
                          "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded"
                        )}
                      >
                        <span className="relative">Réalisations</span>
                      </span>
                    </Link>
                  </li>
                  <li className="m-2 font-semibold">
                    <Link href="/#contacts">
                      <span
                        className={clsx(
                          "relative inline-block p-1",
                          "hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbarL hover:before:rounded"
                        )}
                      >
                        <span className={clsx("relative")}>Contacts</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
