import AstroIcon from '../../icons/AstroIcon';
import BootstrapIcon from '../../icons/BootstrapIcon';
import CssIcon from '../../icons/CssIcon';
import HtmlIcon from '../../icons/HtmlIcon';
import JsIcon from '../../icons/JsIcon';
import ReactIcon from '../../icons/ReactIcon';
import TailwindIcon from '../../icons/TailwindIcon';
import FigmaIcon from '../../icons/FigmaIcon';
import GithubIcon from '../../icons/GithubIcon';
import LaravelIcon from '../../icons/LaravelIcon';
import MongoIcon from '../../icons/MongoIcon';
import MysqlIcon from '../../icons/MysqlIcon';
import NodeIcon from '../../icons/NodeIcon';
import PhpIcon from '../../icons/PhpIcon';
import VueIcon from '../../icons/VueIcon';
import WpIcon from '../../icons/WpIcon';

function Skills () {
    return(
        <section className="flex items-center">
            <div className="py-8 px-16 max-w-2xl mx-auto">
            <h2 className="font-bold text-2xl pb-4">Habilidades</h2>
            <div className='my-4'>
            <ul className='flex inline-flex flex-wrap gap-8'>
                <li className='flex gap-2'><HtmlIcon /> <span>HTML</span> </li>
                <li className='flex gap-2'><CssIcon /> <span>CSS</span> </li>
                <li className='flex gap-2'><JsIcon /> <span>JavaScript</span> </li>
                <li className='flex gap-2'><PhpIcon /> <span>PHP</span></li>
                <li className='flex gap-2'><NodeIcon /> <span>Node</span></li>
                <li className='flex gap-2'><ReactIcon /> <span>React</span></li>
                <li className='flex gap-2'><VueIcon /> <span>Vue</span></li>
                <li className='flex gap-2'><AstroIcon /> <span>Astro</span></li>
                <li className='flex gap-2'><LaravelIcon /> <span>Laravel</span></li>
                <li className='flex gap-2'><FigmaIcon /> <span>Figma</span></li>
                <li className='flex gap-2'><WpIcon /> <span>Wordpress</span></li>
                <li className='flex gap-2'><TailwindIcon /> <span>Tailwind</span></li>
                <li className='flex gap-2'><BootstrapIcon /> <span>Bootstrap</span></li>
                <li className='flex gap-2'><MysqlIcon /> <span>MySQL</span></li>
                <li className='flex gap-2'><MongoIcon /> <span>MongoDB</span></li>
                <li className='flex gap-2'><GithubIcon /> <span>GitHub</span></li>

            </ul>
            </div>
            </div>
        </section>
    )
}

export default Skills;