import MailIcon from "../../icons/MailIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GithubIcon from "../../icons/GithubIcon";
import BehanceIcon from "../../icons/BehanceIcon";

function Contact() {
    return (
        <section
            className="md:relative lg:fixed lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 
    lg:flex lg:flex-col lg:items-center lg:space-y-6 flex justify-center mt-4 lg:mt-0"
        >
            <ul className="flex lg:flex-col items-center flex-row gap-6 lg:gap-6">
                <li className="hover:scale-110 transition-transform">
                    <a
                        href="mailto:sofialorenzo.work@gmail.com"
                        title="Enviar correo electrónico a Sofía Lorenzo"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fill: "var(--border-color)" }}
                    >
                        <MailIcon className="w-6 h-6" />
                    </a>
                </li>
                <li className="hover:scale-110 transition-transform">
                    <a
                        href="https://www.linkedin.com/in/soffialorenzo/"
                        title="Visitar el perfil de Sofía Lorenzo en LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fill: "var(--border-color)" }}
                    >
                        <LinkedinIcon className="w-6 h-6" />
                    </a>
                </li>
                <li className="hover:scale-110 transition-transform">
                    <a
                        href="https://www.behance.net/soffialorenzo"
                        title="Visitar el perfil de Sofía Lorenzo en Behance"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fill: "var(--border-color)" }}
                    >
                        <BehanceIcon className="w-6 h-6" />
                    </a>
                </li>
                <li className="hover:scale-110 transition-transform">
                    <a
                        href="https://github.com/sofiialorenzo"
                        title="Visitar el perfil de Sofía Lorenzo en Github"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fill: "var(--border-color)" }}
                    >
                        <GithubIcon className="w-6 h-6" />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
