import { FC, PropsWithChildren, ReactNode } from 'react'

import { CustomTab } from '@/interfaces'

import { TabsContainer } from '../custom/TabsContainer'
import { HeaderBar } from '../organisms/HeaderBar'

export const MainLayout: FC<PropsWithChildren<Props>> = ({ title, tabs, contents }) => {
  return (
    <div className="h-screen max-w-[672px] mt-4 mx-7 md:mx-auto md:mt-20">
      <HeaderBar title={title} />
      <TabsContainer tabs={tabs} contents={contents} />
    </div>
  )
}

type Props = {
  title: string
  tabs: CustomTab[]
  contents: ReactNode[]
}
