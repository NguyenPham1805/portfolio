import React, { FC, useEffect, useState } from 'react'

interface TDCarouselProps {
  children: React.ReactNode[]
  timeOffset?: number
}

const TDCarousel: FC<TDCarouselProps> = ({ children, timeOffset = 5000 }) => {
  const [index, setIndex] = useState(0)

  const handleChangeIndex = (i: number) => {
    if (i > children.length - 1) setIndex(0)
    else if (i < 0) setIndex(children.length - 1)
    else setIndex(i)
  }

  const slideClassname = (i: number): string => {
    if (i === index) return 'active'
    else if (i === index + 1 || (index === children.length - 1 && i === 0)) return 'next-1'
    else if (
      i === index + 2 ||
      (index === children.length - 1 && i === 1) ||
      (index === children.length - 2 && i === 0)
    )
      return 'next-2'
    else if (i === index - 1 || (index === 0 && i === children.length - 1)) return 'prev-2'
    else if (
      i === index - 2 ||
      (index === 0 && i === children.length - 2) ||
      (index === 1 && i === children.length - 1)
    )
      return 'prev-1'
    return 'idle'
  }

  useEffect(() => {
    const autoPlayId = setInterval(() => {
      handleChangeIndex(index + 1)
    }, timeOffset)

    return () => clearInterval(autoPlayId)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="carousel-container">
      {children.map((child, i) => (
        <div
          className={`carousel-item ${slideClassname(i)}`}
          key={i}
          onClick={() => handleChangeIndex(i)}
        >
          {child}
        </div>
      ))}

      {/* <nav className="carousel-navigation">
        <button className="carousel-navbtn" onClick={() => handleChangeIndex(index + 1)}></button>
        <button className="carousel-navbtn" onClick={() => handleChangeIndex(index - 1)}></button>
      </nav> */}
    </div>
  )
}

export default React.memo(TDCarousel)
