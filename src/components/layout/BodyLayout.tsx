import { FC, ReactNode } from 'react'

export const BodyLayout: FC<Props> = ({ children }) => {
  return <div className=" h-screen px-5 py-4">{children}</div>
}

type Props = {
  children: ReactNode
}
