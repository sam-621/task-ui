import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { BodyLayout } from './components/layout/BodyLayout'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BodyLayout>
        <Home />
      </BodyLayout>
    </QueryClientProvider>
  )
}

export default App
