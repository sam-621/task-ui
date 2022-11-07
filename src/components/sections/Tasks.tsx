import { useUserId } from '../../hooks/useUserId'
import { TabsContainer } from '../containers/TabsContainer'
import { TaskList } from '../TaskList'

export const Tasks = () => {
  return (
    <>
      <TabsContainer tabs={['Pendientes', 'Completadas']} contents={[]} />
      <TaskList tasks={[]} />
    </>
  )
}
