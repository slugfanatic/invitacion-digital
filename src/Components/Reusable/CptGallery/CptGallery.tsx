import { Stack, Theme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import CptImageHolder from "../CptImageHolder/CptImageHolder";
import IImageGallery from "../../../Interfaces/Components/IImageGallery";
import { chunkArray } from "../../../Utils/chunkArray";

const CptGallery: React.FC = (): JSX.Element => {
  const {
    currentCelebrant: { imageGallery },
  } = useCelebrationContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(1);

  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  const actualizarAnchoNavegador = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualizarAnchoNavegador);

    return () => {
      window.removeEventListener("resize", actualizarAnchoNavegador);
    };
  }, []);

  const groupedImages = chunkArray(imageGallery, columns);

  useEffect(() => {
    if (mdUp) {
      setColumns(4);
    } else if (smUp) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  }, [mdUp, smUp]);

  return (
    <>
      {groupedImages &&
        groupedImages.map((group, index) => (
          <Stack key={index} direction="row" spacing={0}>
            {group.map((image: IImageGallery, idx: number) => (
              <CptImageHolder
                key={idx}
                imageUrl={image.url}
                size={windowWidth / columns}
              />
            ))}
          </Stack>
        ))}
    </>
  );
};

export default CptGallery;
