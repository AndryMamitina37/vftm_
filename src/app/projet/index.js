"use client";
import { Button } from "@material-tailwind/react";
import Pagination from "./pagination";
import Lien from "../../link";

const links = [
  { name: "Projet1", href: "#" },
  { name: "Projet2", href: "#" },
  { name: "Projet3", href: "#" },
  { name: "Projet4", href: "#" },
];

export default function Projet() {
  const Projet = "/image/vftm-actu/img16.png";
  const ProjetImage = `${Lien}${Projet}`;
  return (
    <>
      <div
        className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-screen w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${ProjetImage.src})` }}
      >
        {/* <img
        alt=""
        src="/image/projet/projet.png"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
        <div
          aria-hidden="true"
          className=" hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div
            className="mx-auto max-w-2xl lg:mx-0 "
            style={{ marginTop: "10px" }}
          >
            <h3 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              Paysans professionnels
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div
            className="backdrop-blur-sm bg-white/80"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "5px",
              padding: "0 50px 50PX 50px",
            }}
          >
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
              <div
                style={{ textAlign: "center" }}
                className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10"
              >
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>{" "}
                    <Button color="gray" variant="outlined">
                      Voir plus...
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
}
