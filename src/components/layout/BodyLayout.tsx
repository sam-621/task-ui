import { FC, ReactNode } from 'react'

export const BodyLayout: FC<Props> = ({ children }) => {
  return <div className=" h-screen px-5 py-4 md:px-10 lg:px-44 xl:px-96">{children}</div>
}

type Props = {
  children: ReactNode
}
