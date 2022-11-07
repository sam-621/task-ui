import { serviceGet } from './petitions.service'

export const getAllTasks = async () => {
  const tasks = await serviceGet('/tasks')

  return tasks
}

export const getTaskById = async (id: string) => {
  const task = await serviceGet(`/tasks/${id}`)

  return task
}
