import { FC, Fragment, ReactNode } from 'react'

import { Tab } from '@headlessui/react'

import { CustomTab } from '@/interfaces'

export const TabsContainer: FC<Props> = ({ tabs, contents }) => {
  return (
    <Tab.Group as="main" className="flex flex-col gap-6 md:grid grid-cols-tabs-container">
      <Tab.List className="rounded-md p-1 flex gap-4 justify-around mt-3 md:flex-col">
        {tabs.map((tab, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tab key={i} as={Fragment}>
            {({ selected }) => (
              <button
                type="button"
                className={`${
                  selected ? 'bg-sub-card text-primary' : 'text-subtitle'
                } text-center rounded text-base outline-none w-full p-2 md:text-left flex items-center gap-2`}
              >
                <div>{tab.icon}</div>
                {tab.title}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-5">
        {contents.map((content, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tab.Panel key={i} className="bg-card w-full">
            {content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

type Props = {
  tabs: CustomTab[]
  contents: ReactNode[]
}
