import MailIcon from "../../icons/MailIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GithubIcon from "../../icons/GithubIcon";
import BehanceIcon from "../../icons/BehanceIcon";

function Contact() {
    return (
        <section
            className="md:fixed md:left-4 md:top-1/2 md:transform md:-translate-y-1/2 md:flex md:flex-col md:items-center md:space-y-6 
            flex justify-center mt-4 md:mt-0"
        >
            <ul className="flex md:flex-col items-center flex-row gap-6 md:gap-6">
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
