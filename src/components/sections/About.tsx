import Image from 'next/image'
import { FC, useEffect, useMemo, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'next-i18next'

import Typing from '../Typing'
import { about, imageCarousels } from '@tn/shared/constant'
import { SectionProps } from '@tn/shared/types'

const About: FC<SectionProps> = ({ currentIndex }) => {
  const { t } = useTranslation('about')
  const [run, setRun] = useState(false)
  const title = useMemo(() => [t('Hi, my fullname is Pham Trung Nguyen')], [t])
  const texts = useMemo(() => about.map((item) => t(item)), [t])

  useEffect(() => {
    if (run || currentIndex !== 1) return
    setRun(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  return (
    <div className="section">
      <div className="flex flex-col gap-8 sm:flex-row justify-center items-center px-[5%]">
        <div className="rounded-full overflow-hidden">
          <Image width={225} height={225} src="/avatar.png" alt="" />
        </div>

        <div className="flex gap-4 w-[75vw] md:w-[60vw] flex-col">
          {run && (
            <Typing className="text-xl sm:text-2xl" loop={false} texts={title} wrapper="h2" />
          )}

          {run && (
            <Typing
              className="text-3xl sm:text-2xl text-main-color"
              wait={title[0].length * 100 + 1000}
              prefixLenght={6}
              loopDelay={100}
              stepDelay={2000}
              texts={texts}
              wrapper="h2"
            />
          )}

          <p className="text-lg sm:text-xl sm:pr-[10%]">{t('intro')}</p>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-20 overflow-hidden">
        <h3 className="text-2xl sm:text-3xl text-center">{t('techs intro')}</h3>

        <Marquee className="flex mt-4" gradientColor={[0, 0, 0]}>
          {imageCarousels.map((image) => (
            <Image
              width={180}
              height={100}
              src={image}
              title={image.substring(1, image.length - 4)}
              alt=""
              key={image}
            />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default About
