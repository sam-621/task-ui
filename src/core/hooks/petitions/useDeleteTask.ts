import Swal from 'sweetalert2'
import { useMutation } from '@tanstack/react-query'
import { deleteTask as deleteTaskFetcher } from '@/services'
import { queryClient } from '../../../App'
import { ALL_TASKS } from '@/constants'

export const useDeleteTask = () => {
  const { mutateAsync, isLoading } = useMutation(deleteTaskFetcher, {
    async onSuccess() {
      await queryClient.refetchQueries(ALL_TASKS)
    },
  })

  const deleteTask = async (taskId: string) => {
    try {
      const res = await Swal.fire({
        title: 'Are you sure about deleting this task?',
        text: 'This actions can not be undone',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--primary-color)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        background: 'var(--card-bg)',
        iconColor: '#d33',
        color: 'var(--title-color)',
      })

      if (res.value) {
        await mutateAsync(taskId)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    deleteTask,
    isLoading,
  }
}
