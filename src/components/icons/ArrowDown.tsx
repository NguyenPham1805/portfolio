import { FC } from 'react'

const ArrowDown: FC<{ color: string }> = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={color}>
      <path d="M10 12 6 8h8Z" />
    </svg>
  )
}

export default ArrowDown
