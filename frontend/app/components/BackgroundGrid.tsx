'use client'

export function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(128, 128, 128, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
      }}
    />
  )
}
