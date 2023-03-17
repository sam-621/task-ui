import { TabsProvider } from '@/providers'
import { Header, Tasks } from '@/sections'

export const HomeView = () => {
  return (
    <TabsProvider>
      <Header />
      <Tasks />
    </TabsProvider>
  )
}
