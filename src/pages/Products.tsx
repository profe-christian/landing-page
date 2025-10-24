import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";


export const Products = () => {
  const categories = ["all",...new Set(products.map((p)=> p.category))];

  console.log(categories);
  
  const [selectedCategory,setSelectedCategory] = useState("all");
   const filteredProducts = 
    selectedCategory === "all" 
    ? products : products.filter((p)=> p.category === selectedCategory);
  
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
          {/* FILTRO DE CATEGORIA*/}
          <div className="d-flex align-items-center gap-2">
            <label htmlFor="cat" className="form-label mb-0">
              Categoría
            </label>
            <select
              name="category"
              id="category"
              className="form-select form-select-sm"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Todos" : cat}
                </option>
              ))}
            </select>
          </div>
          {/* FILTRO DE PRECIO MIN Y MAX */}
          <div className="d-flex align-items-center gap-2">
            <label htmlFor="minPrice" className="form-label mb-0">
              Mín
            </label>
            <input
              id="minPrice"
              type="number"
              className="form-control form-control-sm"
              style={{ width: 110 }}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />

            <label htmlFor="maxPrice" className="form-label mb-0">
              Máx
            </label>
            <input
              id="maxPrice"
              type="number"
              className="form-control form-control-sm"
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ width: 110 }}
            />

            <button className="btn btn-outline-secondary btn-sm">
              Restablecer
            </button>
          </div>
        </header>
        <section className="row g-4">
          { filteredProducts.length===0 && <p>No hay Productos</p>}
          {filteredProducts.map((p) => (
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
