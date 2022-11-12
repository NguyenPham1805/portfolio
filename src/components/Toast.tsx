import { useContext, FC, useEffect, useRef } from 'react'
import ToastContext from '@tn/store/ToastContext'

interface ToastItemProps {
  message: string
  index: number
}

const ToastItem: FC<ToastItemProps> = ({ message, index }) => {
  const toast = useContext(ToastContext)
  const timeOutId = useRef<NodeJS.Timeout | null>(null)

  const handleDismis = () => {
    if (timeOutId.current) clearTimeout(timeOutId.current)
    toast.splice(index, 1)
  }

  useEffect(() => {
    timeOutId.current = setTimeout(() => {
      toast.splice(index, 1)
    }, 5000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full flex gap-4 px-4 py-2 bg-so-dark rounded-md">
      <p className="clamp">{message}</p>

      <button className="flex-shrink-0 text-blue-900 hover:text-opacity-50" onClick={handleDismis}>
        Dismis
      </button>
    </div>
  )
}

const Toast = () => {
  const toast = useContext(ToastContext)

  return (
    <div className="fixed right-5 bottom-5 flex flex-col z-50 gap-4">
      {toast.map((item, i) => (
        <ToastItem message={item} key={item} index={i} />
      ))}
    </div>
  )
}

export default Toast
