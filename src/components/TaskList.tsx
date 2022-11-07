import { FC } from 'react'
import { ITask } from '../interfaces/task.interface'
import { TaskCard } from './TaskCard'

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  )
}

type Props = {
  tasks: ITask[]
}
