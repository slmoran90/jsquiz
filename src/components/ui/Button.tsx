import { ReactNode } from 'react'

export const Button = ({
  children,
  className,
  onClick,
  disabled = false
}: {
  children?: ReactNode | string
  className?: string
  onClick?: () => void
  disabled?: boolean
}) => {
  return (
    <button
      className={`btn ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
