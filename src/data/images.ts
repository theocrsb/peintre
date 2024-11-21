import galerie1 from "../assets/galerie1.jpg";
import galerie2 from "../assets/galerie2.jpg";
import galerie3 from "../assets/galerie3.jpg";
import galerie4 from "../assets/galerie4.jpg";
import galerie5 from "../assets/galerie5.jpg";
import galerie6 from "../assets/galerie6.jpg";
import galerie7 from "../assets/galerie7.jpg";
import galerie8 from "../assets/galerie8.jpg";
import galerie9 from "../assets/galerie9.jpg";
import galerie10 from "../assets/galerie10.jpg";
import carrelage from "../assets/carrelage.png";
import menuiserie from "../assets/menuiserie.png";
import peinture from "../assets/peinture.png";
import placo from "../assets/placo.png";

export enum Destination {
  "caroussel",
  "galerie",
  "menuisier",
  "carreleur",
  "peintre",
  "plaquiste",
}

type Image = {
  id: number;
  src: string;
  title?: string;
  destination: Destination;
};

const IMAGES: Image[] = [
  {
    id: 1,
    src: galerie1,
    destination: Destination.galerie,
  },
  {
    id: 2,
    src: galerie2,
    destination: Destination.galerie,
  },
  {
    id: 3,
    src: galerie3,
    destination: Destination.galerie,
  },
  {
    id: 4,
    src: galerie4,
    destination: Destination.galerie,
  },
  {
    id: 5,
    src: galerie5,
    destination: Destination.galerie,
  },
  {
    id: 6,
    src: galerie6,
    destination: Destination.galerie,
  },
  {
    id: 7,
    src: galerie7,
    destination: Destination.galerie,
  },
  {
    id: 8,
    src: galerie8,
    destination: Destination.galerie,
  },
  {
    id: 9,
    src: galerie9,
    destination: Destination.galerie,
  },
  {
    id: 10,
    src: galerie10,
    destination: Destination.galerie,
  },
  {
    id: 11,
    src: carrelage,
    title: "Carrelage",
    destination: Destination.caroussel,
  },
  {
    id: 12,
    src: menuiserie,
    title: "Menuiserie",
    destination: Destination.caroussel,
  },
  {
    id: 13,
    src: peinture,
    title: "Peinture",
    destination: Destination.caroussel,
  },
  {
    id: 14,
    src: placo,
    title: "Placo",
    destination: Destination.caroussel,
  },
];

export default IMAGES;
