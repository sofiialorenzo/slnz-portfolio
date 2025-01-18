import projects from '../../projects'

function Projects () {
    return (
        <section className="flex justify-center items-center">
            <div className="py-8 px-16 max-w-2xl mx-auto">
                <h2 className="font-bold text-2xl pb-4">Proyectos</h2>
                <div>
                    <ul className='grid grid-cols-3 gap-4'>
                    {projects.map((project) => (
                        <li className='flex border border-gray-200 p-4 mb-4'>
                        <div key={project.id}>
                            <div className='flex flex-col gap-2'>
                            <h3 className='font-bold text-xl'><a href={project.url} title={`Ver el proyecto ${project.name}`} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {project.highlights.map((highlight, index) => (
                                <span key={index} className='text-xs text-gray-600'>{highlight}</span>
                            ))}
                        </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;