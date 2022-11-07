import { Menu, Transition } from '@headlessui/react'
import {
  EllipsisVerticalIcon,
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/solid'
import { Fragment } from 'react'

export const DropDownMenu = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <EllipsisVerticalIcon width={20} height={20} className="text-subtitle" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-in duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="bg-white shadow flex flex-col gap-3 absolute rounded py-2 px-1 z-50 right-0">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex items-center justify-start gap-4 text-title text-sm py-2 px-3 w-32 ${
                  active && 'bg-[#F3F3F3]'
                }`}
              >
                <PencilIcon width={15} height={15} className="text-primary" />
                <span>Edit</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex items-center justify-start gap-4 text-title text-sm py-2 px-3 w-32 ${
                  active && 'bg-[#F3F3F3]'
                }`}
              >
                <TrashIcon width={15} height={15} className="text-primary" />
                <span>Edit</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
