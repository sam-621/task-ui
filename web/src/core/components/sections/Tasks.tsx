import { useGetAllTasks } from '@/hooks'
import { TabsContainer } from '../containers/TabsContainer'
import { TaskList } from '../containers/TaskList'

export const Tasks = () => {
  const { completedTasks, pendingTasks } = useGetAllTasks()

  return (
    <>
      <TabsContainer
        tabs={['Pending', 'Completed']}
        contents={[<TaskList tasks={pendingTasks} />, <TaskList tasks={completedTasks} />]}
      />
    </>
  )
}
