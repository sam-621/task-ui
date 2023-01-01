import { useUpdateTask } from '@/hooks'
import { ITask } from '@/interfaces'
import { Dialog, Transition } from '@headlessui/react'
import { FC, FormEvent, Fragment, useState } from 'react'
import { ActionLoader } from '../atoms/ActionLoader'
import { StatusBox } from '../atoms/StatusBox'

export const UpdateTaskModal: FC<Props> = ({ isOpen, task, closeModal }) => {
  const [content, setContent] = useState(task.content)
  const [status, setStatus] = useState(task.status)

  const { updateTask, isLoading } = useUpdateTask(task)

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const isOk = await updateTask(content, status)
    if (isOk) closeModal()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-card p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-title">
                  Edit Task
                </Dialog.Title>
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="md:flex flex-row justify-between items-end gap-3">
                    <div className="flex flex-col w-full">
                      <label htmlFor="input-1" className="text-subtitle mb-1">
                        Content
                      </label>
                      <input
                        className="bg-sub-card outline-none text-title w-full p-2 rounded"
                        id="input-1"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                    <div className="mt-5 md:mt-0 flex justify-end">
                      <StatusBox status={status} setStatus={setStatus} />
                    </div>
                  </div>

                  <div className="mt-10">
                    {isLoading ? (
                      <ActionLoader />
                    ) : (
                      <button type="submit" className="bg-primary text-white rounded py-2 px-4">
                        Save
                      </button>
                    )}
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

type Props = {
  isOpen: boolean
  task: ITask
  closeModal: () => void
}
