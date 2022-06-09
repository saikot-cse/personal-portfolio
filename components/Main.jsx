import Link from 'next/link';
import React from 'react';
import { Wave } from 'react-animated-text';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import TextTransition, { presets } from "react-text-transition";
const TEXTS = [
  "MERN Stack",
  "Front-End",
  "Full Stack"
];
export const Main = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#067DE7] inline-block'> <Wave text="Saifullah Mansur" effect="verticalFadeIn" effectDirection="up" iterations={1}/></span>
          </h1>
          <h1 className='py-2 text-gray-700'>A <span className="inline-block text-[#0EC8E5]"><TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.stiff }
      /></span> Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          I&apos;m a MERN Stack Developer in Bangladesh. My specialties include designing Interactive websites with CRUD application. I love what I do and truly take pride in producing high-quality work as well as great customer service to my clients.
          </p>
          <a
              href='https://doc-0k-00-docs.googleusercontent.com/docs/securesc/r1iluhb0ij02iie0004ufnfpistm7r68/sqbigfv3t5k6i3sl11dup1pker1tb2gc/1654736025000/17869412803603710737/17869412803603710737/1KkfeLfSQGejRE_ZPg3Jzz44iLDt0PR3E?e=download&ax=ACxEAsbA9oXMSde1Acfqyn7YDbKkAlezECVFMovGCjZakcrf6rM-f0CHV4h225n4091e4T1BuVpqtKa8BVgVVlzVWM9bfVCjH1j17i7to2D3xsQVHWJmp4eIk53srKEkGpOcmqPJ37pg16sC5iS2p9B-KhAg2aTLLJZhAcVVpIPVpLO3FjBAXioI5fhNdrjZmsmuHr6YYJKn8XlZlcOzBCm_Fv35iz1UpDh_Gv-Og1_4f0qnfP-INx5dbrI6AzSiHdAswcrKUCRClPQsBOcEdvoylX9G6zRMYKoHOKCvGTsyNsDWUF42Qhd7lIJ0azp6hlHzyfFFngiscKV5XPdtnS669HCsHz-XqCwhqw8H6J2bF-tbp-h_46zUa-dcwMtzErO_sbdl0ljj2yW6R7kZpwidcq6PFGptaHnXcik-Ppjhv_rJ5X84fU_zVUto8VQCteZOINXYJhA7gww0D-AD8_5CPcs4r0NDotNguovsU7nOs2ToFrJnjx103gXzylAGv1Bafv36RV0vYSCInkb-E0JuUK5ht2RBUq5WBD91sBQQDmNgoX_Cu0OfzVMCbpxU3xDkQW_k0O0wwx4mgAxtX-b5nWFD91-GujEv8jLO03cDrJlDK2zwBFbZLJre71TRwU1J8f34owAmn7RzB0Lm8itNPnkbrinuU_4Kzlp88nZiJ7dze6FMswWdQPCreqtVRnoOszwuJnbY9qCfjrJIU788At-EA7aOX-jQYpOTT-pS9QAs69xKJlweCWq018aftzHOvFtkYK87yaaSkD-FlJIbtjw&authuser=2&nonce=5mpfhjtkm8hqq&user=17869412803603710737&hash=4cojumd1m8njphb5uu3e3vkmvpjf37la'
              target='_blank' rel='noopener noreferrer'
            ><button className="block mx-auto px-4 py-2 rounded-full">Download Resume</button></a>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/saifullah-mansur/'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#0A66C2] hover:text-white ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href='hhttps://github.com/saikot-cse' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#BABBBD] hover:text-black ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-[#067DE7] to-[#0EC8E5] hover:text-white ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#E88025] hover:text-white ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

