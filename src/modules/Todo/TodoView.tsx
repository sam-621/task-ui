import { FC } from 'react'

import { DocumentArrowUpIcon } from '@heroicons/react/24/solid'

import { MainLayout } from '@/layouts'

const TempTab: FC<any> = ({ title }) => {
  return <h1>{title}</h1>
}

export const TodoView = () => {
  return (
    <MainLayout
      title="Todo"
      tabs={[
        { icon: <DocumentArrowUpIcon width={24} />, title: 'Completed' },
        { icon: <DocumentArrowUpIcon width={24} />, title: 'Completed' },
      ]}
      contents={[<TempTab title="tab 1" />, <TempTab title="tab 2" />]}
    />
  )
}
