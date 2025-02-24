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
import { motion } from "framer-motion";

function Skills () {
    return(
        <div className="flex-2">
            <div className="py-8 px-16 mx-auto">
            <h3 className="font-bold text-xl pb-4" style={{ color: "var(--headingTwo-color)"}}>Habilidades</h3>
            <ul className='flex flex-wrap gap-8 mt-2'>
                {[
                    { icon: <HtmlIcon />, label: 'HTML5'},
                    { icon: <CssIcon />, label: 'CSS3'},
                    { icon: <JsIcon />, label: 'JavaScript'},
                    { icon: <PhpIcon />, label: 'PHP'},
                    { icon: <NodeIcon />, label: 'Node'},
                    { icon: <ReactIcon />, label: 'React'},
                    { icon: <VueIcon />, label: 'Vue'},
                    { icon: <AstroIcon />, label: 'Astro'},
                    { icon: <LaravelIcon />, label: 'Laravel'},
                    { icon: <FigmaIcon />, label: 'Figma'},
                    { icon: <WpIcon />, label: 'Wordpress'},
                    { icon: <TailwindIcon />, label: 'Tailwind'},
                    { icon: <BootstrapIcon />, label: 'Bootstrap'},
                    { icon: <MysqlIcon />, label: 'MySQL'},
                    { icon: <MongoIcon />, label: 'MongoDB'},
                    { icon: <GithubIcon />, label: 'Github'},
                ].map((skill, index) => (
                    <li key={index} className='relative group flex flex-col items-center transition duration-200'>
                        <motion.div className='mb-2 w-6 h-6' whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ fill: "var(--text-color)"}}>{skill.icon}</motion.div>
                        <span className='absolute mt-6 text-xs px-2 transform translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out' style={{ color: "var(--span-color)"}}>{skill.label}</span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default Skills;