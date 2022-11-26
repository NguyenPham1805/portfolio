import { FC, useCallback, useEffect, useState } from 'react'
import CarouselIndicator from './CarouselIndicator'

interface FadeCarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  indicatorClassName?: string
  navigationPosition?: {
    top?: number
    right?: number
    left?: number
    bottom?: number
  }
}

const FadeCarousel: FC<FadeCarouselProps> = ({
  children,
  autoPlay = true,
  indicatorClassName,
  navigationPosition,
}) => {
  const [index, setIndex] = useState(0)

  const handleChangeIndex = useCallback(
    (i: number) => {
      if (i > children.length - 1) setIndex(0)
      else if (i < 0) setIndex(children.length - 1)
      else setIndex(i)
    },
    [children.length]
  )

  const slideClassname = (i: number): string => {
    if (i < index) return '-left-full hidden'
    else if (i > index) return '-right-full hidden'
    else return 'left-0 z-10 flex'
  }

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      handleChangeIndex(index + 1)
    }, 5000)

    return () => clearInterval(interval)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {children.map((child, i) => (
        <div
          className={`absolute fade justify-center text-3xl items-center w-full h-full transition-all duration-300 ${slideClassname(
            i
          )}`}
          key={i}
        >
          {child}
        </div>
      ))}

      <CarouselIndicator
        currentIndex={index}
        handleChangeIndex={handleChangeIndex}
        items={children}
        position={navigationPosition}
        className={indicatorClassName}
      />
    </div>
  )
}

export default FadeCarousel
