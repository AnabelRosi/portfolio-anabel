import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  MobileStepper,
} from "@mui/material";

import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

function ProjectCarousel({ images, title }) {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  useEffect(() => {
    if (maxSteps <= 1) return;

    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 4000);

    return () => clearInterval(timer);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevStep) => (prevStep - 1 + maxSteps) % maxSteps
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box
        component="img"
        src={images[activeStep]}
        alt={`${title} - captura ${activeStep + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {maxSteps > 1 && (
        <>
          <IconButton
            onClick={handleBack}
            aria-label="Imagen anterior"
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0, 0, 0, 0.45)",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            aria-label="Imagen siguiente"
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0, 0, 0, 0.45)",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>

          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: "center",
              bgcolor: "rgba(0, 0, 0, 0.45)",
              "& .MuiMobileStepper-dot": {
                bgcolor: "rgba(255,255,255,0.5)",
              },
              "& .MuiMobileStepper-dotActive": {
                bgcolor: "white",
              },
            }}
            nextButton={null}
            backButton={null}
          />
        </>
      )}
    </Box>
  );
}

export default ProjectCarousel;