import { useCreateTask } from '@/hooks'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'

export const CreateTaskInput = () => {
  const [content, setContent] = useState('')
  const { createTask, isLoading } = useCreateTask()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createTask(content)
    setContent('')
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="flex justify-between bg-sub-card p-2 rounded gap-1">
        <input
          type="text"
          placeholder="Agrega una tarea"
          className="bg-sub-card outline-none text-subtitle w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit">
          <PlusCircleIcon
            className={`${isLoading ? 'text-disable' : 'text-primary'}`}
            width={24}
            height={24}
          />
        </button>
      </div>
    </form>
  )
}
