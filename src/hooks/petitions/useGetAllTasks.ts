import { useQuery } from '@tanstack/react-query'
import { ALL_TASKS } from '../../constants/query-cache.constants'
import { getAllTasks } from '../../services/tasks.service'

export const useGetAllTasks = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery(ALL_TASKS, getAllTasks)

  return {
    tasks: data,
    isLoading,
    refetch,
    isRefetching,
  }
}
