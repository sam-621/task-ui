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
        title: '¿Estás seguro que deseas eliminar esta tarea?',
        text: 'Esta acción no se puede revertir!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#9333EA',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        background: '#FFF',
        iconColor: '#d33',
        color: '#404040',
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
