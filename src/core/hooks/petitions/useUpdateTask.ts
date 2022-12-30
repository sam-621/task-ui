import { ALL_TASKS } from '@/constants'
import { ITask, TaskStatus, UpdateTaskInput } from '@/interfaces'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../App'
import { updateTask as updateTaskFetcher } from '../../../services/tasks.service'
import { useNotify } from '../useNotify'

export const useUpdateTask = (task: ITask) => {
  const { error, success, warning } = useNotify()
  const { mutateAsync, isLoading } = useMutation(updateTaskFetcher, {
    async onSuccess() {
      await queryClient.refetchQueries(ALL_TASKS)
    },
  })

  const updateTask = async (content: string, status: TaskStatus) => {
    try {
      if (!content) {
        error('La tarea no debe de estar vacía')
        return false
      }

      const updateInput: UpdateTaskInput = {
        _id: task._id,
        content: content,
        status: status,
      }

      await mutateAsync(updateInput)
      success(`Tarea "${task.content}" actualizada`)
      return true
    } catch (err) {
      error('Ocurrió un error inesperado, por favor recargue las página')
      return false
    }
  }

  return {
    updateTask,
    isLoading,
  }
}
