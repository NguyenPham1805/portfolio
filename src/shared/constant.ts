import Banner from '@tn/components/sections/Banner'
import About from '@tn/components/sections/About'
import Projects from '@tn/components/sections/Projects'
import Contact from '@tn/components/sections/Contact'
import { Project, Section } from './types'

export const imageCarousels = [
  '/angular.png',
  '/typescript.png',
  '/nodejs.png',
  '/react.png',
  '/nextjs.png',
  '/vue.png',
  '/firebase.png',
  '/tailwindcss.png',
  '/vite.png',
  '/rxjs.png',
]

export const projects: Project[] = [
  {
    title: 'Niwfy',
    classColor: 'text-orange-500',
    description:
      'A comic website made with Angular in 2 month. Api crawl form nettruyen and database from Firebase .\n Some features such as: searching, authentication with Firebase, read comic, rating, comment/reply.',
    tags: ['angular', 'rxjs', 'ngrx', 'firebase', 'nodejs'],
    linkGit: 'https://github.com/NguyenPham1805/Niwfy',
    linkDemo: 'https://niwfy.herokuapp.com',
    thumbs: [
      '/niwfy-thumb1.PNG',
      '/niwfy-thumb2.PNG',
      '/niwfy-thumb3.PNG',
      '/niwfy-thumb4.PNG',
      '/niwfy-thumb5.PNG',
      '/niwfy-thumb6.PNG',
    ],
  },
  {
    title: 'Rem',
    classColor: 'text-cyan-500',
    description:
      'Rem is my wif..., sorry I said some fool. Rem is a movie website made by Vue. Api get from a share api of unknow persion in group IT.\n Some features such as: searching/filter, authentication with Firebase, watch movie, reaction/rating/comment/reply.',
    tags: ['vue3', 'vueX', 'vite', 'tailwindcss', 'firebase', 'typescript', 'nodejs'],
    linkGit: 'https://github.com/NguyenPham1805/rem',
    linkDemo: 'https://remlove.herokuapp.com',
    thumbs: [
      '/rem-thumb1.PNG',
      '/rem-thumb2.PNG',
      '/rem-thumb3.PNG',
      '/rem-thumb4.PNG',
      '/rem-thumb5.PNG',
    ],
  },
  // {
  //   title: 'Anime MV',
  //   classColor: 'text-yellow-400',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, omnis. Cumque doloribus, ullam praesentium, doloremque eaque deleniti blanditiis totam minima provident quae est tempora ipsam magnam? Nihil ea saepe ut possimus tempora! Delectus repudiandae sit eum, reprehenderit aliquam alias doloremque odio dolorum impedit! Impedit distinctio ea nihil? Ipsam, dicta repudiandae!',
  //   tags: ['angular'],
  //   linkGit: 'https://github.com/NguyenPham1805/animemv',
  //   linkDemo: 'https://animemv.netlify.app',
  //   thumbs: ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg', '/slide4.jpg', '/slide5.jpg'],
  // },
  {
    title: 'Ebook',
    classColor: 'text-fuchsia-900',
    description:
      'Ebook is a MEAN stack social network websie. Created learning Node and Typescript 2 weeks :)). Currently the project is running on local.\n With some main features: CURD api, authentication with jwt',
    tags: ['nodejs', 'express', 'jwt', 'angular', 'mongoDB', 'typescript'],
    linkGit: 'https://github.com/NguyenPham1805/express-typescript',
    thumbs: [
      '/eyebook-thumb1.PNG',
      '/eyebook-thumb2.PNG',
      '/eyebook-thumb3.PNG',
      '/eyebook-thumb4.PNG',
      '/eyebook-thumb5.PNG',
    ],
  },
]

export const sections: Section[] = [
  {
    name: 'hello world',
    path: 'hello',
    section: Banner,
  },
  {
    name: 'about me',
    path: 'about',
    section: About,
  },
  {
    name: 'projects',
    path: 'projects',
    section: Projects,
  },
  {
    name: 'contact',
    path: 'contact',
    section: Contact,
  },
]

export const about = ["I'm a web developer", 'gamer challenger', 'supemium wibu', 'single']

export const socialLinks = [
  {
    title: 'Github',
    icon: '/github.png',
    link: 'https://github.com/NguyenPham1805',
  },
  {
    title: 'Facebook',
    icon: '/facebook.png',
    link: 'https://www.facebook.com/profile.php?id=100047705645081',
  },
  {
    title: 'LinkIn',
    icon: '/linkin.png',
    link: 'https://www.linkedin.com/in/nguy%C3%AAn-ph%E1%BA%A1m-17b446250/',
  },
]
