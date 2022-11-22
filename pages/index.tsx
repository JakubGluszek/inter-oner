import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { GiAutoRepair, GiElectric } from "react-icons/gi";
import { useViewportSize } from "@mantine/hooks";
import clsx from "clsx";

import "swiper/css";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import Layout from "../components/Layout";
// @ts-ignore
import HeroImage from "../assets/inter-oner-hero.JPG";
import WheelIcon from "../components/icons/WheelIcon";
import AirConIcon from "../components/icons/AirConIcon";
import { reviews } from "../data";
import ContactView from "../components/ContactView";
import Link from "next/link";
import Head from "next/head";
import { useInView } from "framer-motion";

const Home: React.FC = () => {
  const servicesRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <React.Fragment>
      <Head>
        <title>Inter-Oner</title>
      </Head>

      <Layout header={{ position: "fixed", transparent: true }}>
        <HeroSection servicesRef={servicesRef} />
        <div className="wrapper py-8">
          <ServicesSection servicesRef={servicesRef} />
          <ReviewsSection />
          <div className="py-8">
            <ContactView />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

interface ServicesSectionProps {
  servicesRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesRef }) => {
  const sectionInView = useInView(servicesRef, { once: true });

  return (
    <section
      className="flex flex-col items-center gap-8 py-8"
      ref={servicesRef}
      style={{
        transform: sectionInView ? "scale(100%)" : "scale(80%)",
        opacity: sectionInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <h2>Oferowane przez nas usługi</h2>
      <div className="w-full flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row gap-12">
          <Service
            Icon={<GiElectric size={80} />}
            title="Elektronika"
            id="elektronika"
          />
          <Service
            Icon={<GiAutoRepair size={80} />}
            title="Mechanika"
            id="mechanika"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-12">
          <Service
            Icon={
              <div className="w-20 h-20">
                <WheelIcon />
              </div>
            }
            title="Geometria kół"
            id="geometria-kol"
          />
          <Service
            Icon={
              <div className="w-20 h-20">
                <AirConIcon />
              </div>
            }
            title="Serwis klimatyzacji"
            id="serwis-klimatyzacji"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  Icon: React.ReactNode;
  title: string;
  id: string;
}

// TODO: Pass in id for page /#id

const Service: React.FC<ServiceProps> = ({ Icon, title, id }) => {
  return (
    <Tilt className="w-full" tiltMaxAngleX={12} tiltMaxAngleY={12}>
      <div className="w-full h-fit bg-white rounded shadow-2xl p-4 md:p-8 flex flex-col items-end gap-6">
        <div className="w-full flex flex-row items-center justify-between gap-2">
          <h3>{title}</h3>
          {Icon}
        </div>
        <Link href={`/uslugi#${id}`} className="btn text-white">
          DOWIEDZ SIĘ WIĘCEJ
        </Link>
      </div>
    </Tilt>
  );
};

const ReviewsSection = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const { width } = useViewportSize();

  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <section
      ref={section}
      style={{
        opacity: sectionInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <SwiperComponent
        autoplay
        slidesPerView={width <= 1024 ? 1 : 2}
        modules={[Pagination, Autoplay]}
        centeredSlides
        spaceBetween={32}
        onSlideChange={(a) => setSlideIndex(a.activeIndex)}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.username} className="my-10">
            <Review {...review} selected={slideIndex === index} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </section>
  );
};

interface ReviewProps {
  username: string;
  avatarSrc: string;
  timeAgo: string;
  rating: number;
  body: string;
  selected: boolean;
}

const Review: React.FC<ReviewProps> = ({
  username,
  avatarSrc,
  timeAgo,
  rating,
  body,
  selected,
}) => {
  return (
    <div
      className={clsx(
        "container flex flex-col w-full min-h-[16rem] h-fit max-w-lg p-6 mx-auto divide-y rounded-md bg-white divide-gray-300 transition-shadow",
        selected && "shadow-xl"
      )}
    >
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <Image
              src={avatarSrc}
              alt={`${username}'s review`}
              width={64}
              height={64}
            />
          </div>
          <div>
            <h4 className="font-bold">{username}</h4>
            <span className="text-xs">{timeAgo}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current"
          >
            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
          </svg>
          <span className="text-xl font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm grow flex">
        <blockquote className="grow flex items-center justify-center text-center">
          {`"${body}"`}
        </blockquote>
      </div>
    </div>
  );
};

interface HeroSectionProps {
  servicesRef: React.MutableRefObject<HTMLDivElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ servicesRef }) => {
  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  const onReadMore = () => {
    servicesRef.current &&
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return (
    <section ref={section} className="relative h-screen">
      <Image
        src={HeroImage}
        alt="Preview of Inter-Oner"
        className="block w-full h-full object-cover object-[10%]"
      />
      <div className="z-10 absolute top-0 w-full h-full flex flex-col items-center justify-center gap-12 bg-main/80 text-window tracking-wider text-large sm:text-xl text-center p-4 bg-gradient-to-t from-primary/20">
        <h1
          style={{
            transform: sectionInView ? "none" : "translateY(100px)",
            opacity: sectionInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          Serwis pogwarancyjny samochodów
        </h1>
        <main
          style={{
            transform: sectionInView ? "none" : "translateY(100px)",
            opacity: sectionInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          }}
          className="flex flex-col gap-4"
        >
          <p>
            Jedną z podstawowych specjalizacji naszej firmy jest naprawa
            elektroniki i elektryki samochodowej.
          </p>
          <p>
            Oferujemy diagnostykę i naprawę systemów elektroniki motoryzacyjnej.
          </p>
        </main>
        <button
          style={{
            transform: sectionInView ? "none" : "translateY(100px)",
            opacity: sectionInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s",
          }}
          className="btn btn-xl"
          onClick={() => onReadMore()}
        >
          Czytaj więcej
        </button>
      </div>
    </section>
  );
};

export default Home;
