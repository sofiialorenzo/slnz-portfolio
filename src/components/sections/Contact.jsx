import MailIcon from '../../icons/MailIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import GithubIcon from '../../icons/GithubIcon';
import BehanceIcon from '../../icons/BehanceIcon';

function Contact () {
    return (
        <section className="fixed left-4 top-1/2 flex flex-col items-center space-y-6">
            <ul className='flex flex-col items-center gap-6'>
                <li className='hover:scale-110 transition-tranform'>
                    <a href="mailto:sofialorenzo.work@gmail.com" title="Enviar correo electrónico a Sofía Lorenzo al sofialorenzo.work@gmail.com" target="_blank" rel="noopener noreferrer"><MailIcon className="w-6 h-6 text-violet-800" /></a>
                </li>
                <li className='hover:scale-110 transition-tranform'>
                    <a href="https://www.linkedin.com/in/soffialorenzo/" title="Visitar el perfil de Sofía Lorenzo en LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-6 h-6 text-violet-800" /></a>
                </li>
                <li className='hover:scale-110 transition-tranform'>
                    <a href="https://www.behance.net/soffialorenzo" title="Visitar el perfil de Sofía Lorenzo en Behance" target="_blank" rel="noopener noreferrer" ><BehanceIcon className="w-6 h-6 text-violet-800" /></a>
                </li>
                <li className='hover:scale-110 transition-tranform'>
                    <a href="https://github.com/sofiialorenzo" title="Visitar el perfil de Sofía Lorenzo en Github" target="_blank" rel="noopener noreferrer"><GithubIcon className="w-6 h-6 text-violet-800" /></a>
                </li>
                    </ul>
        </section>
    )
}

export default Contact;