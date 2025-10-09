import { Link } from "react-router-dom";

const data = [
  { id: "api-spring", title: "API REST en Java Spring", price: 750000 },
  { id: "web-python", title: "Web Full-Stack con Python", price: 680000 },
  { id: "dba-oracle", title: "Soporte & DBA Oracle", price: 540000 },
  { id: "erp-impl", title: "Implementación de ERP", price: 1150000 },
  { id: "kit-devops", title: "Kit DevOps Monitoring", price: 320000 },
];

export const Products = () => {
  return (
    <>
      <section className="container">
        <h1>Productos</h1>
      </section>
    </>
  );
};
