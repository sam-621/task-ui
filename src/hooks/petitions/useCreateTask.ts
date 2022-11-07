import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../App'
import { ALL_TASKS, USER_ID } from '../../constants/query-cache.constants'
import { useTabsContext } from '../../contexts/Tabs.context'
import { CreateTaskInput, TaskStatus } from '../../interfaces/task.interface'
import { createTask } from '../../services/tasks.service'
import { getItemFormLS } from '../../utils/storage.util'

export const useCreateTask = () => {
  const { tabSelected } = useTabsContext()
  const { mutateAsync, isLoading } = useMutation(createTask, {
    async onSuccess() {
      await queryClient.refetchQueries(ALL_TASKS)
    },
  })

  const onSubmit = async (content: string) => {
    try {
      if (!content) return

      const createTaskInput: CreateTaskInput = {
        content: content,
        ownerId: getItemFormLS(USER_ID) || '',
        status: tabSelected === 0 ? TaskStatus.PENDING : TaskStatus.COMPLETED,
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
