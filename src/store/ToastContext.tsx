import { createContext, FC, useState } from 'react'

interface InitialStateType {
  toasts: string[]
  pushToast: (message: string) => void
  removeToast: (index: number) => void
}

const initialState: InitialStateType = { toasts: [], pushToast: () => {}, removeToast: () => {} }

export const ToastContext = createContext<InitialStateType>(initialState)

const ToastProvider: FC<{ children: any }> = ({ children }) => {
  const [toasts, setToast] = useState<string[]>([])

  const pushToast = (message: string) => {
    setToast((prevToasts) => [...prevToasts, message])
  }

  const removeToast = (index: number) => {
    setToast((prevToasts) => prevToasts.filter((_, i) => i !== index))
  }

  return (
    <ToastContext.Provider value={{ toasts, pushToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
