import imagen from '../assets/img/tech.jpg';

export const Main = () => {
    return (
        <>
            <main className="container" id="inicio">
                <div className="row align-items-center gy-4">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h1 className="display-6 fw-bold">Bienvenido/a a nuestra página de asesorías tecnológicas</h1>
                        <p className="lead mt-3">
                            Impulsamos tus proyectos con soluciones en desarrollo de software, integración de sistemas y
                            modernización tecnológica. Nuestro equipo experto te acompaña desde la idea hasta la implementación.
                        </p>
                        <a href="#productos" className="btn btn-light ">Ver productos</a>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                        <img
                            src={imagen}
                            alt="Imagen ilustrativa de asesorías tecnológicas"
                            className="hero-image"
                            height="300"
                        />
                    </div>
                </div>

                <section id="productos" className="mt-5">
                    <h2 className="h4 mb-3">Productos</h2>
                    <p className="mb-0">Próximamente encontrarás aquí nuestros servicios y planes. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </section>

                <section id="contacto" className="mt-5">
                    <h2 className="h4 mb-3">Contacto</h2>
                    <p className="mb-0">Escríbenos para una asesoría personalizada: contacto@asesoriastech.cl. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </section>
            </main>
        </>
    )
}
