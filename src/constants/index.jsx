import { Sparkles, Satellite, Globe, Rocket, Star, Earth } from "lucide-react";


import user1 from "../assets/images/profile-pictures/user1.jpg";
import user2 from "../assets/images/profile-pictures/user2.jpg";
import user3 from "../assets/images/profile-pictures/user3.jpg";
import user4 from "../assets/images/profile-pictures/user4.jpg";
import user5 from "../assets/images/profile-pictures/user5.jpg";
import user6 from "../assets/images/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Caracteristicas", href: "#" },
  { label: "Experiencia", href: "#" },
  { label: "Dragon", href: "#" },
  { label: "Testimonios", href: "#" },
];

export const testimonials = [
  {
    user: "Rodrigo Campos",
    age: "53 años", 
    image: user1,
    text: "Fue una experiencia transformadora. Ver la Tierra desde el espacio es algo que no se puede describir con palabras. ¡Simplemente espectacular!",
  },
  {
    user: "Jimena Sánchez",
    age: "47 años",
    image: user2,
    text: "Desde el despegue hasta el aterrizaje, el viaje fue absolutamente increíble. Las comodidades a bordo superaron todas mis expectativas.",
  },
  {
    user: "David Moctezuma",
    age: "29 años",
    image: user3,
    text: "La ingravidez y las vistas panorámicas del universo me hicieron sentir como si estuviera en una película. Definitivamente, una aventura única en la vida.",
  },
  {
    user: "Esteban Salgado",
    age: "61 años",
    image: user4,
    text: "El lujo y la atención personalizada durante el vuelo hicieron que todo el viaje fuera inolvidable. Vale cada segundo.",
  },
  {
    user: "Miguel Otoalaurruchi",
    age: "37 años",
    image: user5,
    text: "Sencillamente asombroso. Flotar en gravedad cero y observar el cosmos a través de enormes ventanales fue un sueño hecho realidad.",
  },
  {
    user: "Diana Frias",
    age: "42 años",
    image: user6,
    text: "Nunca imaginé que viajar al espacio sería tan cómodo y emocionante. Esta experiencia me cambió para siempre.",
  },
];

export const features = [
  {
    icon: <Sparkles />,
    text: "Explora más allá de lo imaginable",
    description:
      "Vive la aventura de viajar al espacio y sé parte de una élite que ha visto el universo desde las estrellas.",
  },
  {
    icon: <Satellite />,
    text: "Más cerca de las estrellas que nunca",
    description:
      "Atrévete a romper los límites de la Tierra y sumérgete en la grandeza del cosmos en un viaje hecho solo para visionarios.",
  },
  {
    icon: <Globe />,
    text: "La última frontera está a tu alcance",
    description:
      "Experimenta la ingravidez, contempla la curvatura de la Tierra y siente la emoción de lo desconocido en un viaje espacial exclusivo.",
  },
  {
    icon: <Rocket />,
    text: "Tu próxima aventura no tiene límites",
    description:
      "Deja atrás el mundo que conoces y vive una experiencia única en las profundidades del universo.",
  },
  {
    icon: <Star />,
    text: "Un viaje más allá del lujo",
    description:
      "El espacio te espera con la exclusividad y la emoción que solo unos pocos han experimentado. ¿Te atreves a descubrirlo?",
  },
  {
    icon: <Earth />,
    text: "Cambia tu perspectiva del universo",
    description:
      "Flota entre las estrellas, observa la Tierra desde el vacío y siente la magia de lo infinito en un viaje espacial solo para pioneros.",
  },
];

export const checklistItems = [
  {
    title: "Inmersión total en el espacio exterior",
    description:
      "Siente la emoción de dejar la Tierra y ver cómo el horizonte se transforma en el oscuro y vasto vacío del espacio, rodeado de estrellas.",
  },
  {
    title: "Comodidad de lujo en gravedad cero",
    description:
      "Relájate en una nave diseñada con la más alta tecnología y comodidades de primera clase, disfrutando de la ingravidez mientras flotas en un ambiente exclusivo y moderno.",
  },
  {
    title: "Vistas sin igual de la Tierra y el cosmos",
    description:
      "Maravíllate con una vista panorámica incomparable desde ventanas de gran tamaño, observando la curvatura de la Tierra y el infinito universo a tu alrededor.",
  },
  {
    title: "Una aventura transformadora",
    description:
      "Experimenta algo que pocos humanos han logrado; una travesía que cambiará tu forma de ver el mundo y que te conectará profundamente con el universo.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
