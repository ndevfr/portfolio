import Image from "next/image";

export const Navbar = () => {
  return (
    <section className="bg-navbar1 text-white border-b-3 border-black">
      <div className="container mx-auto overflow-hidden">
        <div className="flex items-center justify-between py-2">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="block w-auto" style={{ width: 60 }}>
                <a href="#" title="NDev.fr">
                  <Image
                    src="/logo.png"
                    alt="NDev.fr Logo"
                    width="55"
                    height="65"
                    style={{ width: 55, height: "auto" }}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <ul className="flex items-center text-xs phoneM:text-base phoneL:text-lg tablet:text-xl">
                  <li className="m-2 font-semibold">
                    <a href="#welcome">
                      <span className="relative inline-block p-1 hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbar1 hover:before:rounded">
                        <span className="relative">À propos</span>
                      </span>
                    </a>
                  </li>
                  <li className="m-2 font-semibold">
                    <a href="#projects">
                      <span className="relative inline-block p-1 hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbar1 hover:before:rounded">
                        <span className="relative">Réalisations</span>
                      </span>
                    </a>
                  </li>
                  <li className="m-2 font-semibold">
                    <a href="#contacts">
                      <span className="relative inline-block p-1 hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-white hover:text-navbar1 hover:before:rounded">
                        <span className="relative">Contacts</span>
                      </span>
                    </a>
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
