import { Tab } from '@headlessui/react'
import { FC, ReactNode } from 'react'

export const TabsContainer: FC<Props> = ({ tabs, contents }) => {
  return (
    <Tab.Group>
      <Tab.List>
        {tabs.map((tab) => (
          <Tab>{tab}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {contents.map((content) => (
          <Tab.Panel>{content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

type Props = {
  tabs: string[]
  contents: ReactNode[]
}
