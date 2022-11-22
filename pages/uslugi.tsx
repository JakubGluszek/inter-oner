import Image from "next/image";
import React from "react";
import { GiAutoRepair, GiElectric } from "react-icons/gi";
import { RiCheckboxCircleLine } from "react-icons/ri";

import ContactView from "../components/ContactView";
import Layout from "../components/Layout";

import RegeneracjaImage from "../assets/regeneracja-tylnego-zawieszenia.png";
import GeometriaImage from "../assets/geometria-kol.png";
import KlimatyzacjaImage from "../assets/klimatyzacja.png";

import WheelIcon from "../components/icons/WheelIcon";
import AirConIcon from "../components/icons/AirConIcon";
import Head from "next/head";
import { useInView } from "framer-motion";

const Uslugi: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Usługi - Inter-Oner</title>
      </Head>

      <Layout header={{ position: "sticky", transparent: false }}>
        <div className="wrapper lg:text-lg">
          <ElektronikaSection />
        </div>
        <div className="diagonal-box">
          <div className="wrapper lg:text-lg -skew-y-6">
            <MechanikaSection />
            <GeometriaSection />
          </div>
        </div>
        <div className="wrapper lg:text-lg">
          <KlimatyzacjaSection />
          <div className="py-8 md:py-12 px-4 md:px-8">
            <ContactView />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

const KlimatyzacjaSection: React.FC = () => {
  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <>
      <a className="anchor" id="serwis-klimatyzacji"></a>
      <section
        className="flex flex-col gap-6 px-4 py-6 md:px-8 md:py-16"
        ref={section}
        style={{
          transform: sectionInView ? "none" : "translateY(100px)",
          opacity: sectionInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="flex flex-row items-center justify-between">
          <h2>Serwis klimatyzacji</h2>
          <div className="w-20 h-20">
            <AirConIcon />
          </div>
        </div>
        <p className="text-center">
          Używamy specjalnych narzędzi do diagnozowania i naprawy układów
          klimatyzacji.
          <br />
          Zalecamy rutynowe czyszczenie pojazdu i przegląd układu klimatyzacji.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-16">
          <div className="w-full flex flex-col items-center justify-evenly gap-4 lg:gap-16">
            <ul className="w-fit flex flex-col items-center justify-evenly gap-2 text-xl">
              <li>
                <RiCheckboxCircleLine size={24} />
                Diagnoza
              </li>
              <li>
                <RiCheckboxCircleLine size={24} />
                Wycena naprawy
              </li>
              <li>
                <RiCheckboxCircleLine size={24} />
                Naprawa
              </li>
            </ul>
            <div className="w-full flex flex-col p-8 gap-8 items-center justify-center bg-white rounded shadow-lg">
              <h3>Sprawdzanie nieszczelności</h3>
              <div className="rounded px-8 py-4 bg-main text-window text-xl">
                150 zł brutto
              </div>
            </div>
            <div className="w-full flex flex-col p-8 gap-8 items-center justify-center bg-white rounded shadow-lg">
              <h3>Ozonowanie klimatyzacji</h3>
              <div className="rounded px-8 py-4 bg-main text-window text-xl">
                60 zł brutto
              </div>
            </div>
          </div>
          <div className="w-full relative rounded overflow-clip">
            <Image
              loading="lazy"
              src={KlimatyzacjaImage}
              alt="Serwis klimatyzacji"
              className="block w-full h-full object-cover object-[10%]"
            />
            <div className="z-10 absolute top-0 w-full h-full flex flex-col items-start justify-end bg-main/40 text-window p-4 bg-gradient-to-t from-primary/20"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const GeometriaSection: React.FC = () => {
  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <>
      <a className="anchor" id="geometria-kol"></a>

      <section
        className="flex flex-col gap-6 px-4 py-6 md:px-8 md:py-12"
        ref={section}
        style={{
          transform: sectionInView ? "none" : "translateY(100px)",
          opacity: sectionInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="flex flex-row items-center justify-between text-white">
          <h2>Geometria Kół</h2>
          <div className="w-20 h-20">
            <WheelIcon />
          </div>
        </div>
        <p className="font-light text-center text-white">
          Dzięki tej usłudze można zbadać i wyregulować zawieszenie samochodu,
          które ma wpływ na bezpieczeństwo i komfort jazdy.
        </p>
        <div className="relative rounded overflow-clip shadow-2xl">
          <Image
            loading="lazy"
            src={GeometriaImage}
            alt="Geometria kół"
            className="block w-full h-full object-cover object-[10%]"
          />
          <div className="z-10 absolute top-0 w-full h-full flex flex-col items-start justify-end bg-main/40 text-window p-4 bg-gradient-to-t from-primary/20">
            <div className="px-6 py-4 md:px-16 md:py-12 bg-main/80 rounded">
              <span className="md:text-xl font-semibold">150 zł brutto</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const MechanikaSection: React.FC = () => {
  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <>
      <a className="anchor" id="mechanika"></a>

      <section
        className="flex flex-col gap-6 px-4 py-6 md:px-8 md:py-16"
        ref={section}
        style={{
          transform: sectionInView ? "none" : "translateY(100px)",
          opacity: sectionInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="flex flex-row items-center justify-between text-white">
          <h2>Mechanika</h2>
          <GiAutoRepair size={80} />
        </div>
        <p className="text-center text-white font-light">
          Okresowe przeglądy i wymiana:
        </p>
        <div className="flex flex-col md:flex-row bg-white rounded shadow-lg p-4 lg:p-8">
          <ul className="w-full flex flex-col justify-evenly gap-2 text-center">
            <li>
              <RiCheckboxCircleLine size={24} />
              olejów silnikowych i przekładniczych,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              filtrów,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              kasowanie wskaźników inspekcji,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              świeć zapłonowych i żarowych, przewodów wysokiego napięcia i
              innych,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              pasków rozrządu, klinowych i wielorowkowych,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              tarcz i klocków hamulcowych,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              płynu hamulcowego,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              płynów chłodzących,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              elementów układów wydechowych,
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              elementów zawieszenia (sprężyny, wahacze, sworznie, amortyzatory),
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              elementów układów kierowniczych (drążki, końcówki drążków),
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              spawanie układów wydechowych,
            </li>
          </ul>
        </div>
        <div className="relative rounded overflow-clip shadow-2xl">
          <Image
            loading="lazy"
            src={RegeneracjaImage}
            alt="Regeneracja tylnego zawieszenia"
            className="block w-full h-full object-cover object-[10%]"
          />
          <div className="z-10 absolute top-0 w-full h-full flex flex-col items-start justify-end bg-main/40 text-window p-4 bg-gradient-to-t from-primary/20">
            <div className="px-6 py-4 md:px-16 md:py-12 bg-main/80 rounded">
              <span className="md:text-xl font-semibold" shadow-2xl>
                Regeneracja tylnego zawieszenia
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ElektronikaSection: React.FC = () => {
  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <>
      <a className="anchor" id="elektronika"></a>

      <section
        className="z-10 flex flex-col gap-6 px-4 py-16 md:px-8 md:py-36"
        ref={section}
        style={{
          transform: sectionInView ? "none" : "translateY(100px)",
          opacity: sectionInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="flex flex-row items-center justify-between">
          <h2>Elektronika</h2>
          <GiElectric size={80} />
        </div>
        <p className="text-center font-light">
          Na co dzień przeprowadzamy diagnostykę oraz naprawę urządzeń, których
          działanie opiera się na przewodach i instalacjach elektrycznych i
          modułach elektronicznych. W zakres naszych usług wchodzi między
          innymi:
        </p>
        <div className="flex flex-col md:flex-row bg-white rounded shadow-lg p-4 lg:p-8">
          <ul className="w-full flex flex-col justify-evenly gap-2 text-center">
            <li>
              <RiCheckboxCircleLine size={24} /> Naprawa alternatora,
              rozrusznika
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Diagnostyka komputerowa
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa systemów sygnalizacji
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa świateł LED
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Kontrola świeć
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa liczników
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa poduszek powietrznych
            </li>
          </ul>
          <ul className="w-full flex flex-col justify-evenly gap-2 text-center">
            <li>
              <RiCheckboxCircleLine size={24} />
              Montaż kamer i czujników parkowania
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa przewodów elektrycznych
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa sterowników DSG
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Naprawa elektroniki klimatyzacji
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Instalacji elektrycznych
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Podzespołów elektronicznych
            </li>
            <li>
              <RiCheckboxCircleLine size={24} />
              Sterowników (silnika ABS, pomp wytryskowych..)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Uslugi;
