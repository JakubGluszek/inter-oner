import React from "react";
import { useViewportSize } from "@mantine/hooks";

const GoogleMaps: React.FC = () => {
  const { width } = useViewportSize();

  return (
    <iframe
      title="Inter-oner location on Google Maps"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src="https://maps.google.com/maps?width=100%25&amp;height=420&amp;hl=en&amp;q=ul.%20B.%20Prusa%2010+(Inter-oner)+Bielsko-Biała&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      width="100%"
      height={width >= 640 ? "100%" : 320}
      onClick={() => null}
      frameBorder={0}
    />
  );
};

export default GoogleMaps;
