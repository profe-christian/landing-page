import { useCart } from "../contexts/CartContext";

export const Carrito = () => {
  const { items, addToCart, removeOne, removeAll, clearCart, formatCLP } =
    useCart();

  // Subtotal por item y total general con reduce (funcion de JS)
  const totalAmount = items.reduce(
    (acumulador, producto) => acumulador + producto.price * producto.qty,
    0
  );

  if (items.length === 0) {
    return (
      <main className="container py-4">
        <h1 className="h3">Carrito</h1>
        <p className="text-secondary">Tu carrito está vacío.</p>
      </main>
    );
  }

  return (
    <>
      <main className="container py-4">
        <header className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="h3">Carrito</h1>
          <button className="btn btn-danger btn-md" onClick={clearCart}>
            Vaciar carrito
          </button>
        </header>

        <section className="row g-3">
          <div className="col-12 col-lg-8">
            <ul className="list-group">
              {items.map((it) => {
                const subtotal = it.price * it.qty;
                return (
                  <li
                    key={it.id}
                    className="list-group-item d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={it.imageSrc}
                        alt={it.title}
                        width={64}
                        height={64}
                        className="object-fit-contain"
                      />
                      <div>
                        <h6 className="mb-1">{it.title}</h6>
                        <small className="text-secondary">
                          {formatCLP(it.price)} c/u
                        </small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => removeOne(it.id)}
                      >
                        -
                      </button>
                      <span className="px-2">{it.qty}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => addToCart(it)}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-end" style={{ minWidth: 120 }}>
                      <div className="fw-bold">{formatCLP(subtotal)}</div>
                      <button
                        className="btn btn-link text-danger p-0 small"
                        onClick={() => removeAll(it.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span className="fw-bold">{formatCLP(totalAmount)}</span>
                </div>
                <hr />
                <div className="d-grid-2">
                  <button className="btn btn-success m-2">
                    Proceder al pago
                  </button>
                  <button className="btn btn-primary m-2">
                    Seguir comprando
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};
