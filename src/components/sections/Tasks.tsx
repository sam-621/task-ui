import { useGetAllTasks } from '../../hooks/petitions/useGetAllTasks'
import { SectionLoader } from '../atoms/SectionLoader'
import { TabsContainer } from '../containers/TabsContainer'
import { TaskList } from '../containers/TaskList'

export const Tasks = () => {
  const { completedTasks, pendingTasks, isLoading } = useGetAllTasks()

  if (isLoading) return <SectionLoader />

  return (
    <>
      <TabsContainer
        tabs={['Pendientes', 'Completadas']}
        contents={[<TaskList tasks={pendingTasks!} />, <TaskList tasks={completedTasks!} />]}
      />
    </>
  )
}
