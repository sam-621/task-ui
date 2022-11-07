import { FC, ReactNode } from 'react'

export const BodyLayout: FC<Props> = ({ children }) => {
  return <div className="bg-gradient-to-r from-[#F6D1FC] to-[#B9D5FF] h-screen">{children}</div>
}

type Props = {
  children: ReactNode
}
