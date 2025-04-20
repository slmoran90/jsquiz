import { ReactNode } from 'react'

export const List = ({ children }: { children: ReactNode }) => {
  return <ul className='bg-inherit rounded-box custom-list'>{children}</ul>
}

export const ListItem = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return <li className={`${className}`}>{children}</li>
}
