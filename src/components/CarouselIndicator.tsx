import React, { FC } from 'react'

interface CarouselIndicatorProps {
  items: any[]
  currentIndex: number
  handleChangeIndex: Function
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  items,
  handleChangeIndex,
  currentIndex
}) => {
  return (
    <nav className="flex justify-center absolute z-10 bottom-6 w-full">
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
