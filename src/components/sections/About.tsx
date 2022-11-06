import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

import Typing from '../Typing'
import { about, imageCarousels } from '@tn/shared/constant'
import { SectionProps } from '@tn/shared/types'

const About: FC<SectionProps> = ({ currentIndex }) => {
  const title = 'Hi, my fullname is Pham Trung Nguyen'
  const [run, setRun] = useState(false)

  useEffect(() => {
    if (currentIndex === 1) setRun(true)
  }, [currentIndex])

  return (
    <div className="section">
      <div className="flex flex-col gap-8 sm:flex-row justify-center items-center px-[5%]">
        <div className="rounded-full overflow-hidden">
          <Image width={225} height={225} src="/avatar.png" alt="" />
        </div>

        <div className="flex gap-4 w-[75vw] md:w-[60vw] flex-col">
          {run && (
            <Typing className="text-xl sm:text-2xl" loop={false} texts={[title]} wrapper="h2" />
          )}

          {run && (
            <Typing
              className="text-3xl sm:text-2xl text-main-color"
              wait={title.length * 100 + 2000}
              prefixLenght={6}
              loopDelay={100}
              stepDelay={2000}
              texts={about}
              wrapper="h2"
            />
          )}

          <p className="text-lg sm:text-xl sm:pr-[10%]">
            {`Have a great passion for programming, have a great dreams also related with programming.
            Build the greates project I've ever thought of. So i always learning and learning new technologies,
            learn everything about programming.`}
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-20 overflow-hidden">
        <h3 className="text-2xl sm:text-3xl text-center">Techs I use every day</h3>

        <Marquee className="flex mt-4" gradientColor={[0, 0, 0]}>
          {imageCarousels.map((image) => (
            <Image width={180} height={100} src={image} alt="" key={image} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default About
