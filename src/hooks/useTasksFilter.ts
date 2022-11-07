import { useEffect, useState } from 'react'
import { ITask, TaskStatus } from '../interfaces/task.interface'

export const useTasksFilter = (tasks: ITask[]) => {
  const [pendingTasks, setPendingTasks] = useState<ITask[]>([])
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([])

  useEffect(() => {
    if (!tasks.length) return

    const pending = tasks.filter((task) => task.status === TaskStatus.PENDING)
    const completed = tasks.filter((task) => task.status === TaskStatus.COMPLETED)

    setPendingTasks(pending)
    setCompletedTasks(completed)
  }, [tasks])

  return {
    pendingTasks,
    completedTasks,
  }
}
