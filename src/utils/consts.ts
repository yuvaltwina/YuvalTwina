import { GoCodescan } from 'react-icons/go';
import { LuBookOpenCheck } from 'react-icons/lu';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { TprojectsInformation } from './types';

export const CARDS_INFORMATION = [
  {
    title: 'Backend developer',
    text: 'Talent for resolving bugs, developing new features, refactoring existing programs, as well as implementing clean quality code',
    technologies: ['NodeJs', 'Express', 'Mongoose', 'MongoDB'],
    IconCompononet: AiOutlineCloudServer,
  },
  {
    title: 'Frontend developer',
    text: 'Adept at analyzing requirements to ensure optimal performance, quality, and responsiveness of applications',
    technologies: [
      'Typescript',
      'JavaScript',
      'React.js',
      'Html',
      'Css',
      'Sass',
      'react-query',
      'Material UI',
      'Framer Motion',
    ],
    IconCompononet: GoCodescan,
  },
  {
    title: 'General',
    text: 'Passionate about coding projects from scratch and enjoy bringing ideas to life. keep on learning and improving on a daily basis',
    technologies: [
      'GIT',
      'Github',
      'Figma',
      'Vercel',
      'Render',
      'SendGrid',
      'Cloudinary',
    ],
    IconCompononet: LuBookOpenCheck,
  },
];
export const LINKEDIN_LINK =
  'https://www.linkedin.com/in/yuval-twina-b94243264';
export const GITHUB_LINK = 'https://github.com/yuvaltwina';
export const PROJECTS_INFORMATION: TprojectsInformation = {
  Psychologist: {
    about: 'this is a psychologist website so you can bla bla',
    description: ['bla1', 'bla', 'bla', 'bla', 'bla'],
    technologies: ['baaaala', 'aaaa', 'blaaaa', 'blaaa', 'blaaaa'],
  },
  Pawtner: {
    about: 'this is a dog adopation website so you can bla bla',

    description: ['bla2', 'bla', 'bla', 'bla', 'bla'],
    technologies: ['baaaala', 'aaaa', 'blaaaa', 'blaaa', 'blaaaa'],
  },
  GlobalWeather: {
    about: 'this is a global weather website so you can bla bla',
    description: ['bla3', 'bla', 'bla', 'bla', 'bla'],
    technologies: ['baaaala', 'aaaa', 'blaaaa', 'blaaa', 'blaaaa'],
  },
};
export const PROJECTS_TITELS = [...Object.keys(PROJECTS_INFORMATION)];
