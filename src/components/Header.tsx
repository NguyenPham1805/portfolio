import { FC, useEffect, memo, useState, useRef } from 'react'

import { sections } from '@tn/shared/constant'

interface HeaderProps {
  section: number
}

const Header: FC<HeaderProps> = ({ section: currentIndex }) => {
  const navRef = useRef<HTMLElement>(null)
  const [animateBarWidth, setAnimateBarWidth] = useState(0)
  const [animateBarPosition, setAnimateBarPosition] = useState(0)

  const handleActiveNavItem = () => {
    const navItemActive = document.querySelector<HTMLLIElement>('li.active')
    setAnimateBarWidth(navItemActive?.offsetWidth || 0)
    setAnimateBarPosition(navItemActive?.offsetLeft || 0)
  }

  useEffect(() => {
    const navItems = document.querySelectorAll<HTMLLIElement>('.nav-item')

    navItems.forEach((item) => {
      item?.addEventListener('mouseover', () => {
        setAnimateBarWidth(item?.offsetWidth)
        setAnimateBarPosition(item?.offsetLeft)
      })

      item?.addEventListener('mouseout', handleActiveNavItem)
    })
  }, [])

  useEffect(() => {
    handleActiveNavItem()

    if (currentIndex > 0) navRef.current?.classList.add('bg-so-dark')
    else navRef.current?.classList.remove('bg-so-dark')
  }, [currentIndex])

  return (
    <nav
      className="flex w-full h-14 fixed items-center justify-center z-10 transition-all duration-500"
      ref={navRef}
    >
      <ul className="h-full relative flex">
        {sections.map((section, index) => {
          return (
            <li
              className={'nav-item h-full' + (currentIndex === index ? ' active' : '')}
              key={section.path}
            >
              <a
                className="h-full px-3 flex items-center capitalize text-xl btn-link"
                href={`#${section.path}`}
              >
                {section.name}
              </a>
            </li>
          )
        })}

        <div
          className="absolute top-0 bg-main-color h-1 z-10 transition-all duration-300 ease-in-expo"
          style={{ width: animateBarWidth, left: animateBarPosition }}
        ></div>
      </ul>
    </nav>
  )
}

export default memo(Header)
