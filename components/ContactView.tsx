import { useInView } from "framer-motion";
import Link from "next/link";
import React from "react";

const ContactView: React.FC = () => {
  const section = React.useRef<HTMLElement | null>(null);
  const sectionInView = useInView(section, { once: true });

  return (
    <section
      ref={section}
      style={{
        transform: sectionInView ? "scale(100%)" : "scale(80%)",
        opacity: sectionInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      className="mx-auto w-full flex flex-col items-center gap-8 text-lg md:text-xl lg:text-2xl p-8 bg-main text-window rounded shadow-lg"
    >
      <div className="text-center">
        <p>Jeżeli spełniamy twoje oczekiwania,</p>
        <p>nie czekaj - umów się na wizytę!</p>
      </div>
      <Link href="/kontakt" className="btn sm:btn-xl">
        Kontakt
      </Link>
    </section>
  );
};

export default ContactView;
