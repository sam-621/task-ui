import { TaskStatus } from '../interfaces/task'

export const getStatusName = (status: TaskStatus) => {
  if (status === TaskStatus.PENDING) return 'Pending'

  return 'Completed'
}
