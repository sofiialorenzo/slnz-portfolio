function Study () {
    return(
        <div className="flex-2">
            <div className="py-8 px-16 max-w-2xl mx-auto">
                <h3 className="font-bold text-xl pb-4">Educación</h3>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                <h3 className="font-semibold text-xl"><a href="https://davinci.edu.ar/"></a>Escuela DaVinci</h3>
                                </div>
                                <time className="text-sm text-gray-600">2023 - Actualmente</time>
                                </header>
                                <footer>
                                    <p>Técnico Superior en Diseño y Programación Web</p>
                                </footer>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                    <h3 className="font-semibold text-xl"><a href="https://www.instagram.com/leifmadryn/"></a>LEIF</h3>
                                    </div>
                                    <time className="text-sm text-gray-600">2012 - 2020</time>
                                    </header>
                                <footer>
                                    <p>Inglés nivel B2</p>
                                </footer>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Study;