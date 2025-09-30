export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <div className="container">
                    <a className="navbar-brand fw-semibold" href="#">AsesoríasTech</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
                        aria-controls="navbarMain" aria-expanded="false" aria-label="Abrir menú">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMain">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>

                        <div className="d-flex gap-2">
                            <a className="btn btn-light" href="#registrarse">Registrarse</a>
                            <a className="btn btn-light" href="#login">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

