import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./GoogleMaps"), {
  ssr: false,
});

const Footer: React.FC = () => {
  return (
    <footer className="bg-main pt-4 md:pt-8 text-window">
      <div className="wrapper gap-4">
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
            {/* Contact Info */}
            <div
              id="kontakt"
              className="w-full lg:w-1/2 h-full p-2 flex flex-col items-center justify-evenly gap-4 rounded bg-window/5"
            >
              <span>P.P.U.H. INTER-ONER</span>
              <div className="flex flex-col gap-1 items-center text-center">
                <span>ul. Bolesława Prusa 10</span>
                <span>43-300 Bielsko-Biała</span>
              </div>
              <div className="flex flex-col gap-1 items-center text-center">
                <span>Fax: (+48) 33 814 98 22</span>
                <span>Telefon: 509 924 149</span>
                <span>e-mail: serwis@inter-oner.pl</span>
              </div>
            </div>
            {/* Open hours */}
            <div className="w-full lg:w-1/2 h-full flex p-2 rounded bg-window/5">
              <table className="w-full h-fit my-auto">
                <thead>
                  <tr>
                    <th className="pb-4">Godziny Pracy</th>
                  </tr>
                </thead>
                <tbody className="h-full flex flex-col gap-2">
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Poniedziałek</td>
                    <td className="w-1/2 text-center">09:00 - 17:00</td>
                  </tr>
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Wtorek</td>
                    <td className="w-1/2 text-center">09:00 - 17:00</td>
                  </tr>
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Środa</td>
                    <td className="w-1/2 text-center">09:00 - 17:00</td>
                  </tr>
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Czwartek</td>
                    <td className="w-1/2 text-center">09:00 - 17:00</td>
                  </tr>
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Piątek</td>
                    <td className="w-1/2 text-center">09:00 - 17:00</td>
                  </tr>
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Sobota</td>
                    <td className="w-1/2 text-center">Nieczynne</td>
                  </tr>
                  <tr className="w-full flex">
                    <td className="w-1/2 text-center">Niedziela</td>
                    <td className="w-1/2 text-center">Nieczynne</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Google Maps iFrame */}
          <div className="sm:w-1/2 lg:w-1/2 rounded overflow-clip">
            <DynamicMap />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 py-2">
          <span>Inter-oner ®2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
