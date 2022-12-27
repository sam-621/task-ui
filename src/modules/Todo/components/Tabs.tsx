import { DocumentArrowUpIcon } from '@heroicons/react/24/solid'

import { CustomTab } from '@/interfaces'

export const CompletedTaskTab: CustomTab = ({ selected }) => {
  return (
    <button
      type="button"
      className={`${
        selected ? 'bg-sub-card text-primary' : 'text-subtitle'
      } text-center rounded text-base outline-none w-full p-2 md:text-left flex items-center gap-2`}
    >
      <div>
        <DocumentArrowUpIcon width={24} />
      </div>
      Completed
    </button>
  )
}
