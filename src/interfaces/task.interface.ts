export interface ITask {
  _id: string
  content: string
  createdAt: Date
  ownerId: string
  status: TaskStatus
}

export enum TaskStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

export type CreateTaskInput = Pick<ITask, 'content' | 'ownerId' | 'status'>
export type UpdateTaskInput = Pick<ITask, 'content' | 'status'>
export type GetTasksInput = Pick<ITask, 'ownerId'>
