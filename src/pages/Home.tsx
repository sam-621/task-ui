import { TabsProvider } from '@/providers'
import { Header } from '../components/sections/Header'
import { Tasks } from '../components/sections/Tasks'

export const Home = () => {
  return (
    <TabsProvider>
      <Header />
      <Tasks />
    </TabsProvider>
  )
}
