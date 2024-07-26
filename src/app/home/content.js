"use client";

import React from "react";
import Image from "next/image";
import Lien from "../../link";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Content() {
  const Img10 = "/image/vftm/sary11.jpg";
  const Img20 = "/image/vftm-actu/img19.png";
  const Img1 = `${Lien}${Img10}`;
  const Img2 = `${Lien}${Img20}`;
  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-screen-md">
        <Typography color="green" variant="h4">
          UNE PLATEFORME D&apos;ORGANISATIONS PAYSANNES
        </Typography>
        <Typography className="my-12 font-normal !text-black-500">
          VFTM a &eacute;t&eacute; cr&eacute;&eacute; en 2006, Compos&eacute;e
          de 22 organisations paysannes de la R&eacute;gion Matsiatra Ambony,
          repr&eacute;sentant plus de 3500 paysans, sur les 7 districts et 58
          communes. seule plateforme syndicale de la R&eacute;gion Haute
          Matsiatra.
        </Typography>

        <Typography variant="h4" color="blue-gray" className="mt-8 mb-6">
          Instances
        </Typography>

        <Typography
          className="my-12 font-normal !text-black-500"
          style={{ display: "block" }}
        >
          <span>AG: 3 repr&eacute;sentants/Organisations </span>
          <br />
          <span>Conseil d&apos;administration: 15</span>
          <br />
          <span>Equipe ex&eacute;cutives: 07 techniciens </span>
          <br />
          <span>Comit&eacute; de surveillance: 02 &eacute;lus</span>
          <br />
          <span>
            {" "}
            Les comptes sont soumis chaque ann&eacute;e a un audit externe
          </span>
        </Typography>
        <Image
          width={768}
          height={500}
          src={Img1.src}
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography variant="small" className="font-normal !text-black-500">
          Photo by Justin
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            Unsplash
          </a>
        </Typography>

        <Typography className="my-12 font-normal !text-black-500">
          VFTM
          <br />
          <br />
        </Typography>

        <Typography variant="h4" color="green" className="mt-8 mb-6">
          VISION
        </Typography>

        <Typography className="my-10 font-normal !text-black-500">
          D&eacute;fendre l&apos;int&eacute;rêt commun des paysans, et surtout
          l&apos;agriculture familiale.
          <br />
          Am&eacute;lioration des revenus des EAF, et faire vivre &agrave; leur
          m&eacute;tier paysanne.
          <br />
          Autonomisation de l&apos;organisation en terme de gestion et
          financi&egrave;re.
          <br />
        </Typography>
        <div className="!border-b  border-blue-gray-100 mb-6">
          <Card shadow={false} className="p-0">
            <CardBody className="p-0 pb-5">
              <div className="w-full mb-4 h-[500px] ">
                <Image
                  width={768}
                  height={768}
                  // src="/image/vftm-actu/img19.png"
                  src={Img2.src}
                  className="md:w-full object-cover h-full rounded-lg"
                  alt=""
                />
              </div>
              <Typography className="!font-bold !text-sm text-gray-700">
                by Justin
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Content;
