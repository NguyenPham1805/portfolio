import { SectionProps } from '@tn/shared/types'
import { FC, memo } from 'react'
import Canvas from '../Canvas'

const Banner: FC<SectionProps> = () => {
  return (
    <div className="section">
      <Canvas />

      <svg className="banner-svg z-10 relative" viewBox="0 0 1500 600">
        <text
          className="banner-text text-[10rem] sm:text-[6rem]"
          x="50%"
          y="40%"
          textAnchor="middle"
          fill="#fff"
        >
          Trung Nguyen
        </text>
      </svg>

      <h2 className="w-full z-10 text-center absolute top-[55%] text-3xl left-1/2 -translate-x-1/2">{`I'm a web developer`}</h2>

      <a
        className="z-10 p-1 absolute top-[70%] left-1/2 -translate-x-1/2 scroll-down"
        href="#about"
      >
        <span className="w-5 h-5 absolute block border-zinc-200 border-r-4 border-b-4 rotate-45 slide1"></span>
        <span className="w-5 h-5 absolute block border-zinc-200 border-r-4 border-b-4 rotate-45 slide2"></span>
        <span className="w-5 h-5 absolute block border-zinc-200 border-r-4 border-b-4 rotate-45 slide3"></span>
      </a>
    </div>
  )
}

export default memo(Banner)
