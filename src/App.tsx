import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { useUserId } from './hooks/useUserId'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { BodyLayout } from '@/layouts'

export const queryClient = new QueryClient()

function App() {
  useUserId()
  return (
    <QueryClientProvider client={queryClient}>
      <BodyLayout>
        <Home />
      </BodyLayout>
      <ToastContainer
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
      />
    </QueryClientProvider>
  )
}

export default App
