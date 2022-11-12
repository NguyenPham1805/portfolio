import { createContext } from 'react'

const ToastContext = createContext<string[]>([])

export default ToastContext
