import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

export const BodyLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Task ui | Home</title>
        <meta name="description" content="Aplication to manage your tasks" />
      </Helmet>
      <div className=" h-screen px-5 py-4 md:px-10 lg:px-44 xl:px-96">{children}</div>
    </>
  )
}

type Props = {
  children: ReactNode
}
