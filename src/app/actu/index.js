"use client";

import React from "react";
// import lien from "../../lien";
import lien from "../../link";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

// const api = axios.create({
//   baseURL: lien,
//   timeout: 10000,
// });
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error) {
//       console.log(error);
//     }
//     return Promise.reject(error);
//   }
// );
export function Index() {
  const Actu = "/image/vftm/img13.png";
  const sary10 = "/image/vftm/sary1.jpg";
  const sary20 = "/image/vftm/sary2.jpg";
  const sary30 = "/image/vftm/sary3.jpg";
  const sary50 = "/image/vftm/sary5.jpg";

  const ActuImage = `${lien}${Actu}`;
  const Sary1 = `${lien}${sary10}`;
  const Sary2 = `${lien}${sary20}`;
  const Sary3 = `${lien}${sary30}`;
  const Sary5 = `${lien}${sary50}`;
  // const [actualite, setactualite] = React.useState([]);

  // const getData = async () => {
  //   const response = await api.get("api/actualites/");
  //   if (response.data) {
  //     setactualite(response.data[0]);
  //     console.log(actualite);
  //   }
  // };
  // React.useEffect(() => {
  //   getData();
  // });
  const images = [
    { src: Sary1, alt: "image1" },
    { src: Sary2, alt: "image2" },
    { src: Sary3, alt: "image2" },
    { src: Sary5, alt: "image2" },
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col px-4 py-20">
      <div
        className="relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${ActuImage.src})`,
          padding: "80px 5px 5px 5px",
        }}
      >
        <Typography variant="h3" className="text-center" color="white">
          Nos Actualit&eacute;s
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mb-8 w-full text-center"
          color="white"
        >
          Stay at the forefront of the latest developments in the world, and
          captivating stories from the ever-evolving realm of biological
          sciences.
        </Typography>
      </div>

      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  Exploring the Role of Epigenetics in Inherited Traits
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar2.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  How Gut Bacteria Affect Our Health and Well-being
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Dive into the latest research on the human microbiome.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar1.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* <div>
  <BlogCardWithImage />
</div> */}
        <div className="md:border-l px-3 border-blue-gray-100">
          <div
            className="!border-b  border-blue-gray-100 mb-6"
            style={{ marginBottom: "30px" }}
          >
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-6 !text-gray-900"
                >
                  Biomimicry: Nature-Inspired Innovations
                </Typography>

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                  <Button color="white" variant="filled" onClick={prevSlide}>
                    Prev
                  </Button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                  <Button color="white" variant="filled" onClick={nextSlide}>
                    Next
                  </Button>
                </div>
                <Typography className="!font-bold !text-sm text-gray-700">
                  by Mathew Glock
                </Typography>
                <div className="mb-4 h-[149px]">
                  {images.map((image, index) => (
                    <div key={index}>
                      {index === currentIndex && (
                        <Image
                          width={768}
                          height={568}
                          src={image.src}
                          alt={image.alt}
                          layout="responsive"
                          className="w-10/12 md:w-full object-cover h-full rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  Exploring the Role of Epigenetics in Inherited Traits
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar2.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  How Gut Bacteria Affect Our Health and Well-being
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Dive into the latest research on the human microbiome.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar1.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  Exploring the Role of Epigenetics in Inherited Traits
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar2.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  How Gut Bacteria Affect Our Health and Well-being
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Dive into the latest research on the human microbiome.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar1.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* <div>
  <BlogCardWithImage />
</div> */}
        <div className="md:border-l px-3 border-blue-gray-100">
          <div
            className="!border-b  border-blue-gray-100 mb-6"
            style={{ marginBottom: "30px" }}
          >
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h4"
                  className="leading-[45px] mb-6 !text-gray-900"
                >
                  Biomimicry: Nature-Inspired Innovations
                </Typography>

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                  <Button color="white" variant="filled" onClick={prevSlide}>
                    Prev
                  </Button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                  <Button color="white" variant="filled" onClick={nextSlide}>
                    Next
                  </Button>
                </div>
                <Typography className="!font-bold !text-sm text-gray-700">
                  by Mathew Glock
                </Typography>
                <div className="mb-4 h-[149px]">
                  {images.map((image, index) => (
                    <div key={index}>
                      {index === currentIndex && (
                        <Image
                          width={768}
                          height={568}
                          src={image.src}
                          alt={image.alt}
                          layout="responsive"
                          className="w-10/12 md:w-full object-cover h-full rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
{
  /* {actualite &&
  actualite.activite_image &&
  actualite.activite_image.map((value, index) => (
    <div key={index}>
      <img
        src={`${lien}${value.photo}`}
        alt="..."
        width={400}
        height={400}
      />
    </div>
  ))} */
}
