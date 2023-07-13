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
    about:
      'A beautiful responsive website that I built and designed for my client, a clinic psychologist.',
    description: [
      'Email Sending, Convenient email functionality for direct communication.',
      'Contact Form, Integrated contact form for easy communication.',
      'Attractive Design, Visually appealing and attractive website.',
      'Easy Navigation, Intuitive interface for seamless browsing.',
    ],
    technologies: ['Typescript', 'Sass/Css', 'Material UI', 'EmailJS'],
    websiteUrl: 'https://shaharbraverman.com/',
  },
  Pawtner: {
    about:
      "A social network web app designed to simplify the process of dog adoption. Connect with passionate dog lovers and adoption centers, making it easier than ever to find the furry friend that's right for you.",
    description: [
      'Enable precise dog search using custom search parameters, enhancing the user experience.',
      'Implement a secure login system that includes email verification.',
      'Built Admin dashboard to monitor data.',
      'bla',
      'bla',
    ],
    technologies: [
      'NodeJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'Typescrpit',
      'React',
      'CSS',
      'MatirialUI',
      'SendGrid',
      'Cloudinary',
    ],
    websiteUrl: 'https://pawtner-client.vercel.app/',
  },
  GlobalWeather: {
    about:
      'A simple, responsive web app built in React that displays the weather and time of a chosen city.',
    description: [
      'Dynamic icons for up-to-date weather information.',
      'Interactive Clock with Moving Dials',
      'City Time and Time Zone Display',
      'Searchbar support Autocomplete',
      'Dark/Light Theme Mode Support',
    ],
    technologies: ['Javascript', 'React', 'CSS', 'Material UI'],
    websiteUrl: 'https://global-weather-mu.vercel.app/',
  },
};
export const PROJECTS_TITELS = [...Object.keys(PROJECTS_INFORMATION)];
