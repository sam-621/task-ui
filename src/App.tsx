import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { BodyLayout } from './components/layout/BodyLayout'
import { useUserId } from './hooks/useUserId'

export const queryClient = new QueryClient()

function App() {
  useUserId()
  return (
    <QueryClientProvider client={queryClient}>
      <BodyLayout>
        <Home />
      </BodyLayout>
    </QueryClientProvider>
  )
}

export default App
