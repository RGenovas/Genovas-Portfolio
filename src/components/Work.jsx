// imports

import ProjectCard from "./ProjectCard";


const Work = () => {
    const works = [
        {
          imgSrc: '/images/photoAPI.PNG',
          title: 'Stock Images',
          description:'A website for finding stock images from Pexels. Made using Vanilla JS and CSS.',
          tags: ['API', 'Responsive', 'CSS','JS', 'PexelsAPI'],
          projectLink: 'https://stockimagepage.netlify.app/'
        },
        {
          imgSrc: '/images/horrorDB.PNG',
          title: 'HorrorDB',
          description:'An old movie website project. Remade to fit the horror theme.',
          tags: ['API', 'Responsive', 'CSS','JS','TheMovieDB_API'],
          projectLink: 'https://horrordb.netlify.app/'
        },
        {
          imgSrc: '/images/sassyport.PNG',
          title: 'HorrorDB',
          description:'A portfolio website template. Made using Sass and Vanilla JS',
          tags: [ 'Responsive', 'CSS','JS','Sass'],
          projectLink: 'https://sassyportfolio.netlify.app/'
        }
      ];

      
  return (
    <div>
      <section className="section"
      id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            My portfolio:
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink,description},key)=> (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                description={description}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
                ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Work
