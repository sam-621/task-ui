import { Tab } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react'
import { useTabsContext } from '../../providers/Tabs'

export const TabsContainer: FC<Props> = ({ tabs, contents }) => {
  const { setTabSelected } = useTabsContext()

  return (
    <Tab.Group onChange={(e) => setTabSelected(e)}>
      <div className="flex flex-col gap-6 md:grid grid-cols-tabs-container">
        <Tab.List className="rounded-md p-1 flex gap-4 justify-around mt-3 md:flex-col md:justify-center">
          {tabs.map((tab) => (
            <Tab key={tab} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? 'bg-sub-card text-primary' : 'text-subtitle'
                  } text-center rounded text-base outline-none w-full p-2 md:text-left`}
                >
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-5">
          {contents.map((content, i) => (
            <Tab.Panel key={i} className="bg-card w-full rounded-xl">
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

type Props = {
  tabs: string[]
  contents: ReactNode[]
}
