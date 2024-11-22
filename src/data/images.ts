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
import chat1 from "../assets/chat1.jpg";
import chat2 from "../assets/chat2.jpg";
import chat3 from "../assets/chat3.jpg";

export enum Destination {
  "caroussel",
  "galerie",
  "menuisier",
  "carreleur",
  "peintre",
  "plaquiste",
}

export type Image = {
  id: number;
  src: string;
  title?: string;
  destination: Destination;
  isOver: boolean;
};

const IMAGES: Image[] = [
  {
    id: 1,
    src: galerie1,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 2,
    src: galerie2,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 3,
    src: galerie3,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 4,
    src: galerie4,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 5,
    src: galerie5,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 6,
    src: galerie6,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 7,
    src: galerie7,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 8,
    src: galerie8,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 9,
    src: galerie9,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 10,
    src: galerie10,
    destination: Destination.galerie,
    isOver: true,
  },
  {
    id: 11,
    src: carrelage,
    title: "Carrelage",
    destination: Destination.caroussel,
    isOver: true,
  },
  {
    id: 12,
    src: menuiserie,
    title: "Menuiserie",
    destination: Destination.caroussel,
    isOver: true,
  },
  {
    id: 13,
    src: peinture,
    title: "Peinture",
    destination: Destination.caroussel,
    isOver: true,
  },
  {
    id: 14,
    src: placo,
    title: "Placo",
    destination: Destination.caroussel,
    isOver: true,
  },
  {
    id: 15,
    src: chat1,
    destination: Destination.peintre,
    isOver: true,
  },
  {
    id: 16,
    src: chat1,
    destination: Destination.plaquiste,
    isOver: true,
  },
  {
    id: 17,
    src: chat1,
    destination: Destination.carreleur,
    isOver: true,
  },
  {
    id: 18,
    src: chat1,
    destination: Destination.menuisier,
    isOver: true,
  },
  {
    id: 19,
    src: chat2,
    destination: Destination.peintre,
    isOver: false,
  },
  {
    id: 20,
    src: chat2,
    destination: Destination.plaquiste,
    isOver: false,
  },
  {
    id: 21,
    src: chat2,
    destination: Destination.carreleur,
    isOver: false,
  },
  {
    id: 22,
    src: chat2,
    destination: Destination.menuisier,
    isOver: false,
  },
  {
    id: 23,
    src: chat3,
    destination: Destination.peintre,
    isOver: false,
  },
  {
    id: 24,
    src: chat3,
    destination: Destination.plaquiste,
    isOver: false,
  },
  {
    id: 25,
    src: chat3,
    destination: Destination.carreleur,
    isOver: false,
  },
  {
    id: 26,
    src: chat3,
    destination: Destination.menuisier,
    isOver: false,
  },
];

export default IMAGES;
