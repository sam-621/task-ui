import { Dispatch } from 'react'

export interface TabsContextSchema {
  tabSelected: number
  setTabSelected: Dispatch<React.SetStateAction<number>>
}
