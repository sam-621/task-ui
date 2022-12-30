import { FC } from 'react'
import { ITask } from '../../../interfaces/task.interface'
import { CreateTaskInput } from '../molecules/CreateTaskInput'
import { TaskCard } from '../molecules/TaskCard'

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <div className="bg-white rounded-xl px-4 py-5 flex flex-col gap-5">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
      <CreateTaskInput />
    </div>
  )
}

type Props = {
  tasks: ITask[]
}
