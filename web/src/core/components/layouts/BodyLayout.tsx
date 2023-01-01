import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

export const BodyLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Task ui | Home</title>
        <meta name="description" content="Manage your" />
      </Helmet>
      <div className="h-screen max-w-[672px] mt-4 mx-7 md:mx-auto md:mt-20">{children}</div>
    </>
  )
}

type Props = {
  children: ReactNode
}
