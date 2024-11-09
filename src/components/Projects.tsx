import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Resume",
    desc: "A HTML, CSS & TypeScript-based resume project for managing and organization.",
    img: "/resume.png",
    tags: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Amazon Website",
    desc: "A HTML, CSS-based project for managing and organization.",
    img: "/amazon.png",
    tags: ["HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto px-4 pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
