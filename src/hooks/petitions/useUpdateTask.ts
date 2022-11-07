import { useMutation } from '@tanstack/react-query'
import { updateTask as updateTaskFetcher } from '../../services/tasks.service'

export const useUpdateTask = (taskId: string) => {
  const { mutateAsync, isLoading } = useMutation(updateTaskFetcher)

  return {
    updateTask: mutateAsync,
    isLoading,
  }
}
