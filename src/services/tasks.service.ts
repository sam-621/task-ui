import { CreateTaskInput, ITask, UpdateTaskInput } from '../interfaces/task.interface'
import { serviceDelete, serviceGet, servicePost, servicePut } from './petitions.service'

export const getAllTasks = async () => {
  const { data } = await serviceGet<ITask>('/tasks')

  return data.data
}

export const getTaskById = async (id: string) => {
  const { data } = await serviceGet<ITask>(`/tasks/${id}`)

  return data.data
}

export const createTask = async (input: CreateTaskInput) => {
  const { data } = await servicePost<ITask>('/tasks/create', input)

  return data.data
}

export const updateTask = async (id: string, input: UpdateTaskInput) => {
  const { data } = await servicePut<ITask>(`/tasks/update/${id}`, input)

  return data.data
}

export const deleteTask = async (id: string) => {
  const { data } = await serviceDelete<ITask>(`/tasks/delete/${id}`)

  return data.data
}
