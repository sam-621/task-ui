import { ITask, TaskStatus } from '@/interfaces'
import { useEffect, useState } from 'react'

export const useTasksFilter = (tasks: ITask[]) => {
  const [pendingTasks, setPendingTasks] = useState<ITask[]>([])
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([])

  useEffect(() => {
    if (!tasks.length) {
      setPendingTasks([])
      setCompletedTasks([])
      return
    }

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
