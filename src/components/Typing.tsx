import React, { useRef, useEffect, memo, useState } from 'react'

interface TypingProps {
  texts: string[]
  loop?: boolean
  delay?: number
  stepDelay?: number
  loopDelay?: number
  wait?: number
  prefixLenght?: number
  className?: string
  wrapper?: any
}

const Typing: React.FC<TypingProps> = ({
  texts,
  loop = true,
  delay = 100,
  stepDelay = 1000,
  loopDelay = 0,
  wait = 0,
  prefixLenght = 0,
  className,
  wrapper = 'p'
}) => {
  const [isTyping, setIsTyping] = useState(false)
  const typingRef = useRef<Element>(null)
  const run = useRef(false)
  const [done, setDone] = useState(true)
  const Component = wrapper as any

  useEffect(() => {
    const el = typingRef.current
    if (!run.current || !el) {
      run.current = !run.current
      return
    }

    let l = 0,
      i = 0

    const removingWord = (text: string) => {
      if (i >= text.length * 2 || el.textContent!.length <= prefixLenght) {
        l++
        typeNextLine()
      } else {
        el.textContent = el.textContent!.substring(0, el.textContent!.length - 1)
        i++
        setTimeout(() => {
          removingWord(text)
        }, delay)
      }
    }

    const typingWord = (text: string) => {
      if (i >= text.length) {
        setIsTyping(false)
        if (!loop) return setDone(true)
        if (l >= texts.length - 1 && loopDelay) {
          setTimeout(() => {
            removingWord(text)
            setIsTyping(true)
          }, loopDelay)
        } else {
          setTimeout(() => {
            removingWord(text)
            setIsTyping(true)
          }, stepDelay)
        }
      } else {
        el.textContent += text[i]
        i++
        setTimeout(() => {
          typingWord(text)
        }, delay)
      }
    }

    const typeNextLine = () => {
      i = 0

      if (l >= texts.length) {
        el.textContent = ''
        l = 0
      }
      setIsTyping(true)
      typingWord(texts[l])
    }

    setTimeout(() => {
      typeNextLine()
      setDone(false)
    }, wait)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Component
      ref={typingRef}
      className={`${done ? 'after:content-[""]' : "after:content-['|']"} ${className} ${
        !isTyping && 'cursor-idle'
      }`}
    />
  )
}

export default memo(Typing)
