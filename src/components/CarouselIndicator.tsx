import React, { FC } from 'react'

interface CarouselIndicatorProps {
  items: any[]
  currentIndex: number
  handleChangeIndex: Function
  className?: string
  position?: {
    top?: number
    right?: number
    left?: number
    bottom?: number
  }
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  items,
  handleChangeIndex,
  currentIndex,
  className = 'bottom-20',
  position,
}) => {
  return (
    <nav
      className={'flex justify-center absolute z-10 w-full ' + className}
      style={{ ...position }}
    >
      <ul className="flex gap-4 sm:gap-6">
        {items.map((_, i) => (
          <li key={i}>
            <button
              className={
                'cursor-pointer transition-all p-1 rotate-45 border ' +
                (currentIndex === i ? 'border-white' : 'border-transparent')
              }
              onClick={() => handleChangeIndex(i)}
            >
              <span className="block w-2 h-2 bg-white"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(CarouselIndicator)
