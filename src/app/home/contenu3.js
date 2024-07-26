"use client";

import React from "react";
import Image from "next/image";
import Modal from "./modal/index";
import Lien from "../../link";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

export function Content() {
  const Riz1 = "/image/filiere/riz-epis.jpg";
  const lait1 = "/image/filiere/lait.jpg";
  const apiculture1 = "/image/filiere/Apiculture.png";
  const viticulture1 = "/image/filiere/viticulture.jpg";
  const maraichere1 = "/image/filiere/maraichere.jpg";
  const huilleEssentielle1 = "/image/filiere/huilleEssentielle.jpg";
  const pisciculture1 = "/image/filiere/pisciculture.jpg";
  const Vannerie1 = "/image/filiere/vannerie.jpg";
  const Filiere1 = "/image/filiere/filiere.jpg";

  const Riz = `${Lien}${Riz1}`;
  const Lait = `${Lien}${lait1}`;
  const Apiculture = `${Lien}${apiculture1}`;
  const Viticulture = `${Lien}${viticulture1}`;
  const Marraichere = `${Lien}${maraichere1}`;
  const huilleEssentielle = `${Lien}${huilleEssentielle1}`;
  const Pisciculture = `${Lien}${pisciculture1}`;
  const Vannerie = `${Lien}${Vannerie1}`;
  const Filiere = `${Lien}${Filiere1}`;

  const [isOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalIntroduction, setModalIntroduction] = React.useState("");
  const [modalImageSrc, setModalImageSrc] = React.useState("");
  const openModal = (title, introduction, image) => {
    setModalTitle(title);
    setModalIntroduction(introduction);
    setModalImageSrc(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalIntroduction("");
    setModalImageSrc("");
    setModalTitle("");
  };

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col px-4 py-20">
      <Modal
        isOpen={isOpen}
        title={modalTitle}
        introduction={modalIntroduction}
        image={modalImageSrc}
        onClose={() => closeModal()}
      />
      <Typography
        variant="h3"
        className="text-center"
        color="green"
        style={{ marginBottom: "20px" }}
      >
        Nos Fili&egrave;res
      </Typography>

      <div
        className="relative   bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${Filiere.src})`,
        }}
      >
        <div
          // className="backdrop-blur-sm bg-white/2"
          style={{ height: "100%", padding: "5px" }}
        >
          <Typography
            variant="lead"
            className="mt-2 mb-8 w-full text-center font-normal"
            color="white"
            style={{ textShadow: "1px 2px 3px black" }}
          >
            Nous avons 8 commme fili&egrave;res
          </Typography>
        </div>
      </div>

      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Riz.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Riz
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re riz se divise en deux types principaux : le
                  riz irrigu&eacute; et le riz pluvial.
                  {/* qui est cultiv&eacute; dans des zones
                  o&ugrave; l&apos;eau est apport&eacute;e de mani&egrave;re
                  contrôl&eacute;e pour garantir des rendements
                  &eacute;lev&eacute;s. <br /> Le riz pluvial, quant &agrave;
                  lui, d&eacute;pend des pr&eacute;cipitations naturelles et est
                  g&eacute;n&eacute;ralement cultiv&eacute; dans des
                  r&eacute;gions o&ugrave; l&apos;eau de pluie est suffisante
                  pour la croissance du riz. */}
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Le Fili&egrave;re Riz",
                      "Culture du riz",
                      Riz.src
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Lait.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Laiti&egrave;re
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re laiti&egrave;re couvre l&apos;ensemble des
                  activit&eacute;s &eacute;conomiques li&eacute;es &agrave; la
                  production, la transformation et la commercialisation des
                  produits laitiers tels que le lait,le yaourt, la mozzarella et
                  le fromage.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() => openModal("Laiterie", "le lait", Lait.src)}
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Apiculture.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Apicole
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re apicole englobe toutes les activit&eacute;s
                  &eacute;conomiques li&eacute;es &agrave;
                  l&apos;&eacute;levage, des abeilles, ainsi qu&apos;&agrave; la
                  production, la transformation et la commercialisation des
                  produits de la ruche tel que le miel.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Apiculture", "Les abeilles", Apiculture.src)
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Viticulture.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Viticole
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re viticole couvre l&apos;ensemble des
                  activit&eacute;s &eacute;conomiques li&eacute;es &agrave; la
                  culture de la vigne et &agrave; la production de vin, incluant
                  la culture, la vinification et la commercialisation des
                  produits viticoles.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Viticulture", "Culture du vin", Viticulture.src)
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Pisciculture.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Piscicole
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re piscicole englobe toutes les
                  activit&eacute;s &eacute;conomiques li&eacute;es &agrave;
                  l&apos;&eacute;levage des poissons, ainsi qu&apos;&agrave; la
                  production, la transformation et la commercialisation des
                  produits piscicoles
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Pisciculture", "Les poissons", Pisciculture.src)
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={huilleEssentielle.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Huile Essentielle
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re des huiles essentielles englobe les
                  activit&eacute;s li&eacute;es &agrave; la production, la
                  transformation et la commercialisation des huiles
                  essentielles, qui sont extraites de plantes et
                  utilis&eacute;es dans divers domaines tels que les soins
                  personnels et l&apos;aromath&eacute;rapie.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Huille essentielle", "", Huille.src)
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Vannerie.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Vannerie
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re vannerie couvre toutes les activit&eacute;s
                  &eacute;conomiques li&eacute;es &agrave; la fabrication
                  d&apos;objets en osier et autres mat&eacute;riaux similaires,
                  incluant la production et la commercialisation de produits en
                  vannerie.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() => openModal("Vannerie", "", Vannerie.src)}
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src={Marraichere.src}
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Marraich&egrave;re
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  La fili&egrave;re mara&icirc;ch&egrave;re d&eacute;signe
                  l&apos;ensemble des activit&eacute;s &eacute;conomiques
                  li&eacute;es &agrave; la culture et &agrave; la
                  commercialisation des l&eacute;gumes de pommes de terre et
                  autres cultures mara&icirc;ch&egrave;res.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Culture marraichère", "", Marraichere.src)
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
