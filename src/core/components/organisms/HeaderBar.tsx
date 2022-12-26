import { UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export const HeaderBar = () => {
  return (
    <header>
      <div>
        <h1>Task UI</h1>
      </div>
      <div>
        <h2>Todo</h2>
      </div>
      <div>
        <UserCircleIcon />
        <UserGroupIcon />
      </div>
    </header>
  )
}
