'use client'

import { FaCrown } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'

import { AcademyBackgroundGrid } from './AcademyBackgroundGrid'

const RANKING_DATA = [
  { id: 1, name: 'Miruu', score: 3702, attended: 150 },
  { id: 2, name: 'Neal Wu', score: 3686, attended: 142 },
  { id: 3, name: 'Yawn_Sean', score: 3644, attended: 138 },
  { id: 4, name: '小羊肖恩', score: 3611, attended: 107 },
  { id: 5, name: '何逊', score: 3599, attended: 146 },
  { id: 6, name: 'Joshua Chen', score: 3589, attended: 100 },
  { id: 7, name: 'Rohin Garg', score: 3506, attended: 88 },
  { id: 8, name: 'SSerxhs', score: 3499, attended: 61 },
  { id: 9, name: '小咩肖恩', score: 3490, attended: 50 },
  { id: 10, name: 'fmota', score: 3453, attended: 65 },
]

export function AcademyRankingBoard() {
  const first = RANKING_DATA[0]
  const second = RANKING_DATA[1]
  const third = RANKING_DATA[2]
  const rest = RANKING_DATA.slice(3)

  return (
    <div className="flex h-full w-full font-sans">
      {/* === LEWA SIATKA === */}
      <div className="border-foreground/10 relative hidden flex-1 border-r lg:block">
        <AcademyBackgroundGrid />
      </div>

      {/* === ŚRODKOWY KONTENT === */}
      <div className="flex flex-col justify-center px-4 py-8 lg:px-12">
        <div className="flex w-full flex-col items-center gap-10 lg:gap-16">
          {/* LEWA KOLUMNA: PODIUM (TOP 3) */}
          <div className="flex w-full max-w-lg items-end justify-center gap-3 sm:gap-6 lg:pt-10">
            {/* 2. MIEJSCE */}
            {second && (
              <div className="flex w-24 flex-col items-center sm:w-32">
                <FaCrown className="mb-2 text-2xl text-gray-400 drop-shadow-md sm:text-3xl" />
                <div className="border-foreground/10 flex h-16 w-16 items-center justify-center rounded-full border-[3px] bg-gray-400/20 sm:h-20 sm:w-20">
                  <FiUser className="text-3xl text-gray-400 sm:text-4xl" />
                </div>
                <div className="border-foreground/10 bg-background/80 mt-3 flex w-full flex-col items-center rounded-xl border p-3 shadow-sm backdrop-blur-sm">
                  <span className="truncate text-xs font-bold sm:text-sm">{second.name}</span>
                  <span className="text-foreground/60 text-[10px] sm:text-xs">{second.score}</span>
                </div>
              </div>
            )}

            {/* 1. MIEJSCE */}
            {first && (
              <div className="flex flex-col items-center sm:w-36">
                <FaCrown className="mb-2 text-4xl text-yellow-500 drop-shadow-md sm:text-5xl" />
                <div className="border-foreground/10 flex h-20 w-20 items-center justify-center rounded-full border-4 bg-yellow-500/20 sm:h-28 sm:w-28">
                  <FiUser className="text-4xl text-yellow-500 sm:text-5xl" />
                </div>
                <div className="border-foreground/10 bg-background/80 mt-3 flex w-full flex-col items-center rounded-xl border p-4 shadow-sm backdrop-blur-sm">
                  <span className="truncate text-sm font-bold text-yellow-600 sm:text-base dark:text-yellow-500">
                    {first.name}
                  </span>
                  <span className="text-foreground/60 text-xs sm:text-sm">{first.score}</span>
                </div>
              </div>
            )}

            {/* 3. MIEJSCE */}
            {third && (
              <div className="flex w-24 flex-col items-center sm:w-32">
                <FaCrown className="mb-2 text-2xl text-amber-700 drop-shadow-md sm:text-3xl" />
                <div className="border-foreground/10 flex h-16 w-16 items-center justify-center rounded-full border-[3px] bg-amber-700/20 sm:h-20 sm:w-20">
                  <FiUser className="text-3xl text-amber-700 sm:text-4xl" />
                </div>
                <div className="border-foreground/10 bg-background/80 mt-3 flex w-full flex-col items-center rounded-xl border p-3 shadow-sm backdrop-blur-sm">
                  <span className="truncate text-xs font-bold sm:text-sm">{third.name}</span>
                  <span className="text-foreground/60 text-[10px] sm:text-xs">{third.score}</span>
                </div>
              </div>
            )}
          </div>

          {/* PRAWA KOLUMNA: LISTA (4+) */}
          <div className="flex w-full max-w-md flex-col gap-2">
            {rest.map((user) => (
              <div
                key={user.id}
                className="border-foreground/10 bg-background/80 hover:bg-foreground/4 flex items-center gap-3 rounded-xl border p-3 backdrop-blur-sm transition-colors sm:p-3 sm:px-4"
              >
                <div className="bg-foreground/10 text-foreground/80 flex h-7 w-7 shrink-0 items-center justify-center rounded-full p-2 text-xs font-bold sm:h-8 sm:w-8 sm:text-sm">
                  {user.id}
                </div>
                <div className="bg-foreground/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10">
                  <FiUser className="text-foreground/50 text-base sm:text-lg" />
                </div>
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <span className="truncate text-sm font-bold sm:text-base">{user.name}</span>
                </div>
                <div className="flex shrink-0 flex-col text-right text-[10px] sm:text-xs">
                  <div className="text-foreground/60">
                    Rating: <span className="text-foreground font-bold">{user.score}</span>
                  </div>
                  <div className="text-foreground/40">Attended: {user.attended}</div>
                </div>
              </div>
            ))}
            {rest.length >= 7 && (
              <button className="text-foreground/50 hover:text-foreground mt-2 text-xs font-bold tracking-wider uppercase transition-colors sm:text-sm">
                Show More
              </button>
            )}
          </div>
        </div>
      </div>

      {/* === PRAWA SIATKA === */}
      <div className="border-foreground/10 relative hidden flex-1 border-l lg:block">
        <AcademyBackgroundGrid />
      </div>
    </div>
  )
}
