import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'
import { useCreateTask } from '../../hooks/petitions/useCreateTask'

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
      <div className="flex justify-between bg-[#F3F3F3] p-2 rounded gap-1">
        <input
          type="text"
          placeholder="Agrega una tarea"
          className="bg-[#F3F3F3] outline-none text-subtitle w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading}
        />
        <PlusCircleIcon color={isLoading ? '#C4C4C4' : '#9333EA'} width={24} height={24} />
      </div>
    </form>
  )
}
