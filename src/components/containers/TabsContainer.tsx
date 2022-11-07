import { Tab } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react'
import { useTabsContext } from '../../contexts/Tabs.context'

export const TabsContainer: FC<Props> = ({ tabs, contents }) => {
  const { setTabSelected } = useTabsContext()

  return (
    <Tab.Group onChange={(e) => setTabSelected(e)}>
      <Tab.List className="bg-[#9333EA0F] rounded-md p-1 flex justify-around mt-3">
        {tabs.map((tab) => (
          <Tab key={tab} as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected && 'bg-white'
                } text-primary rounded  outline-none text-sm w-full py-2`}
              >
                {tab}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-5">
        {contents.map((content, i) => (
          <Tab.Panel key={i}>{content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

type Props = {
  tabs: string[]
  contents: ReactNode[]
}
