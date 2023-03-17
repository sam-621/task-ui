import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { Toaster } from 'react-hot-toast'

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
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
