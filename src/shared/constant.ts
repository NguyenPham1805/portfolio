import Home from '@tn/components/icons/Home'
import Mail from '@tn/components/icons/Mail'
import Rocket from '@tn/components/icons/Rocket'
import Star from '@tn/components/icons/Star'
import About from '@tn/components/sections/About'
import Banner from '@tn/components/sections/Banner'
import Contact from '@tn/components/sections/Contact'
import Projects from '@tn/components/sections/Projects'
import { Project, Section } from './types'

export const langs = [
  { locale: 'vi', name: 'Tiếng Việt', thumb: '/vietnamese.jpg' },
  { locale: 'en', name: 'English', thumb: '/english.jpg' },
]

export const imageCarousels = [
  '/carousel/angular.png',
  '/carousel/typescript.png',
  '/carousel/nodejs.png',
  '/carousel/nestjs.png',
  '/carousel/react.png',
  '/carousel/nextjs.png',
  '/carousel/vue.png',
  '/carousel/firebase.png',
  '/carousel/net.png',
]

export const projects: Project[] = [
  {
    title: 'Niwfy',
    classColor: 'text-orange-500',
    description: 'niwfy description',
    tags: ['angular', 'rxjs', 'ngrx', 'firebase', 'nodejs'],
    linkGit: 'https://github.com/NguyenPham1805/Niwfy',
    linkDemo: 'https://niwfy.herokuapp.com',
    thumbs: [
      '/slide/niwfy-thumb1.PNG',
      '/slide/niwfy-thumb2.PNG',
      '/slide/niwfy-thumb3.PNG',
      '/slide/niwfy-thumb4.PNG',
      '/slide/niwfy-thumb5.PNG',
      '/slide/niwfy-thumb6.PNG',
    ],
  },
  {
    title: 'Rem',
    classColor: 'text-cyan-500',
    description: 'rem description',
    tags: ['vue3', 'vueX', 'vite', 'tailwindcss', 'firebase', 'typescript', 'nodejs'],
    linkGit: 'https://github.com/NguyenPham1805/rem',
    linkDemo: 'https://remlove.herokuapp.com',
    thumbs: [
      '/slide/rem-thumb1.PNG',
      '/slide/rem-thumb2.PNG',
      '/slide/rem-thumb3.PNG',
      '/slide/rem-thumb4.PNG',
      '/slide/rem-thumb5.PNG',
    ],
  },
  // {
  //   title: 'Ebook',
  //   classColor: 'text-fuchsia-900',
  //   description: 'ebook description',
  //   tags: ['nodejs', 'express', 'jwt', 'angular', 'mongoDB', 'typescript'],
  //   linkGit: 'https://github.com/NguyenPham1805/express-typescript',
  //   thumbs: [
  //     '/slide/eyebook-thumb1.PNG',
  //     '/slide/eyebook-thumb2.PNG',
  //     '/slide/eyebook-thumb3.PNG',
  //     '/slide/eyebook-thumb4.PNG',
  //     '/slide/eyebook-thumb5.PNG',
  //   ],
  // },
]

export const sections: Section[] = [
  {
    name: 'hello world',
    path: 'hello',
    section: Banner,
    icon: Home,
  },
  {
    name: 'about me',
    path: 'about',
    section: About,
    icon: Star,
  },
  {
    name: 'projects',
    path: 'projects',
    section: Projects,
    icon: Rocket,
  },
  {
    name: 'contact',
    path: 'contact',
    section: Contact,
    icon: Mail,
  },
]

export const about = ['about1', 'about2', 'about3', 'about4']

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
