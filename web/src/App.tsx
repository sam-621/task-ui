import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { Toaster } from 'react-hot-toast'

import 'react-toastify/dist/ReactToastify.css'
import { BodyLayout } from '@/layouts'
import { useUserId } from '@/hooks'

export const queryClient = new QueryClient()

function App() {
  useUserId()
  return (
    <QueryClientProvider client={queryClient}>
      <BodyLayout>
        <Home />
      </BodyLayout>
      {/* <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
