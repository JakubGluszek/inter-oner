import Link from "next/link";
import React from "react";

const ContactView: React.FC = () => {
  return (
    <div className="mx-auto w-full flex flex-col items-center gap-8 sm:text-lg md:text-xl lg:text-2xl p-8 bg-main text-window rounded shadow-lg">
      <div className="text-center">
        <p>Jeżeli spełniamy twoje oczekiwania,</p>
        <p>nie czekaj - umów się na wizytę!</p>
      </div>
      <Link href="/kontakt" className="btn sm:btn-xl">
        Kontakt
      </Link>
    </div>
  );
};

export default ContactView;
