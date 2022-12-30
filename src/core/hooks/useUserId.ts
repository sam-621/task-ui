import { USER_ID } from '@/constants'
import { getItemFormLS, setItemInLS } from '@/utils'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'

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
