import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { TabsContextSchema } from '../interfaces/tabs-context'

export const TabsContext = createContext<TabsContextSchema>({
  tabSelected: 0,
  setTabSelected: () => null,
})

export const TabsProvider: FC<Props> = ({ children }) => {
  const [tabSelected, setTabSelected] = useState(0)

  return (
    <TabsContext.Provider value={{ tabSelected, setTabSelected }}>{children}</TabsContext.Provider>
  )
}

type Props = {
  children: ReactNode
}

export const useTabsContext = () => useContext(TabsContext)
