function Study () {
    return(
        <div className="flex-2">
            <div className="py-8 px-16 mx-auto">
                <h3 className="font-bold text-xl pb-4" style={{ color: "var(--headingTwo-color)"}}>Educación</h3>
                <div>
                    <ul className="flex flex-col gap-12">
                        <li>
                            <article>
                                <header className="flex justify-between items-center mb-2 gap-4">
                                <div>
                                <h3 className="font-semibold text-lg" style={{ color: "var(--headingOne-color)"}}><a href="https://davinci.edu.ar/"></a>Escuela Da Vinci</h3>
                                </div>
                                <time className="text-xs" style={{ color: "var(--span-color)"}}>2023 - Actualmente</time>
                                </header>
                                <footer>
                                    <p style={{ color: "var(--text-color)"}}>Técnico Superior en Diseño y Programación Web</p>
                                </footer>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header className="flex justify-between items-center mb-2">
                                <div>
                                    <h3 className="font-semibold text-xl" style={{ color: "var(--headingOne-color)"}}><a href="https://www.instagram.com/leifmadryn/"></a>LEIF</h3>
                                    </div>
                                    <time className="text-xs" style={{ color: "var(--span-color)"}}>2012 - 2020</time>
                                    </header>
                                <footer>
                                    <p style={{ color: "var(--text-color)"}}>Inglés nivel B2</p>
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