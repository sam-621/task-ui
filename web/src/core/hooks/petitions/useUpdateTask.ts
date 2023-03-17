import { ALL_TASKS } from '@/constants'
import { ITask, TaskStatus, UpdateTaskInput } from '@/interfaces'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../App'
import { updateTask as updateTaskFetcher } from '@/services'
import { notify } from '@/utils'

export const useUpdateTask = (task: ITask) => {
  const { mutateAsync, isLoading } = useMutation(updateTaskFetcher, {
    async onMutate() {
      const notificationId = notify.loading('Updating task')

      return { notificationId }
    },
    async onSuccess(_, __, ctx) {
      notify.success(`Task updated`, { id: ctx?.notificationId })
      await queryClient.refetchQueries(ALL_TASKS)
    },
    onError(_, __, ctx) {
      notify.error(`Couldn't update the task`, { id: ctx?.notificationId })
    },
  })

  const updateTask = async (content: string, status: TaskStatus) => {
    try {
      if (!content) {
        notify.error('The content must not be empty')
        return false
      }

      const updateInput: UpdateTaskInput = {
        _id: task._id,
        content: content,
        status: status,
      }

      await mutateAsync(updateInput)
      return true
    } catch (err) {
      notify.error('Unexpected error ocurred, please reload the page')
      return false
    }
  }

  return {
    updateTask,
    isLoading,
  }
}
