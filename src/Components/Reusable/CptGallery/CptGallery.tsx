import { useEffect, useState, useRef, useCallback } from "react";
import { Box, IconButton, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import useBreakpoints from "../../../Hooks/useBreakpoints";
import useWindowResize from "../../../Hooks/useWindowsResize";
import CptImageHolder from "../CptImageHolder/CptImageHolder";
import IImageGallery from "../../../Interfaces/Components/IImageGallery";

const CptGallery: React.FC = (): JSX.Element => {
  const {
    currentCelebrant: { imageGallery },
  } = useCelebrationContext();

  const { smUp, mdUp } = useBreakpoints();
  const { screenWidth } = useWindowResize();
  const [columns, setColumns] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Definir columnas según breakpoint
  useEffect(() => {
    if (mdUp) {
      setColumns(4);
    } else if (smUp) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  }, [mdUp, smUp]);

  // Navegación del carousel
  const nextImage = useCallback(() => {
    if (!imageGallery?.length) return;
    setCurrentIndex((prev) => (prev + 1) % imageGallery.length);
  }, [imageGallery]);

  const prevImage = useCallback(() => {
    if (!imageGallery?.length) return;
    setCurrentIndex(
      (prev) => (prev - 1 + imageGallery.length) % imageGallery.length
    );
  }, [imageGallery]);

  // Scroll automático en móvil con pausa al interactuar
  useEffect(() => {
    if (
      columns > 1 ||
      !imageGallery?.length ||
      imageGallery.length <= 1 ||
      !autoPlay
    ) {
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [columns, imageGallery, autoPlay, nextImage]);

  // Scroll visual para móvil
  useEffect(() => {
    if (containerRef.current && columns === 1) {
      containerRef.current.scrollTo({
        left: currentIndex * screenWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, screenWidth, columns]);

  // Manejar eventos de touch para swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (columns === 1) {
      setTouchStart(e.targetTouches[0].clientX);
      setAutoPlay(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (columns === 1) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (columns === 1) {
      const minSwipeDistance = 50;

      if (touchStart - touchEnd > minSwipeDistance) {
        nextImage();
      } else if (touchEnd - touchStart > minSwipeDistance) {
        prevImage();
      }

      // Reactivar autoplay después de un tiempo
      setTimeout(() => setAutoPlay(true), 5000);
    }
  };

  // Layout para desktop/tablet
  if (columns > 1) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 2,
          width: "100%",
          padding: 1,
        }}
      >
        {imageGallery?.map((image: IImageGallery, idx: number) => (
          <CptImageHolder
            key={idx}
            imageUrl={image.url}
            size="100%"
            aspectRatio="1/1"
          />
        ))}
      </Box>
    );
  }

  // Layout para móvil (carousel)
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        "&:hover .carousel-controls": {
          opacity: 1,
        },
      }}
    >
      {/* Contenedor del carousel */}
      <Box
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          width: "100%",
        }}
      >
        {imageGallery?.map((image: IImageGallery, idx: number) => (
          <Box
            key={idx}
            sx={{
              minWidth: "100%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
            }}
          >
            <CptImageHolder
              imageUrl={image.url}
              size={screenWidth - 32} // padding incluido
              aspectRatio="1/1"
            />
          </Box>
        ))}
      </Box>

      {/* Controles del carousel */}
      {imageGallery && imageGallery.length > 1 && (
        <>
          {/* Botones de navegación */}
          <IconButton
            className="carousel-controls"
            onClick={prevImage}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              opacity: 0,
              transition: "opacity 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

          <IconButton
            className="carousel-controls"
            onClick={nextImage}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              opacity: 0,
              transition: "opacity 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>

          {/* Indicadores */}
          <MobileStepper
            variant="dots"
            steps={imageGallery.length}
            position="static"
            activeStep={currentIndex}
            sx={{
              justifyContent: "center",
              backgroundColor: "transparent",
              padding: 1,
              "& .MuiMobileStepper-dot": {
                backgroundColor: "rgba(0,0,0,0.3)",
                "&.MuiMobileStepper-dotActive": {
                  backgroundColor: "primary.main",
                },
              },
            }}
            nextButton={null}
            backButton={null}
          />
        </>
      )}
    </Box>
  );
};

export default CptGallery;
