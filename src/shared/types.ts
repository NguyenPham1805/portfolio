export interface Section {
  name: string
  path: string
  section: any
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

export interface SectionProps {
  currentIndex: number
}
