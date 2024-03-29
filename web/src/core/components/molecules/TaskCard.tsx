import { ITask } from '@/interfaces'
import { FC } from 'react'
import { DropDownMenu } from '../atoms/DropDownMenu'

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
        <DropDownMenu task={task} />
      </div>
    </article>
  )
}

type Props = {
  task: ITask
}
