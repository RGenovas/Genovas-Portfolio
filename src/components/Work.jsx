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
          tags: ['API', 'Responsive', 'CSS','JS','TheMovieDB API'],
          projectLink: 'https://horrordb.netlify.app/'
        },
        {
          imgSrc: '/images/sassyport.PNG',
          title: 'Sass Portfolio',
          description:'A portfolio website template. Made using Sass and Vanilla JS',
          tags: [ 'Responsive', 'CSS','JS','Sass'],
          projectLink: 'https://sassyportfolio.netlify.app/'
        },
        {
          imgSrc: '/images/weatherapp.PNG',
          title: 'Weather App',
          description:'A simple weather app that displays the current weather in any city you look up.',
          tags: [ 'CSS','JS','Sass','OpenWeatherMapAPI'],
          projectLink: 'https://weatherjsdisplay.netlify.app/'
        },
        {
          imgSrc: '/images/itfirm.PNG',
          title: 'IT firm website design',
          description:'An IT firm website design made with React based on a Figma design.',
          tags: [ 'CSS','JS','React','Figma'],
          projectLink: 'https://itdizainas.netlify.app/'
        },
        {
          imgSrc: '/images/pwgen.PNG',
          title: 'Password Generator JS',
          description:'A simple JS based tool for generating passwords. Allows the user to choose how many letters/numbers/symbols are used in the password. Also allows the user to submit their own words.',
          tags: [ 'CSS','JS','Sass'],
          projectLink: 'https://pwgenjs.netlify.app/'
        }

      ];

      
  return (
    <div>
      <section className="section"
      id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            Some of my projects:
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
