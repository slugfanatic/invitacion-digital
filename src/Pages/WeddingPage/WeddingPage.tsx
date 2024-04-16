import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Stack, useMediaQuery } from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./WeddingPage.scss";
import {
  CptVerticalTimeline,
  CptWrapper,
  IconMapper,
} from "../../Components/Reusable";
import { PPSaveTheDate } from "../../Components/PageParts";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WeddingPage: React.FC = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const [count, setCount] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timeFormat = (time: number) => {
    let days, hours, minutes, seconds;
    [minutes, seconds] = divideFunc(time, 60);
    [hours, minutes] = divideFunc(minutes, 60);
    [days, hours] = divideFunc(hours, 24);
    setCount({ days: days, hours: hours, minutes: minutes, seconds: seconds });
  };

  const divideFunc = (num: number, den: number): number[] => {
    num = Math.floor(num);
    let coc = Math.floor(num / den);
    let resto = num % den;
    return [coc, resto];
  };

  const redirect = (url: string) => {
    window.open(url, "_blank");
  };

  const getMapComponent = (placeId: string) => {
    const url = `https://maps.app.goo.gl/${placeId}`;
    return (
      <a href={url} className="whiteText" target="_blank" rel="noreferrer">
        Ver en mapa
      </a>
    );
  };

  useEffect(() => {
    console.log("i fire once");
    let start = new Date().valueOf();
    let end = new Date("2024-06-08 13:30:00").valueOf();
    let time = Math.floor((end - start) / 1000);
    const myInterval = setInterval(() => {
      if (time > 0) {
        time--;
        timeFormat(time);
      }
    }, 1000);
    return () => clearInterval(myInterval);
  }, []);

  return (
    <CptWrapper>
      <Box component="section">
        <div className="mainBackground">
          <div className="mainContent">
            <Stack spacing={2}>
              <h1 className="capitalize whiteText shadowText">Angie y Julio</h1>
              <h2 className="whiteText shadowText">¡Nos casamos!</h2>
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="messageBackground">
          <div className="messageContent">
            <Stack spacing={2}>
              <div className="whiteContent">
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 50 }} />
              </div>
              <h3 className="whiteText upperCase">
                Se nos ocurrió una idea loca, ¡Nos Casamos!
              </h3>
              <p className="whiteText">
                Ya son 8 años de recorrer este camino juntos, entre risas,
                aventuras y un amor que no para de crecer. Ahora, queremos dar
                el siguiente paso, y así como han estado desde el principio de
                nuestra historia, también son parte fundamental de esta
                celebración, por eso los invitamos con mucha alegría a que
                vengan a compartir este momento tan especial con nosotros. ¡Será
                un día de pura diversión y amor! Nos vemos pronto,y ¡Prepárense
                para bailar hasta que el cuerpo aguante!
              </p>
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="saveTheDateBackground">
          <div className="saveTheDateContent">
            <Stack spacing={2}>
              <h1 className="whiteText shadowText">Save the Date</h1>
              <h3 className="whiteText upperCase">8 Junio 2024</h3>
              <PPSaveTheDate />
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="placeBackground">
          <div className="placeContent">
            <Stack spacing={2}>
              <h2 className="whiteText">CEREMONIA RELIGIOSA | RECEPCIÓN</h2>
              <h3 className="whiteText">8 de Junio</h3>
              <h3 className="whiteText">1:30 PM</h3>
              <h3 className="whiteText">Jardín Vandú</h3>
              <h2 className="whiteText">DIRECCIÓN</h2>
              <h3 className="whiteText">
                Rosales s/n, Atlacomulco, 62560 Jiutepec, Morelos.
              </h3>
              {getMapComponent("YEADbvpUVugdShZz9")}
              <iframe
                title="place"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15099.382782296027!2d-99.2054817!3d18.8939254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf6eb4b585b1%3A0x594798d78b451eac!2zSmFyZMOtbiBWYW5kw7o!5e0!3m2!1ses-419!2smx!4v1710462177756!5m2!1ses-419!2smx"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
              <Box
                component="img"
                sx={{
                  height: 400,
                }}
                alt="The house from the offer."
                src="https://angyyjulio.com/assets/img/recepcion.jpg"
              />
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="calendarBackground">
          <div className="calendarContent">
            <Stack spacing={2}>
              <div className="whiteContent">{IconMapper("start")}</div>
              <h2 className="whiteText">Agregalo a tu Calendario</h2>
              <Grid container spacing={2}>
                <Grid xl={6} xs={12} md={6}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      redirect(
                        "https://angyyjulio.com/assets/img/20240608-ang-lica-y-julio.ics"
                      );
                    }}
                  >
                    iOS y PC
                  </Button>
                </Grid>
                <Grid xl={6} xs={12} md={6}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      redirect(
                        "https://www.google.com/calendar/render?action=TEMPLATE&text=Ang%C3%A9lica%20y%20Julio&dates=20240608T193000Z/20240608T070000Z&details=Ang%C3%A9lica%20y%20Julio%0D%0ADate%20and%20Time%3A%20Jun%208%2C%202024%207%3A30%20PM%20-%207%3A00%20AM%0D%0AVenue%3A%20https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FJard%25C3%25ADn%2BVand%25C3%25BA%2F%4018.8939254%2C-99.2054817%2C15z%2Fdata%3D!4m6!3m5!1s0x85cddf6eb4b585b1%3A0x594798d78b451eac!8m2!3d18.8939254!4d-99.2054817!16s%252Fg%252F11b6cb6r9v%3Fentry%3Dtts%0D%0ABoda%20de%20Ang%C3%A9lica%20y%20Julio&location=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FJard%25C3%25ADn%2BVand%25C3%25BA%2F%4018.8939254%2C-99.2054817%2C15z%2Fdata%3D!4m6!3m5!1s0x85cddf6eb4b585b1%3A0x594798d78b451eac!8m2!3d18.8939254!4d-99.2054817!16s%252Fg%252F11b6cb6r9v%3Fentry%3Dtts&trp=true&sf=true&output=xml#f"
                      );
                    }}
                  >
                    Android y Google Calendar
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="dressCodeBackground">
          <div className="dressCodeContent">
            <Stack spacing={2}>
              <h2 className="upperCase">Código de vestimenta</h2>
              <h3 className="upperCase">Semi formal</h3>
              {matches ? (
                <Grid container spacing={2}>
                  <Grid lg={3} xl={3}>
                    <div className="titles green">
                      <span>Hombres</span>
                    </div>
                  </Grid>
                  <Grid lg={3} xl={3} className="box men"></Grid>
                  <Grid lg={3} xl={3} className="box women"></Grid>
                  <Grid lg={3} xl={3}>
                    <div className="titles pink">
                      <span>MUJERES</span>
                    </div>
                  </Grid>
                </Grid>
              ) : (
                <div>Hola</div>
              )}
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="suggestionBackground">
          <div className="suggestionContent">
            <Stack spacing={2}>
              <h2 className="whiteText upperCase">Sugerencia de Hospedaje</h2>
              <Box
                component="img"
                sx={{
                  height: 400,
                }}
                alt="The house from the offer."
                src="https://angyyjulio.com/assets/img/hotels/h1.jpg"
              />
              <h2 className="whiteText upperCase">HOSTERÍA LAS QUINTAS</h2>
              <br />
              <h3 className="whiteText">Dirección</h3>
              <p className="whiteText">
                Blvd. Gustavo Díaz Ordaz 9, Cantarranas, 62448 Cuernavaca, Mor.
              </p>
              {getMapComponent("QQkZQxW3GcA7XFyr6")}
            </Stack>
          </div>
        </div>
      </Box>
      <Box component="section">
        <div className="itineraryBackground">
          <div className="itineraryContent">
            <Stack spacing={2}>
              <h2 className="upperCase">Itinerario</h2>
              <h3 className="upperCase">¡ACOMPÁÑANOS!</h3>
              <CptVerticalTimeline />
            </Stack>
          </div>
        </div>
      </Box>
    </CptWrapper>
  );
};

export default WeddingPage;
