import { ALL_TASKS } from '@/constants'
import { getAllTasks } from '@/services'
import { useQuery } from '@tanstack/react-query'
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
