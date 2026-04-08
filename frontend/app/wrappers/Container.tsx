'use client'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  withBorders?: boolean
}

export function Container({ children, className = '', withBorders = true }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-360 ${withBorders ? 'border-foreground/10 border-x' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
