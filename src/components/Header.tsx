import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, memo, useEffect, useMemo, useState } from 'react'

import { langs, sections } from '@tn/shared/constant'
import { useTranslation } from 'next-i18next'
import ClickOutside from './ClickOutside'
import ArrowDown from './icons/ArrowDown'

interface HeaderProps {
  section: number
}

const Header: FC<HeaderProps> = ({ section: currentIndex }) => {
  const router = useRouter()
  const { t } = useTranslation('header')
  const [switchLangOpen, setSwtichLangOpen] = useState(false)
  const [animateBarWidth, setAnimateBarWidth] = useState(0)
  const [animateBarPosition, setAnimateBarPosition] = useState(0)

  const currentLang = useMemo(
    () => langs.find((lang) => lang.locale === (router.locale || 'en')),
    [router.locale]
  )

  const handleActiveNavItem = () => {
    const navItemActive = document.querySelector<HTMLLIElement>('.header li.active')
    setAnimateBarWidth(navItemActive?.offsetWidth || 0)
    setAnimateBarPosition(navItemActive?.offsetLeft || 0)
  }

  const handleSwitchLangOpen = () => {
    setTimeout(() => {
      setSwtichLangOpen(!switchLangOpen)
    }, 0)
  }

  const handleChangeLang = (locale: string) => {
    setSwtichLangOpen(false)

    if (router.locale === locale) return

    const { pathname, asPath, query } = router

    router.replace({ pathname, query }, asPath, {
      locale,
      shallow: true,
    })

    setTimeout(handleActiveNavItem, 0)
  }

  useEffect(() => {
    const navItems = document.querySelectorAll<HTMLLIElement>('.header .nav-item')

    navItems.forEach((item) => {
      item?.addEventListener('mouseover', () => {
        setAnimateBarWidth(item?.offsetWidth)
        setAnimateBarPosition(item?.offsetLeft)
      })

      item?.addEventListener('mouseout', handleActiveNavItem)
    })
  }, [])

  useEffect(handleActiveNavItem, [currentIndex])

  return (
    <nav className="header flex lazy w-full h-14 px-[5%] fixed items-center justify-between z-10 transition-all duration-500">
      <h1 className="text-2xl mb:text-3xl font-thin">Trung Nguyen</h1>

      <ul className="h-full relative hidden md:flex">
        {sections.map((section, index) => {
          return (
            <li
              className={'nav-item h-full' + (currentIndex === index ? ' active' : '')}
              key={section.path}
            >
              <a
                className="h-full px-3 flex items-center capitalize text-xl btn-link text-center"
                href={`#${section.path}`}
              >
                {t(section.name)}
              </a>
            </li>
          )
        })}

        <div
          className="absolute top-0 bg-main-color h-1 z-10 pointer-events-none transition-all duration-300 ease-in-expo"
          style={{ width: animateBarWidth, left: animateBarPosition }}
        ></div>
      </ul>

      <div className="flex h-full items-center mb:gap-5">
        <div className="relative">
          <button
            className="flex mb:items-center mb:gap-2 mb:border mb:rounded-sm px-2 py-1"
            title={t('switch language')}
            onClick={handleSwitchLangOpen}
          >
            <span className="hidden mb:inline">{currentLang!.name}</span>

            <Image src={currentLang!.thumb} width={25} height={15} alt="" />

            <div className="mb:hidden">
              <ArrowDown color="#fff" />
            </div>
          </button>

          {switchLangOpen && (
            <ClickOutside onClickOutside={() => setSwtichLangOpen(false)}>
              {(ref: any) => (
                <ul ref={ref} className="absolute flex flex-col rounded w-max py-2 bg-so-dark">
                  {langs.map(({ locale, name, thumb }) => (
                    <li className="w-full" key={locale}>
                      <button
                        className="h-full flex gap-4 items-center w-full hover:bg-dark px-4 py-2 transition-all"
                        onClick={() => handleChangeLang(locale)}
                      >
                        <div className="w-fit h-fit flex-shrink-0 relative">
                          <Image src={thumb} alt="" width={25} height={15} />
                        </div>
                        <span className="text-center">{name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </ClickOutside>
          )}
        </div>

        {/* <a href="/TrungNguyenCV.pdf" download="TrungNguyenCV">
          {t('Download CV')}
        </a> */}
      </div>
    </nav>
  )
}

export default memo(Header)
