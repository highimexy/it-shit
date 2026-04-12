'use client'

import { SectionDivider } from '../components/SectionDivider'
import { SubpageHeader } from '../components/SubpageHeader'
import { Container } from '../wrappers/Container'
import Link from 'next/link'

// Lokalny komponent pomocniczy dla spójności sekcji
function SectionLayout({
  number,
  title,
  accentTitle,
  subtitle,
  children,
  accentColor = 'text-red-500',
}: {
  number: string
  title: string
  accentTitle: string
  subtitle: string
  children: React.ReactNode
  accentColor?: string
}) {
  return (
    <section className="border-foreground/10 overflow-hidden border-b py-20">
      <Container>
        <div className="flex flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-1/3">
            <span
              className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
            >
              {number} / {title}
            </span>
            <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter break-words uppercase">
              {title} <br />
              <span className={`italic opacity-30 ${accentColor}`}>{accentTitle}</span>
            </h2>
            <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
              {subtitle}
            </p>
          </div>
          <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">{children}</div>
        </div>
      </Container>
    </section>
  )
}

export default function ThreePage() {
  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="Three.js & WebGL"
        subtitle="Pushing the boundaries of the browser. Shaders, raycasting, and immersive 3D environments."
        accentColor="text-red-500"
      />
      <SectionDivider />

      {/* SECTION 01: THE MATHEMATICS */}
      <SectionLayout
        number="01"
        title="Vector"
        accentTitle="Madness"
        subtitle="High school geometry is no longer a memory—it is the law. In 3D, if you can't calculate it, it doesn't exist."
      >
        <div className="space-y-8">
          <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
            "Matrices and quaternions are the invisible scaffolding of your world. One wrong digit
            and your reality collapses."
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-foreground/10 border-t pt-6">
              <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest text-red-500 uppercase">
                Linear Algebra
              </h4>
              <p className="text-sm leading-relaxed opacity-60">
                Mastering Dot products, Cross products, and Matrix transformations. Everything from
                camera movement to light reflection depends on these calculations.
              </p>
            </div>
            <div className="border-foreground/10 border-t pt-6">
              <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest text-red-500 uppercase">
                Coordinate Systems
              </h4>
              <p className="text-sm leading-relaxed opacity-60">
                Navigating the difference between Local, World, and Screen space. Mapping a 2D mouse
                click to a 3D object is the first "magic" trick you'll master.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* SECTION 02: SHADERS & PIPELINE */}
      <SectionLayout
        number="02"
        title="The"
        accentTitle="Pipeline"
        subtitle="Moving from the CPU to the GPU. Learning to talk directly to the graphics card."
      >
        <div className="grid gap-12">
          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                01
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">Vertex Shaders</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Manipulating the position of every single point in your geometry. This is how we
              create procedural waves, wind blowing through grass, or morphing shapes.
            </p>
          </article>

          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                02
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">Fragment Shaders</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Calculating the color of every pixel on the screen. From photorealistic lighting to
              glitch effects and generative noise patterns. This is pure GLSL math.
            </p>
          </article>

          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                03
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">Raycasting</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Firing invisible lasers from the camera to detect intersections. Essential for
              hovering over objects, clicking buttons in 3D, and simple physics.
            </p>
          </article>
        </div>
      </SectionLayout>

      {/* SECTION 03: THE 3D STACK */}
      <SectionLayout
        number="03"
        title="The"
        accentTitle="Stack"
        subtitle="The industry-standard ecosystem for building web-based immersion."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-[11px] tracking-widest uppercase">
            <thead>
              <tr className="border-foreground/20 border-b text-[10px] opacity-40">
                <th className="pb-4 font-bold">Category</th>
                <th className="pb-4 font-bold">Tool</th>
                <th className="pb-4 font-bold">Technical Role</th>
              </tr>
            </thead>
            <tbody className="opacity-80">
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Engine</td>
                <td className="py-6 font-bold italic underline decoration-red-500/30">Three.js</td>
                <td className="py-6">The abstraction layer for WebGL. Scenes, Lights, Meshes.</td>
              </tr>
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">React Wrapper</td>
                <td className="py-6 font-bold italic underline decoration-red-500/30">
                  R3F (Drei)
                </td>
                <td className="py-6">Declarative 3D within the React ecosystem.</td>
              </tr>
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Modeling</td>
                <td className="py-6 font-bold italic underline decoration-red-500/30">Blender</td>
                <td className="py-6">Exporting GLTF/GLB assets and baking textures.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionLayout>

      {/* SECTION 04: PERFORMANCE */}
      <SectionLayout
        number="04"
        title="Optimization"
        accentTitle="Wall"
        subtitle="The GPU is powerful, but it has limits. 60 FPS is not a suggestion—it's a requirement."
      >
        <div className="flex flex-col gap-12">
          <div className="border-l-2 border-red-500/20 pl-8">
            <h4 className="font-sans font-bold tracking-widest text-red-500 uppercase">
              Draw Calls
            </h4>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Every object is a request to the GPU. Learning to batch geometries and instantiate
              meshes to keep the frame rate stable on mobile devices.
            </p>
          </div>
          <div className="border-l-2 border-red-500/20 pl-8 text-justify opacity-60 lg:text-left">
            <h4 className="font-sans font-bold tracking-widest text-white uppercase">
              Texture Baking
            </h4>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Fake it 'til you make it. Calculating lights in Blender and "painting" them onto
              textures to avoid expensive real-time shadow calculations in the browser.
            </p>
          </div>
        </div>
      </SectionLayout>

      {/* FINAL MANIFESTO LINK */}
      <section className="py-24 text-center">
        <Container>
          <div className="flex flex-col items-center px-6">
            <span className="text-fluid-small font-sans tracking-[0.4em] uppercase opacity-40">
              Final Chapter
            </span>
            <h2 className="mt-6 font-serif tracking-tighter uppercase">
              Facing the <span className="text-purple-500 italic">Harsh Truth</span>
            </h2>
            <Link
              href="/reality-check"
              className="text-fluid-small mt-12 border border-red-500/30 px-10 py-5 font-sans tracking-[0.3em] uppercase transition-all duration-500 hover:bg-red-500 hover:text-white"
            >
              Read the full manifesto
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
