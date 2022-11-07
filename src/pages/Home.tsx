import { Header } from '../components/sections/Header'
import { Tasks } from '../components/sections/Tasks'
import { TabsProvider } from '../contexts/Tabs.context'

export const Home = () => {
  return (
    <TabsProvider>
      <Header />
      <Tasks />
    </TabsProvider>
  )
}
