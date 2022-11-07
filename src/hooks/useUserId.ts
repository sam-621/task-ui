import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { USER_ID } from '../constants/query-cache.constants'

export const useUserId = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const currentUserId = window.localStorage.getItem(USER_ID)

    if (!currentUserId) {
      const newUserId = nanoid()
      window.localStorage.setItem(USER_ID, newUserId)
      return
    }
  }, [])
}