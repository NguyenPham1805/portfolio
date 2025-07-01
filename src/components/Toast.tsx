import { ToastContext } from '@tn/store/ToastContext'
import { FC, useContext, useEffect, useRef } from 'react'

interface ToastItemProps {
  message: string
  index: number
}

const ToastItem: FC<ToastItemProps> = ({ message, index }) => {
  const { removeToast } = useContext(ToastContext)
  const timeOutId = useRef<NodeJS.Timeout | null>(null)

  const handleDismiss = () => {
    if (timeOutId.current) clearTimeout(timeOutId.current)
    removeToast(index)
  }

  useEffect(() => {
    timeOutId.current = setTimeout(() => {
      removeToast(index)
    }, 5000)
  }, [])

  return (
    <div className="w-full flex gap-4 px-4 py-2 bg-so-dark rounded-md">
      <p className="clamp">{message}</p>

      <button className="flex-shrink-0 text-blue-900 hover:text-opacity-50" onClick={handleDismiss}>
        Dismiss
      </button>
    </div>
  )
}

const Toast = () => {
  const { toasts } = useContext(ToastContext)

  useEffect(() => {
    console.log('Toast component rendered with messages:', toasts)
  }, [toasts])

  return (
    <div className="fixed right-5 bottom-5 flex flex-col z-50 gap-4">
      {toasts.map((item, i) => (
        <ToastItem message={item} key={item} index={i} />
      ))}
    </div>
  )
}

export default Toast
