import { FC } from 'react'

import { UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export const HeaderBar: FC<Props> = ({ title }) => {
  return (
    <header className="bg-card rounded-lg flex justify-between px-4 py-3">
      <div>
        <h1 className="text-primary font-bold text-xl">Task UI</h1>
      </div>
      <div>
        <h2 className="text-base text-primary">{title}</h2>
      </div>
      <nav className="flex gap-4">
        <UserCircleIcon width={24} className="text-subtitle" />
        <UserGroupIcon width={24} className="text-subtitle" />
      </nav>
    </header>
  )
}

type Props = {
  title: string
}
