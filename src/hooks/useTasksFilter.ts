import { useEffect, useState } from 'react'
import { ITask, TaskStatus } from '../interfaces/task.interface'

export const useTasksFilter = (tasks: ITask[], isLoading: boolean) => {
  const [pendingTasks, setPendingTasks] = useState<ITask[]>([])
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([])

  useEffect(() => {
    const pending = tasks.filter((task) => task.status === TaskStatus.PENDING)
    const completed = tasks.filter((task) => task.status === TaskStatus.COMPLETED)

    setPendingTasks(pending)
    setCompletedTasks(completed)
  }, [isLoading])

  return {
    pendingTasks,
    completedTasks,
  }
}
