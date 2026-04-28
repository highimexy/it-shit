'use client'

import {
  FiEdit3,
  FiArrowUp,
  FiEye,
  FiMessageSquare,
  FiMoreHorizontal,
  FiUser,
  FiCheckCircle,
  FiStar,
} from 'react-icons/fi'
import { AcademyBackgroundGrid } from '../_components/AcademyBackgroundGrid'

// --- MOCK DATA ---
const DISCUSS_POSTS = [
  {
    id: 1,
    author: 'AcademyTeam',
    isVerified: true,
    date: 'Apr 27, 2026',
    title: 'Would you trust AI code as is?',
    excerpt:
      "Would you ship AI-generated code without review? Sometimes it looks like the perfect solution at first glance... Then you run it and you realize: looking right isn't the same as being right. ☝️ Now it's your turn...",
    upvotes: 6,
    views: '1.9K',
    comments: 27,
    hasImage: true,
    imageColor: 'from-indigo-500 to-purple-600',
    imageText: 'Coding Lab',
  },
  {
    id: 2,
    author: 'AcademyTeam',
    isVerified: true,
    date: 'Apr 16, 2026',
    title: 'Academy App at Your Fingertips',
    excerpt:
      'Introducing the Academy mobile app, now available for smartphones and tablets. One challenge a day keeps your reasoning in play. Jump in for quick practice, browse your collections, and stay on top of...',
    upvotes: 162,
    views: '30K',
    comments: 75,
    hasImage: true,
    imageColor: 'from-slate-800 to-slate-900',
    imageText: 'Mobile App',
  },
  {
    id: 3,
    author: 'AcademyTeam',
    isVerified: true,
    date: 'Apr 13, 2026',
    title: '💥 Contest Rating Rule Updates 💥',
    excerpt:
      'Hello everyone, To maintain the integrity and accuracy of Academy Contest Rating and Global Ranking, we are introducing updates to the contest rating rules. I. Applicability New Users: Users who have not participated...',
    upvotes: 93,
    views: '16.2K',
    comments: 39,
    hasImage: false,
  },
  {
    id: 4,
    author: 'Anonymous User',
    isVerified: false,
    date: 'an hour ago',
    title: 'Need some advice',
    excerpt:
      'i was laid off in feb.i have got an offer from eclerx as a java developer should i take it .my aim is to work in a good product based company ,need some suggestions on this',
    upvotes: 0,
    views: '28',
    comments: 0,
    hasImage: false,
  },
]

const TABS = ['For You', 'Career', 'Contest', 'Compensation', 'Feedback', 'Interview']

export function DiscussBoard() {
  return (
    // Dokładnie ten sam layout co na RankingBoard: max szerokość i ukryta siatka
    <div className="relative isolate flex min-h-screen w-full justify-center overflow-hidden font-sans">
      {/* === SIATKA (CAŁY EKRAN POD SPODEM) === */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <AcademyBackgroundGrid />
      </div>

      {/* === ŚRODKOWY KONTENT (ZASŁANIA SIATKĘ W ŚRODKU) === */}
      <div className="border-foreground/10 bg-background relative z-10 flex w-full flex-col justify-start px-4 py-8 shadow-2xl lg:max-w-[800px] lg:border-x lg:px-12 xl:max-w-[1000px]">
        {/* === TOP NAVIGATION === */}
        <div className="border-foreground/10 flex items-center justify-between border-b pb-4">
          {/* Zakładki */}
          <div className="scrollbar-hide flex flex-1 items-center gap-1 overflow-x-auto pr-4 sm:gap-2">
            <button className="bg-foreground/10 flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-bold transition-colors">
              <span className="text-lg">🔥</span> For You
            </button>

            {TABS.slice(1).map((tab) => (
              <button
                key={tab}
                className="text-foreground/60 hover:bg-foreground/[0.04] hover:text-foreground shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Przycisk Create */}
          <button className="flex shrink-0 items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white shadow-md transition-colors hover:bg-green-500">
            <FiEdit3 className="text-lg" />
            <span className="hidden sm:inline">Create</span>
          </button>
        </div>

        {/* === SORTING BAR === */}
        <div className="text-foreground/60 flex items-center gap-4 py-4 text-sm font-medium">
          <button className="hover:text-foreground flex items-center gap-2 transition-colors">
            <FiArrowUp className="text-base" /> Most Votes
          </button>
          <button className="hover:text-foreground flex items-center gap-2 transition-colors">
            <FiStar className="text-base" /> Newest
          </button>
        </div>

        {/* === POST LIST === */}
        <div className="flex flex-col">
          {DISCUSS_POSTS.map((post) => (
            <div
              key={post.id}
              className="border-foreground/10 hover:bg-foreground/[0.02] flex flex-col gap-4 border-b py-4 transition-colors sm:flex-row sm:gap-6 lg:-mx-4 lg:rounded-xl lg:border-b-0 lg:px-4 lg:hover:border-transparent lg:hover:shadow-sm"
            >
              {/* Avatar (Ukryty na małych ekranach dla lepszej czytelności) */}
              <div className="bg-foreground/10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full sm:flex">
                {post.isVerified ? (
                  <div className="bg-foreground text-background flex h-full w-full items-center justify-center rounded-full">
                    <FiCheckCircle className="text-xl" />
                  </div>
                ) : (
                  <FiUser className="text-foreground/50 text-xl" />
                )}
              </div>

              {/* Treść posta */}
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
                {/* Meta info */}
                <div className="text-foreground/60 flex items-center gap-2 text-xs">
                  <div className="bg-foreground/10 flex h-5 w-5 items-center justify-center rounded-full sm:hidden">
                    <FiUser className="text-[10px]" />
                  </div>
                  <span className="text-foreground/80 font-bold">{post.author}</span>
                  {post.isVerified && <FiCheckCircle className="text-blue-500" />}
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                {/* Tytuł */}
                <h2 className="text-base font-bold sm:text-lg">{post.title}</h2>

                {/* Opis */}
                <p className="text-foreground/60 line-clamp-2 text-sm sm:text-base">
                  {post.excerpt}
                </p>

                {/* Statystyki pod spodem */}
                <div className="text-foreground/50 mt-2 flex items-center justify-between text-xs font-medium sm:text-sm">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="hover:text-foreground flex cursor-pointer items-center gap-1.5 transition-colors">
                      <FiArrowUp className="text-base" /> {post.upvotes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiEye className="text-base" /> {post.views}
                    </span>
                    <span className="hover:text-foreground flex cursor-pointer items-center gap-1.5 transition-colors">
                      <FiMessageSquare className="text-base" /> {post.comments}
                    </span>
                  </div>
                  <button className="hover:bg-foreground/10 hover:text-foreground rounded-full p-1.5 transition-colors">
                    <FiMoreHorizontal className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Obrazek/miniatura */}
              {post.hasImage && (
                <div
                  className={`hidden h-24 w-40 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-inner sm:flex ${post.imageColor}`}
                >
                  <span className="text-center font-bold text-white shadow-black drop-shadow-md">
                    {post.imageText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
