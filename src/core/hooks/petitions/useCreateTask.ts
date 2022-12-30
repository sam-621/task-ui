import { ALL_TASKS, USER_ID } from '@/constants'
import { CreateTaskInput, TaskStatus } from '@/interfaces'
import { createTask } from '@/services'
import { getItemFormLS } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../App'
import { useTabsContext } from '../../providers/Tabs'

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
