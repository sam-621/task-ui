import { ALL_TASKS } from '@/constants'
import { useQuery } from '@tanstack/react-query'
import { getAllTasks } from '../../../services/tasks.service'
import { useTasksFilter } from '../useTasksFilter'

export const useGetAllTasks = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery(ALL_TASKS, getAllTasks)
  const { completedTasks, pendingTasks } = useTasksFilter(data || [])

  return {
    tasks: data,
    completedTasks,
    pendingTasks,
    isLoading,
    refetch,
    isRefetching,
  }
}
