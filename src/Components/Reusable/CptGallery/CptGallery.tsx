import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import useBreakpoints from "../../../Hooks/useBreakpoints";
import useWindowResize from "../../../Hooks/useWindowsResize";
import CptImageHolder from "../CptImageHolder/CptImageHolder";
import IImageGallery from "../../../Interfaces/Components/IImageGallery";
import { chunkArray } from "../../../Utils/chunkArray";

const CptGallery: React.FC = (): JSX.Element => {
  const {
    currentCelebrant: { imageGallery },
  } = useCelebrationContext();
  const { smUp, mdUp } = useBreakpoints();
  const { screenWidth } = useWindowResize();
  const [columns, setColumns] = useState(1);

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
                size={screenWidth / columns}
              />
            ))}
          </Stack>
        ))}
    </>
  );
};

export default CptGallery;
