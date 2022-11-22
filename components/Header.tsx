import React from "react";
import Link from "next/link";
import { CgDetailsLess, CgDetailsMore } from "react-icons/cg";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import clsx from "clsx";

import MechanicsIcon from "./icons/MechanicsIcon";

interface Props {
  position: "sticky" | "fixed";
  transparent: boolean;
}

const Header: React.FC<Props> = ({ position, transparent }) => {
  const [viewMore, setViewMore] = React.useState(false);

  const [scroll] = useWindowScroll();
  const { width, height } = useViewportSize();

  const headerRef = React.useRef<HTMLElement | null>(null);
  const headerHeight = headerRef.current?.clientHeight;

  const links = (
    <>
      <Link className="link" href="/uslugi">
        USŁUGI
      </Link>
      <Link className="link" href="/o-firmie">
        O FIRMIE
      </Link>
      <Link className="link" href="/kontakt">
        KONTAKT
      </Link>
    </>
  );

  return (
    <header
      ref={headerRef}
      className={clsx(
        position,
        "z-[9999] w-full text-window top-0 backdrop-blur-md",
        transparent
          ? scroll.y >= (headerHeight ? height - headerHeight : height)
            ? "bg-main/80"
            : "bg-transparent"
          : "bg-main"
      )}
    >
      <div className="wrapper">
        {/* Contact information */}
        <div className="hidden sm:flex flex-row items-center justify-between border-b border-window/20 text-xs md:text-sm lg:text-base py-1">
          <div className="flex flex-row gap-4">
            <span>(+48) 509 924 149</span>
            <span>Fax: (+48) 33 814 98 22</span>
          </div>
          <span>ul. Bolesława Prusa 10, 43-300 Bielsko-Biała</span>
        </div>
        {/* Navbar itself */}
        <div className="flex flex-row items-center justify-between py-4">
          {/* Logo */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 text-primary">
              <MechanicsIcon />
            </div>
            <Link href="/" className="font-black text-2xl">
              Inter-<span className="text-primary">Oner</span>
            </Link>
          </div>

          {/* Nav-links */}
          <div className="hidden sm:flex flex-row items-center gap-12">
            {links}
          </div>

          {/* Mobile menu */}
          <button
            className="sm:hidden flex"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? (
              <CgDetailsLess size={32} />
            ) : (
              <CgDetailsMore size={32} />
            )}
          </button>
        </div>
        {viewMore && width <= 640 && (
          <div className="flex flex-col gap-4 items-center py-4">{links}</div>
        )}
      </div>
    </header>
  );
};

export default Header;
