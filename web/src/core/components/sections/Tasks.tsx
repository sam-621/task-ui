import { useGetAllTasks } from '@/hooks'
import { SectionLoader } from '../atoms/SectionLoader'
import { TabsContainer } from '../containers/TabsContainer'
import { TaskList } from '../containers/TaskList'

export const Tasks = () => {
  const { completedTasks, pendingTasks, isLoading } = useGetAllTasks()

  if (isLoading) return <SectionLoader />

  return (
    <>
      <TabsContainer
        tabs={['Pending', 'Completed']}
        contents={[<TaskList tasks={pendingTasks} />, <TaskList tasks={completedTasks} />]}
      />
    </>
  )
}
