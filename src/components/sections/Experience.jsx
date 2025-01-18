function Experience () {
    return (
        <section className="flex justify-center items-center">
            <div className="py-8 px-16 max-w-2xl mx-auto">
                <h2 className="font-bold text-2xl pb-4">Experiencia</h2>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                <h3 className="font-bold text-xl text-gray-900">Desarrollo FrontEnd y Diseño UX/UI</h3>
                                <p className="font-medium text-lg text-gray-600">Diseño y desarrollo web - Freelance</p>
                                </div>
                                <time className="text-gray-600 text-sm">2023 - Actualmente</time>
                                </header>
                                <footer>
                                    <p>Diseño de interfaces centradas en la usabilidad y accesibilidad. Arquitectura de la información, prototipos, wireframes y mockups.Maquetación web responsiva y adaptable. Implementación de interactividad y animacionesen interfaces. </p>
                                </footer>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">Atención al cliente</h3>
                                    <p className="font-medium text-lg text-gray-600">Bazar y regalos - Puerto Madryn, Chubut</p>
                                </div>
                                <time className="text-gray-600 text-sm">2021 - 2022</time>
                                </header>
                            </article>
                            <footer>
                                <p>Atención personalizada, enfocada en las necesidades de los clientes. Gestión de inventario y organización del espacio de venta. Resolución de consultas y manejo de situaciones con enfoque en la satisfacción del cliente. Asesoramiento sobre productos para el hogar y recomendaciones según preferencias.</p>
                            </footer>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience;