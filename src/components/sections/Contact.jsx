import MailIcon from '../../icons/MailIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import GithubIcon from '../../icons/GithubIcon';
import BehanceIcon from '../../icons/BehanceIcon';

function Contact () {
    return (
        <section className="flex justify-center items-center">
            <div className="py-8 px-16 max-w-2xl mx-auto">
                <h2 className="font-bold text-2xl pb-4">Contacto</h2>
                <div>
                    <ul className='flex flex-row gap-4 items-center'>
                        <li className="flex items-center">
                            <div className="flex items-center">
                                <a href="mailto:sofialorenzo.work@gmail.com" title="Enviar correo electrónico a Sofía Lorenzo al sofialorenzo.work@gmail.com" target="_blank" rel="noopener noreferrer"><MailIcon /></a>
                                <span className='sr-only'>Correo Electrónico</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.linkedin.com/in/soffialorenzo/" title="Visitar el perfil de Sofía Lorenzo en LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
                                <span className='sr-only'>LinkedIn</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.behance.net/soffialorenzo" title="Visitar el perfil de Sofía Lorenzo en Behance" target="_blank" rel="noopener noreferrer"><BehanceIcon /></a>
                                <span className='sr-only'>Behance</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://github.com/sofiialorenzo" title="Visitar el perfil de Sofía Lorenzo en Github" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                                <span className='sr-only'>Github</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;