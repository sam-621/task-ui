import { toast, ToastOptions } from 'react-toastify'

const config: ToastOptions = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
}

export const useNotify = () => {
  const success = (msg: string) => {
    toast.success(msg, config)
  }
  const warning = (msg: string) => {
    toast.warning(msg, config)
  }
  const error = (msg: string) => {
    toast.error(msg, config)
  }
  return {
    success,
    warning,
    error,
  }
}
