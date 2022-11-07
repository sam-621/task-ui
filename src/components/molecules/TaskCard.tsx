import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { ITask } from '../../interfaces/task.interface'
import { DropDownMenu } from '../atoms/DropDownMenu'
import { StatusBox } from '../atoms/StatusBox'

export const TaskCard: FC<Props> = ({ task }) => {
  const { content, createdAt } = task
  const currentDate = new Date(createdAt)

  return (
    <article className="flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="md:text-lg font-semibold text-title">{content}</h2>
        <span className="text-subtitle text-sm">{currentDate.toLocaleDateString()}</span>
      </div>
      <div className="flex items-center">
        <DropDownMenu />
      </div>
    </article>
  )
}

type Props = {
  task: ITask
}
