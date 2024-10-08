import { CelebrationInformationType } from "../Types/types";

export const bodaData = {
  wax: "redW",
  celebrantsName: "Angie y Julio",
  celebrationType: "¡Nos Casamos!",
  invitationMessage:
    "Con gran alegría, les invitamos a celebrar nuestra unión matrimonial.",
  longMessage:
    "Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso. Así comienza una nueva etapa en nuestras vidas.<br />" +
    "Desde la Universidad había algo que ya nos conectaba, desde el momento que nos dimos cuenta tuvimos una hermosa relación que fue creciendo con los años.<br />" +
    "Somos aventureros, dedicados, fuertes de carácter; los desafíos que hemos enfrentado nos han ayudado a crecer y madurar; debemos agradecer a esos retos porque con ellos nos hemos dado cuenta que juntos podemos lograr lo que nos proponemos.<br />" +
    "Tan sólo podemos decir que nuestra vida en estos momentos se encuentra completa y estamos listos para compartir el resto de nuestros días juntos.",
  celebrationDate: new Date("2024-06-08 13:30:00"),
  imageV: require("../assets/images/slide-1.jpg"),
  imageH: require("../assets/images/slide-1.jpg"),
  imageB: require("../assets/images/nubesycielo.jpg"),
  events: [
    {
      dateOrTime: "1:30 - 2:00 PM",
      title: "Recepción",
      description: "",
      iconType: "festival",
    },
    {
      dateOrTime: "2:00 - 3:00 PM",
      title: "Ceremonia",
      description: "Religiosa y Civil",
      iconType: "church",
    },
    {
      dateOrTime: "3:00 - 4:00 PM",
      title: "Cocktail",
      description: "",
      iconType: "cup",
    },
    {
      dateOrTime: "4:10 - 5:10 PM",
      title: "Banquete",
      description: "",
      iconType: "brunch",
    },
    {
      dateOrTime: "5:10 - 11:30 PM",
      title: "Fiesta",
      description: "",
      iconType: "cake",
    },
    {
      dateOrTime: "",
      title: "Tornaboda",
      description: "",
      iconType: "darkMode",
    },
  ],
} as CelebrationInformationType;

export const tresAniosData = {
  wax: "gold",
  celebrantsName: "Rafaella",
  celebrationType: "Mis Tres Años",
  invitationMessage:
    "¡Estamos emocionados de invitarlos a la fiesta de cumpleaños de nuestra pequeña Rafaella! Va a cumplir 3 años y queremos celebrarlo en grande.<br />" +
    "Habrá música, juegos y muchas sorpresas más. Además, no te pierdas nuestra deliciosa comida y pastel.",
  longMessage:
    "Mi Querida Rafaella,<br />" +
    "Hoy, mientras te escribimos esta carta, tú estás dando tus primeros pasos hacia un mundo lleno de aventuras y descubrimientos. Parece que fue ayer cuando llegaste a nuestras vidas, iluminando cada rincón con tu risa contagiosa y tus ojos curiosos que exploran el mundo que te rodea.<br />" +
    "Mañana, celebraremos tu tercer cumpleaños. Tres años de amor incondicional, de abrazos cálidos y de momentos que atesoraremos por siempre en nuestros corazones. En este día especial, queremos invitarte a una fiesta que será mucho más que una celebración. Será un recordatorio de todo lo maravilloso que eres y de lo afortunados que somos de tenerte en nuestras vidas.<br />" +
    "Te prometemos que la fiesta estará llena de alegría y diversión, con juegos que despierten tu imaginación y risas que llenen el aire. Habrá música que te haga bailar y comida deliciosa que deleitará tu paladar. Pero sobre todo, habrá amor. Mucho amor, el mismo amor que nos ha unido desde el primer día y que seguirá creciendo con cada paso que des.<br />" +
    "Queremos que sepas que este día es especial porque tú eres especial. Eres la luz que brilla en nuestros días más oscuros y la razón por la que nuestros corazones laten con tanta fuerza. Esperamos con ansias ver esa sonrisa radiante en tu rostro mientras celebramos juntos este nuevo año de vida que comienza para ti.<br />" +
    "Así que prepárate, mi pequeña aventurera, porque te espera una fiesta que quedará grabada en tu memoria para siempre. Estamos emocionados de compartir este día contigo y de crear recuerdos que perdurarán a lo largo del tiempo.<br />" +
    "Con todo nuestro amor,<br />" +
    "Tus Papas",
  celebrationDate: new Date("2024-05-30 13:30:00"),
  imageV: require("../assets/images/Vertical.jpeg"),
  imageH: require("../assets/images/Horizontal.jpeg"),
  imageB: require("../assets/images/nubesycielo.jpg"),
  events: [
    {
      dateOrTime: "10:00 - 11:00 AM",
      title: "Ceremonia",
      description: "Religiosa",
      iconType: "church",
    },
    {
      dateOrTime: "1:30 - 2:00 PM",
      title: "Recepción",
      description: "Entrega de Regalos",
      iconType: "attractions",
    },
    {
      dateOrTime: "2:00 - 4:00 PM",
      title: "Juegos y Actividades",
      description: "",
      iconType: "soccer",
    },
    {
      dateOrTime: "4:10 - 6:10 PM",
      title: "Hora de Comer",
      description: "",
      iconType: "lunch",
    },
    {
      dateOrTime: "6:10 - 8:00 PM",
      title: "Entretenimiento",
      description: "",
      iconType: "emoji",
    },
    {
      dateOrTime: "8:00 - 10:00 PM",
      title: "Partir el Pastel",
      description: "",
      iconType: "cake",
    },
    {
      dateOrTime: "",
      title: "Despedida",
      description: "",
      iconType: "darkMode",
    },
  ],
  imageGallery: [
    {
      url: require("../assets/images/castillo.jpeg"),
    },
    {
      url: require("../assets/images/pastel_3.jpg"),
    },
    {
      url: require("../assets/images/nubesycielo.jpg"),
    },
    {
      url: require("../assets/images/mesa.jpeg"),
    },
  ],
} as CelebrationInformationType;
