import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Box,
  Collapse,
  FormControlLabel,
  Switch,
} from "@mui/material";
import "./Sobre.css"; // Archivo CSS para estilos y animaciones

const icon = (
  <Paper
    sx={{ m: 10, width: 400, height: 400, backgroundColor: "red" }}
    elevation={4}
  >
    <svg width={100} height={50}>
      {/* Degradado de grises */}
      <defs>
        <linearGradient id="grad" x1="100%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ddd", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Borde del polígono con bordes redondeados */}
      <polygon
        points="0,30 50,50 100,30 100,0 0,0"
        fill="url(#grad)"
        strokeWidth="0"
        rx="10" // Radio de esquinas redondeadas en el eje x
        ry="10" // Radio de esquinas redondeadas en el eje y
      />
    </svg>
  </Paper>

  // {/* Rectángulo transparente */}
  // <rect
  // x="0"
  // y="0"
  // width="100%"
  // height="100%"
  // //fill="transparent"
  // mask="url(#mask)"
  // />
);

const PruebaSobre: React.FC = () => {
  const [abierto, setAbierto] = useState(false);

  const toggleAbierto = () => {
    setAbierto(!abierto);
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {/* <div className="sobre-container">
        <div className={`sobre ${abierto ? "abierto" : ""}`}>
          <div className="sobre-contenido">
            <Typography variant="h6">Contenido del Sobre</Typography>
            {abierto && <Typography>¡Sorpresa!</Typography>}
          </div>
          <div className="sobre-tapa"></div>
        </div>
        <Button onClick={toggleAbierto}>
          {abierto ? "Cerrar Sobre" : "Abrir Sobre"}
        </Button>
      </div> */}
      <Box sx={{ height: 800 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box
          sx={{
            "& > :not(style)": {
              display: "flex",
              justifyContent: "space-around",
              height: 400,
              width: 400,
            },
          }}
        >
          <div>
            <Collapse in={checked}>{icon}</Collapse>
            <Collapse in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </div>
          <div>
            <Box sx={{ width: "50%" }}>
              <Collapse orientation="horizontal" in={checked}>
                {icon}
              </Collapse>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Collapse
                orientation="horizontal"
                in={checked}
                collapsedSize={40}
              >
                {icon}
              </Collapse>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default PruebaSobre;
