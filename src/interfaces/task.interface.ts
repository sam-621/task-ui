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
