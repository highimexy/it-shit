import { SectionDivider } from '../components/SectionDIvider'
import { SubpageHeader } from '../components/SubpageHeader'

export default function QaPage() {
  return (
    <main>
      <SubpageHeader
        title="QA Fundamentals"
        subtitle="Mastering the art of breaking things to make them unbreakable. Logic, edge cases, and quality mindset."
        accentColor="text-green-500"
      />
      <SectionDivider />
    </main>
  )
}
