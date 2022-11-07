import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { ITask } from '../../interfaces/task.interface'

export const TaskCard: FC<Props> = ({ task }) => {
  const { content, createdAt } = task
  const currentDate = new Date(createdAt)

  return (
    <article className="flex justify-between items-center px-4 py-5">
      <div className="flex flex-col">
        <h2 className="md:text-lg font-semibold">{content}</h2>
        <span className="text-subtitle text-sm">{currentDate.toLocaleDateString()}</span>
      </div>
      <div>
        <EllipsisVerticalIcon width={20} height={20} />
      </div>
    </article>
  )
}

type Props = {
  task: ITask
}
