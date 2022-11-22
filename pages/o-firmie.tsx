import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useViewportSize } from "@mantine/hooks";

import "swiper/css";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy, Pagination } from "swiper";

import Layout from "../components/Layout";

// @ts-ignore
import ZewnatrzImage0 from "../assets/o-firmie-zewnatrz-0.JPG";
// @ts-ignore
import ZewnatrzImage1 from "../assets/o-firmie-zewnatrz-1.JPG";
// @ts-ignore
import ZewnatrzImage2 from "../assets/o-firmie-zewnatrz-2.JPG";
import { useInView } from "framer-motion";

const OFirmie: React.FC = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const { width } = useViewportSize();

  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <React.Fragment>
      <Head>
        <title>O firmie - Inter-Oner</title>
      </Head>

      <Layout header={{ position: "sticky", transparent: false }}>
        <section
          ref={section}
          style={{
            opacity: sectionInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="grow flex flex-col gap-8 px-4"
        >
          <main className="text-center font-light text-lg lg:text-xl tracking-wide leading-8 pt-8">
            <p>Firma Inter-Oner Z. Szuszkiewicz istnieje na rynku od 40 lat.</p>
            <p>
              Serwis samochodowy jest wyposażony w profesjonalne narzędzia
              diagnostyczne <br />
              oraz posiada wykwalifikowaną załogę.
            </p>
            <p>Serwis samochodowy posiada 4 stanowiska do napraw.</p>
          </main>
          <div className="grow flex mb-8">
            <SwiperComponent
              autoplay
              lazy
              preloadImages={false}
              slidesPerView={width >= 1048 ? 2 : 1}
              modules={[Pagination, Autoplay, Lazy]}
              centeredSlides
              spaceBetween={32}
              onSlideChange={(a) => setSlideIndex(a.activeIndex)}
              className="grow flex"
            >
              <SwiperSlide key={0}>
                <Image
                  loading="lazy"
                  src={ZewnatrzImage0}
                  alt="Zdjęcie serwisu Inter-oner"
                  className="block w-full h-full object-cover rounded"
                />
              </SwiperSlide>
              <SwiperSlide key={1}>
                <Image
                  loading="lazy"
                  src={ZewnatrzImage1}
                  alt="Zdjęcie serwisu Inter-oner"
                  className="block w-full h-full object-cover rounded"
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <Image
                  loading="lazy"
                  src={ZewnatrzImage2}
                  alt="Zdjęcie serwisu Inter-oner"
                  className="block w-full h-full object-cover rounded"
                />
              </SwiperSlide>
            </SwiperComponent>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default OFirmie;
