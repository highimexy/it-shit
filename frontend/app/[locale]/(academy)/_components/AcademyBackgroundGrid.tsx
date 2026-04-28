'use client'

interface BackgroundGridProps {
  color?: string
}

export function AcademyBackgroundGrid({
  color = 'rgba(255, 255, 255, 0.07)',
}: BackgroundGridProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full opacity-100 dark:opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          animation: 'grid-breathe 4s ease-in-out infinite',
          transformOrigin: 'center center',
        }}
      />
      <style>{`
        @keyframes grid-breathe {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </div>
  )
}
