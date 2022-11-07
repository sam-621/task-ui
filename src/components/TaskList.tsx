import { FC } from 'react'
import { ITask } from '../interfaces/task.interface'
import { TaskCard } from './TaskCard'

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <div className="bg-white rounded-xl">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  )
}

type Props = {
  tasks: ITask[]
}
