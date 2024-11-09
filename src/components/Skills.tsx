import React from 'react';

const Skills = () => {
  return (
    <div id="skills"className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-blue-700 text-4xl md:text-5xl'>Technologies Iam working with</h2>
            <p className='text-gray-500  pt-2 '>
            I have a solid foundation in web developemnt and Designing 
            <br />
            specializing in html,css,javascript,Typescript,tailwindcss Nextjs
            <br />
             to create static and Dynamic website
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-purple-950 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-out-up">Typescript</h2>
                    <h2>Typescript</h2>
                    <h2>Typescript</h2>
                    <h2>Nextjs</h2>
                    <h2>Tailwind css</h2>
                </div>
                <div className='space-y-2'>
                    <h2>Html</h2>
                    <h2>css</h2>
                    <h2>javascript</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
