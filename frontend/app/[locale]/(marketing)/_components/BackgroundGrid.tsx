'use client'

interface BackgroundGridProps {
  color?: string
}

export function BackgroundGrid({ color = 'rgba(161, 161, 170, 0.25)' }: BackgroundGridProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          animation: 'grid-breathe 4s ease-in-out infinite',
          transformOrigin: 'center center',
        }}
      />

      <style>{`
        @keyframes grid-breathe {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); /* Minimalne powiększenie - wdech */
          }
        }
      `}</style>
    </div>
  )
}
