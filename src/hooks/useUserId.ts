import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { USER_ID } from '../constants/query-cache.constants'
import { getItemFormLS, setItemInLS } from '../utils/storage.util'

export const useUserId = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const currentUserId = getItemFormLS(USER_ID)

    if (!currentUserId) {
      const newUserId = nanoid()
      setItemInLS(USER_ID, newUserId)
      return
    }
  }, [])
}
