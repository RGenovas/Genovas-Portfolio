
import PropTypes from "prop-types"

const ProjectCard = ({
    imgSrc,
    title,
    description,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc050/5 transition-colors " + classes}>
        <figure className={"img-box  rounded-lg mb-4"}>
            <img src={imgSrc} 
            alt={title}
            loading='lazy'
            className='img-cover'
             />
        </figure>
        <div className="flex items-center justify-beween gap-4 mb-4">
           <div>
            <h3 className="title-1 mb-4 mt-4">
                {title}

            </h3>
            <h3 className="title-1 mb-4">
                {description}

            </h3>
            <div className="flex flex-wrap items-center gap-2">
                {tags.map((label,key) => (
                <span 
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                    {label}
                </span>
                ))}
            </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
            <span className="material-symbols-rounded"
            aria-hidden="true">
                arrow_outward
            </span>
        </div>
        </div>
        <a href={projectLink}
        target='_blank'
         className="absolute inset-0"></a>
      
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    classes: PropTypes.string
}

export default ProjectCard
