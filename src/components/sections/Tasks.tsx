import { useGetAllTasks } from '../../hooks/petitions/useGetAllTasks'
import { TabsContainer } from '../containers/TabsContainer'
import { TaskList } from '../containers/TaskList'

export const Tasks = () => {
  const { completedTasks, pendingTasks, isLoading } = useGetAllTasks()

  if (isLoading) return <span>Loading...</span>

  return (
    <>
      <TabsContainer
        tabs={['Pendientes', 'Completadas']}
        contents={[<TaskList tasks={pendingTasks!} />, <TaskList tasks={completedTasks!} />]}
      />
    </>
  )
}
