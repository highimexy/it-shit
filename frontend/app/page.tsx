import ThemeSwitch from './components/ThemeSwitch'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="">
        <h1>HOME</h1>
        <ThemeSwitch />
      </main>
    </div>
  )
}
