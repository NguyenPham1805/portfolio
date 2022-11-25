import { useTranslation } from 'next-i18next'
import React, { FC, useEffect, useState } from 'react'
import { sections } from '@tn/shared/constant'

interface MobileLayoutProps {
  section: number
}

const MobileLayout: FC<MobileLayoutProps> = ({ section: currentIndex }) => {
  const { t } = useTranslation('header')
  const [animateBarWidth, setAnimateBarWidth] = useState(0)
  const [animateBarPosition, setAnimateBarPosition] = useState(0)

  const handleActiveNavItem = () => {
    const navItemActive = document.querySelector<HTMLLIElement>('.footer li.active')
    setAnimateBarWidth(navItemActive?.offsetWidth || 0)
    setAnimateBarPosition(navItemActive?.offsetLeft || 0)
  }

  useEffect(handleActiveNavItem, [currentIndex])

  return (
    <nav className="footer lazy flex w-full md:hidden px-[5%] fixed left-0 bottom-0 items-center justify-center z-10">
      <ul className="h-full relative flex">
        {sections.map(({ path, icon: Icon, name }, index) => {
          return (
            <li
              className={'nav-item h-full' + (currentIndex === index ? ' active' : '')}
              key={path}
            >
              <a
                className="flex flex-col h-full px-5 py-2 mb:px-3 mb:py-1 items-center capitalize text-xl btn-link"
                href={`#${path}`}
              >
                <Icon color="#fff" />
                <span className="hidden mb:inline text:xs">{t(name)}</span>
              </a>
            </li>
          )
        })}

        <div
          className="absolute bottom-0 bg-main-color h-1 z-10 pointer-events-none transition-all duration-300 ease-in-expo"
          style={{ width: animateBarWidth, left: animateBarPosition }}
        ></div>
      </ul>
    </nav>
  )
}

export default MobileLayout
