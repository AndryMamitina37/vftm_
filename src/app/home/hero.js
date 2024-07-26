"use client";
import Lien from "../../link";
import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  const imagePath = "/image/vftm/sary13.png";
  const HomeImage = `${Lien}${imagePath}`;
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="relative min-h-screen w-full  bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full " />
        <div className="grid min-h-screen px-8">
          <div
            className="container relative z-10 my-auto mx-auto grid place-items-center text-center"
            style={{ paddingTop: "30px" }}
          >
            <Typography variant="h3" color="white">
              GROUPEMENT POUR LE DÉVELOPPEMENT DES PAYSANS DE HAUTE-MATSIATRA
            </Typography>
            <Typography
              variant="lead"
              color="green"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "10px",
              }}
              className="mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl"
            >
              Paysans professionnels : nourrir sa famille et vivre de son métier
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-1 mb-7 font-medium uppercase"
            >
              Contactez sur:
            </Typography>
            <div className="gap-8 flex">
              <IconButton variant="text" color="white" size="sm">
                <i className="fa-brands fa-twitter text-base" />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
