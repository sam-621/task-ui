import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../App'
import { ALL_TASKS } from '../../constants/query-cache.constants'
import { ITask, TaskStatus, UpdateTaskInput } from '../../interfaces/task.interface'
import { updateTask as updateTaskFetcher } from '../../services/tasks.service'

export const useUpdateTask = (task: ITask) => {
  const { mutateAsync, isLoading } = useMutation(updateTaskFetcher, {
    async onSuccess() {
      await queryClient.refetchQueries(ALL_TASKS)
    },
  })

  const updateTask = async (content: string, status: TaskStatus) => {
    try {
      const updateInput: UpdateTaskInput = {
        _id: task._id,
        content: content,
        status: status,
      }

      await mutateAsync(updateInput)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    updateTask,
    isLoading,
  }
}
