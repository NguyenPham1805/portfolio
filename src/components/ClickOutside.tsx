import { FC, useEffect, useRef } from 'react'

interface ClickOutsideProps {
  onClickOutside: () => void
  children: any
}

const ClickOutside: FC<ClickOutsideProps> = ({ onClickOutside, children }) => {
  const childrenRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = (e: any) => {
      if (childrenRef.current && !childrenRef.current.contains(e.target)) {
        onClickOutside()
      }
    }

    window.addEventListener('click', handler)

    return () => window.removeEventListener('click', handler)
  }, [onClickOutside])

  return <>{children(childrenRef)}</>
}

export default ClickOutside
