import { TabsProvider } from '@/providers'
import { Header } from '../core/components/sections/Header'
import { Tasks } from '../core/components/sections/Tasks'

export const Home = () => {
  return (
    <TabsProvider>
      <Header />
      <Tasks />
    </TabsProvider>
  )
}
