import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import estroGadget from '../public/assets/projects/estro-gadget.png';
import proTechGear from '../public/assets/projects/pro-tech-gear.png'
import diligentDeveloper from '../public/assets/projects/diligate-developer.png'
import { ProjectItem } from './Projectitem';


export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <ProjectItem
            title='Estro Gadget'
            backgroundImg={estroGadget}
            // projectUrl='/estroGadget'
          />
          <ProjectItem
            title='Pro Tech Gear'
            backgroundImg={proTechGear}
            // projectUrl='/proTechGear'
          />
          <ProjectItem
            title='Diligent Developer'
            backgroundImg={diligentDeveloper}
            // projectUrl='/diligentDeveloper'
          />
          
        </div>
      </div>
    </div>
  );
};

