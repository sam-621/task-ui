import { useGetAllTasks } from '../../hooks/petitions/useGetAllTasks'
import { TabsContainer } from '../containers/TabsContainer'
import { TaskList } from '../TaskList'

export const Tasks = () => {
  const { tasks, isLoading } = useGetAllTasks()

  if (isLoading) return <span>Loading...</span>

  return (
    <>
      <TabsContainer
        tabs={['Pendientes', 'Completadas']}
        contents={[<TaskList tasks={tasks!} />]}
      />
    </>
  )
}
