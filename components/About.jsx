import Link from 'next/link';
import Image from 'next/image';
export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#067DE7]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I&apos;ve been studying web programming for the past 12 months in order to become a professional web developer. I&apos;ve always enjoyed working with computers and technology. In 2019, I began using HTML and CSS to make tiny changes to a small business website that I was managing. What started off as a few little changes developed into a passion for programming.
          </p>
          <p className='py-2 text-gray-600'>
          I was immediately drawn to learn more about programming because of how complex it can be. I began learning javascript and became even more enthusiastic about creating interactive websites. After that, I enrolled in Jhankar Mahbub&apos;s web development course. Now I spend my time exploring new technologies and building applications with React JS, Firebase, and MongoDB.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src='/../public/Assets/saikot.JPG' width="1364" height="1400"
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};