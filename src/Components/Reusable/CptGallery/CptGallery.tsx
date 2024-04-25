import { Stack } from "@mui/material";
import CptImageHolder from "../CptImageHolder/CptImageHolder";
import { useEffect, useState } from "react";

const CptGallery: React.FC = (): JSX.Element => {
  const [ancho, setAncho] = useState(window.innerWidth);
  const [size, setSize] = useState(0);

  const actualizarAnchoNavegador = () => {
    console.log(window.innerWidth);
    setAncho(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualizarAnchoNavegador);

    return () => {
      window.removeEventListener("resize", actualizarAnchoNavegador);
    };
  }, []);

  useEffect(() => {
    if (ancho && ancho > 0) {
      setSize(ancho / 4);
    }
  }, [ancho]);

  const images = [
    {
      src: require("../../../assets/images/castillo.jpeg"),
    },
    {
      src: require("../../../assets/images/pastel_3.jpg"),
    },
    {
      src: require("../../../assets/images/nubesycielo.jpg"),
    },
    {
      src: require("../../../assets/images/mesa.jpeg"),
    },
  ];

  return (
    <Stack direction="row" spacing={0}>
      {images &&
        images.map((image, index) => (
          <CptImageHolder key={index} imageUrl={image.src} size={size} />
        ))}
    </Stack>
  );
};

export default CptGallery;
