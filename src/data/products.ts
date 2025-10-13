export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  imageSrc: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "ASUS TUF VG249QM5A",
    description: 'Monitor 23.8" Full HD 280Hz',
    category: "Monitores",
    price: 150000,
    imageSrc: "/img/monitor1.png",
  },
  {
    id: 2,
    title: "Logitech MX Keys",
    description: "Teclado inalámbrico",
    category: "Periféricos",
    price: 99990,
    imageSrc: "/img/notebook1.webp",
  },
  {
    id: 3,
    title: "SSD NVMe 1TB",
    description: "PCIe 4.0 7000MB/s",
    category: "Almacenamiento",
    price: 129990,
    imageSrc: "/img/notebook2.jpg",
  },
  {
    id: 4,
    title: "Silla Gamer Ω",
    description: "Soporte lumbar, 135°",
    category: "Mobiliario",
    price: 189990,
    imageSrc: "/img/ps5.png",
  },
  {
    id: 5,
    title: "Router Wi-Fi 6 AX3000",
    description: "Doble banda, OFDMA",
    category: "Redes",
    price: 84990,
    imageSrc: "/img/telefono1.jpg",
  },
];