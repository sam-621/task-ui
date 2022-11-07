import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../App'
import { ALL_TASKS, USER_ID } from '../../constants/query-cache.constants'
import { CreateTaskInput, TaskStatus } from '../../interfaces/task.interface'
import { createTask } from '../../services/tasks.service'
import { getItemFormLS } from '../../utils/storage.util'

export const useCreateTask = () => {
  const { mutateAsync, isLoading } = useMutation(createTask, {
    async onSuccess() {
      await queryClient.refetchQueries(ALL_TASKS)
    },
  })

  const onSubmit = async (content: string) => {
    try {
      const createTaskInput: CreateTaskInput = {
        content: content,
        ownerId: getItemFormLS(USER_ID) || '',
        status: TaskStatus.PENDING,
      }

      await mutateAsync(createTaskInput)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    createTask: onSubmit,
    isLoading,
  }
}
