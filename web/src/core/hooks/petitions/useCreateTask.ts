import { ALL_TASKS, USER_ID } from '@/constants'
import { CreateTaskInput, TaskStatus } from '@/interfaces'
import { createTask } from '@/services'
import { getItemFormLS, notify } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../App'
import { useTabsContext } from '../../providers/Tabs'

export const useCreateTask = () => {
  const { tabSelected } = useTabsContext()
  const { mutateAsync, isLoading } = useMutation(createTask, {
    onMutate() {
      const notificationId = notify.loading('Creating task')

      return { notificationId }
    },
    async onSuccess(_, __, ctx) {
      notify.success(`Task created`, { id: ctx?.notificationId })
      await queryClient.refetchQueries(ALL_TASKS)
    },
    onError(_, __, ctx) {
      notify.error(`Couldn't create the task`, { id: ctx?.notificationId })
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
