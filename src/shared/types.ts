export interface Section {
  name: string
  path: string
  section: any
  icon: any
}

export interface Project {
  title: string
  classColor: string
  description: string
  linkGit: string
  linkDemo?: string
  tags: string[]
  thumbs: string[]
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}

export interface SectionProps {
  currentIndex: number
}
