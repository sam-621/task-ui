import { TaskStatus } from '@/interfaces'
import { getStatusName } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { Dispatch, FC, Fragment, useState } from 'react'

const optionalStatus = [TaskStatus.PENDING, TaskStatus.COMPLETED]

export const StatusBox: FC<Props> = ({ status, setStatus }) => {
  const isPending = status === TaskStatus.PENDING
  return (
    <Listbox value={status} onChange={setStatus}>
      <div className="">
        <Listbox.Button className={`text-sm p-2 rounded flex items-center bg-[#F3F3F3]`}>
          <span className={`${isPending ? 'text-yellow-500' : 'text-blue-500'} w-20 text-left`}>
            {getStatusName(status)}
          </span>
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-in duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute bg-white shadow-sm z-50 gap-1 my-1">
            {optionalStatus.map((status) => (
              <Listbox.Option
                key={status}
                value={status}
                className={({ active }) =>
                  `text-sm py-2 px-6 ${active && 'bg-[#F3F3F3]'} cursor-default rounded`
                }
              >
                {getStatusName(status)}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
type Props = {
  status: TaskStatus
  setStatus: Dispatch<React.SetStateAction<TaskStatus>>
}
