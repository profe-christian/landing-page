import { Link } from "react-router-dom";
import { products } from "../data/products";

export const Products = () => {
  return (
    <>
      <main className="container">
        <header className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
          <div>
            <h1 className="h3 fw-bold">Productos</h1>
            <p className="mb-0">
              Soluciones de informática pensadas para tu negocio.
            </p>
          </div>
        </header>
        <section className="row g-4">
          {products.map((p) => (
            <>
              <div className="col-lg-4 col-md-6 col-12">
                <article
                  key={p.id}
                  className="card h-100 bg-dark text-light border-secondary-subtle"
                >
                  <div className="ratio ratio-16x9">
                    <img
                      src={p.imageSrc}
                      className="card-img-top w-100 h-100 object-fit-contain"
                      alt="Producto"
                    />
                  </div>
                  <div className="card-body">
                    <span className="badge rounded-pill text-bg-secondary mb-2">
                      {p.category}
                    </span>
                    <h3 className="h6 card-title">{p.title}</h3>
                    <p className="card-text small">{p.description}</p>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <span className="fw-bold">${p.price}</span>
                    <Link
                      className="btn btn-outline-light btn-sm"
                      to={`/products/${p.id}`}
                    >
                      Ver detalle
                    </Link>
                  </div>
                </article>
              </div>
            </>
          ))}
        </section>
      </main>
    </>
  );
};
