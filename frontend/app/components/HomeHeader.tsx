'use client'

import { Container } from '../wrappers/Container'
import { BackgroundGrid } from './BackgroundGrid'

export function HomeHeader() {
  return (
    <header className="border-foreground/10 w-full border-b">
      <Container className="relative overflow-hidden">
        <BackgroundGrid />
        <div className="flex flex-col px-6 py-18 text-center">
          <h1 className="font-serif">
            Master the <span className="text-green-500 italic opacity-90">Basics</span> <br />
            Architect the <span className="text-yellow-400 italic opacity-90">Frontend</span> <br />
            Render the <span className="text-red-500 italic opacity-90">Future</span> <br />
            Face the <span className="text-purple-500 italic opacity-90">Reality</span>
          </h1>

          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-fluid-small px-4 font-sans leading-relaxed tracking-[0.3em] uppercase opacity-70">
              Let’s be real:{' '}
              <span className="text-foreground font-bold">
                AI is already writing the code you’re trying to learn.
              </span>{' '}
              While you’re dreaming of a six-figure salary, the market is preparing you for{' '}
              <span className="text-foreground font-bold">minimum wage entry roles</span>. We skip
              the fluff. From the drudgery of{' '}
              <span className="text-foreground font-bold">QA Fundamentals</span> to the math-heavy
              hell of <span className="text-foreground font-bold">Three.js</span>, this is a
              survival guide for the <span className="italic">Post-Junior era</span>.
              <span className="text-foreground mt-4 block font-bold">
                Build what machines cannot imagine, or get replaced by a prompt.
              </span>
            </p>
          </div>

          <p className="mt-12 font-serif text-lg italic">A log for the curious.</p>
        </div>
      </Container>
    </header>
  )
}
