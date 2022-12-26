import { UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export const HeaderBar = () => {
  return (
    <header className="bg-card rounded-lg flex justify-between px-4 py-3">
      <div>
        <h1 className="text-primary font-bold text-xl">Task UI</h1>
      </div>
      <div>
        <h2 className="text-base text-primary">Todo</h2>
      </div>
      <nav className="flex gap-4">
        <UserCircleIcon width={24} className="text-subtitle" />
        <UserGroupIcon width={24} className="text-subtitle" />
      </nav>
    </header>
  )
}
