import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { ITask } from '../interfaces/task.interface'

export const TaskCard: FC<Props> = ({ task }) => {
  const { content, createdAt } = task
  return (
    <article>
      <div>
        <h2>{content}</h2>
        <span>{createdAt.toLocaleDateString()}</span>
      </div>
      <div>
        <EllipsisVerticalIcon />
      </div>
    </article>
  )
}

type Props = {
  task: ITask
}
