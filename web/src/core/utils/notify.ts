import { Toast, toast } from 'react-hot-toast'
type NotifyConfig =
  | Partial<
      Pick<
        Toast,
        'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'
      >
    >
  | undefined

const defaultConfig: NotifyConfig = {
  duration: 5000,
}

export const notify = {
  success: (msg: string, config?: NotifyConfig): string =>
    toast.success(msg, { ...defaultConfig, ...config }),
  warning: (msg: string, config?: NotifyConfig): string =>
    toast(msg, { ...defaultConfig, ...config }),
  error: (msg: string, config?: NotifyConfig): string =>
    toast.error(msg, { ...defaultConfig, ...config }),
  loading: (msg: string, config?: NotifyConfig): string =>
    toast.loading(msg, { ...defaultConfig, ...config }),
}
