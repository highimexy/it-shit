'use client'

interface BackgroundGridProps {
  color?: string
}

export function BackgroundGrid({ color = 'rgba(128, 128, 128, 0.15)' }: BackgroundGridProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px),
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
        maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
      }}
    />
  )
}
