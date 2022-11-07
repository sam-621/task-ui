import { useMutation } from '@tanstack/react-query'
import { ITask, TaskStatus, UpdateTaskInput } from '../../interfaces/task.interface'
import { updateTask as updateTaskFetcher } from '../../services/tasks.service'

export const useUpdateTask = (task: ITask) => {
  const { mutateAsync, isLoading } = useMutation(updateTaskFetcher)

  const updateStatus = async (status: TaskStatus) => {
    try {
      const input: UpdateTaskInput = {
        _id: task._id,
        content: task.content,
        status: status,
      }

      await mutateAsync(input)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    updateStatus,
    isLoading,
  }
}
