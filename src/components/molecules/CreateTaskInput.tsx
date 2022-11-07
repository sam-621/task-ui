import { PlusCircleIcon } from '@heroicons/react/24/solid'

export const CreateTaskInput = () => {
  return (
    <form>
      <div className="flex justify-between bg-[#F3F3F3] p-2 rounded gap-1">
        <input
          type="text"
          placeholder="Agrega una tarea"
          className="bg-[#F3F3F3] outline-none text-subtitle w-full"
        />
        <PlusCircleIcon color="#9333EA" width={24} height={24} />
      </div>
    </form>
  )
}
