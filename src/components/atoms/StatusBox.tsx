import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { FC, Fragment, useState } from 'react'
import { useUpdateTask } from '../../hooks/petitions/useUpdateTask'
import { ITask, TaskStatus } from '../../interfaces/task.interface'
import { getStatusName } from '../../utils/task.util'

const optionalStatus = [TaskStatus.PENDING, TaskStatus.COMPLETED]

export const StatusBox: FC<Props> = ({ task }) => {
  const [status, setStatus] = useState(task.status)
  const isPending = status === TaskStatus.PENDING
  return (
    <Listbox value={status} onChange={setStatus}>
      <div className="">
        <Listbox.Button className={`text-xs p-1 rounded flex items-center bg-[#F3F3F3]`}>
          <span className={`${isPending ? 'text-yellow-500' : 'text-blue-500'}`}>
            {getStatusName(status)}
          </span>
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute bg-white shadow-sm z-50">
            {optionalStatus.map((status) => (
              <Listbox.Option key={status} value={status}>
                {status}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
type Props = {
  task: ITask
}
