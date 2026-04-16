'use client'

import { BackgroundGrid } from '../components/BackgroundGrid'
import { SectionDivider } from '../components/SectionDivider'
import { SubpageHeader } from '../components/SubpageHeader'
import { Container } from '../wrappers/Container'
import Link from 'next/link'

export default function ThreePage() {
  const accentColor = 'text-red-500'

  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="Three.js & WebGL"
        subtitle="Pushing the boundaries of the browser. Shaders, raycasting, and immersive 3D environments."
        accentColor="text-red-500"
      />
      <SectionDivider />

      {/* SECTION 01: THE MATHEMATICS */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                01 / Vector
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Vector <br />
                <span className={`italic opacity-30 ${accentColor}`}>Madness</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                High school geometry is no longer a memory—it is the law. In 3D, if you can't
                calculate it, it doesn't exist.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-8">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "Matrices and quaternions are the invisible scaffolding of your world. One wrong
                  digit and your reality collapses."
                </p>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="border-foreground/10 border-t pt-6">
                    <h4
                      className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                    >
                      Linear Algebra
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Mastering Dot products, Cross products, and Matrix transformations. Everything
                      from camera movement to light reflection depends on these calculations.
                    </p>
                  </div>
                  <div className="border-foreground/10 border-t pt-6">
                    <h4
                      className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                    >
                      Coordinate Systems
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Navigating the difference between Local, World, and Screen space. Mapping a 2D
                      mouse click to a 3D object is the first "magic" trick you'll master.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 02: SHADERS & PIPELINE */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                02 / The
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The <br />
                <span className={`italic opacity-30 ${accentColor}`}>Pipeline</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Moving from the CPU to the GPU. Learning to talk directly to the graphics card.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="grid gap-12">
                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      01
                    </span>
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      Vertex Shaders
                    </h4>
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
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      Fragment Shaders
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Calculating the color of every pixel on the screen. From photorealistic lighting
                    to glitch effects and generative noise patterns. This is pure GLSL math.
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
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 03: THE 3D STACK */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                03 / The
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The <br />
                <span className={`italic opacity-30 ${accentColor}`}>Stack</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                The industry-standard ecosystem for building web-based immersion.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
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
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Engine</td>
                      <td className="py-6 font-bold italic underline decoration-red-500/30">
                        Three.js
                      </td>
                      <td className="py-6">
                        The abstraction layer for WebGL. Scenes, Lights, Meshes.
                      </td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">React Wrapper</td>
                      <td className="py-6 font-bold italic underline decoration-red-500/30">
                        R3F (Drei)
                      </td>
                      <td className="py-6">Declarative 3D within the React ecosystem.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Modeling</td>
                      <td className="py-6 font-bold italic underline decoration-red-500/30">
                        Blender
                      </td>
                      <td className="py-6">Exporting GLTF/GLB assets and baking textures.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 04: PERFORMANCE */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                04 / Optimization
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Optimization <br />
                <span className={`italic opacity-30 ${accentColor}`}>Wall</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                The GPU is powerful, but it has limits. 60 FPS is not a suggestion—it's a
                requirement.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="flex flex-col gap-12">
                <div className="border-l-2 border-red-500/20 pl-8">
                  <h4 className={`font-sans font-bold tracking-widest uppercase ${accentColor}`}>
                    Draw Calls
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Every object is a request to the GPU. Learning to batch geometries and
                    instantiate meshes to keep the frame rate stable on mobile devices.
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
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* THE ACADEMY / ROADMAP */}
      <section className="relative overflow-hidden bg-red-500/3">
        {/* IMPLEMENTACJA GRIDA W TLE - CZERWONY AKCENT (3D SPACE) */}
        <BackgroundGrid color="rgb(239 68 68 / 0.1)" />

        <Container>
          <div className="relative z-10 px-6 py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl text-left">
                <span className="text-fluid-small font-sans font-bold tracking-[0.4em] text-red-500 uppercase">
                  The Academy
                </span>
                <h2 className="text-fluid-h2 mt-4 font-serif leading-none tracking-tighter uppercase">
                  3D <br />
                  <span className="text-fluid-h1 text-red-500 italic opacity-30">Laboratory</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  Geometry is the language of reality. Step into the laboratory to master the
                  vectors, matrices, and shaders that build immersive worlds.
                </p>
              </div>
              <div className="hidden border-l border-red-500/20 pl-6 text-left lg:block">
                <span className="block font-mono text-[10px] uppercase opacity-40">
                  Engine v2.4
                </span>
                <span className="mt-1 block font-mono text-[10px] font-bold text-red-500 uppercase">
                  3 Dimensions Available
                </span>
              </div>
            </div>

            {/* ROADMAP STEPS GRID */}
            <div className="bg-foreground/10 border-foreground/10 mt-20 grid gap-px border text-left">
              {/* STEP 01 - THE GEOMETRY LEXICON */}
              <Link
                href="/3d/dictionary"
                className="group bg-background relative p-10 transition-colors hover:bg-red-500/3"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-center gap-8">
                    <span className="font-serif text-4xl opacity-10 transition-all group-hover:text-red-500 group-hover:opacity-100">
                      01
                    </span>
                    <div>
                      <h3 className="font-sans font-bold tracking-widest text-white uppercase">
                        Geometry Lexicon
                      </h3>
                      <p className="mt-2 text-sm opacity-50">
                        Understanding Normals, UVs, and Matrices. The vocabulary of the 3rd
                        dimension.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 border px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:border-red-500">
                    Start Training →
                  </span>
                </div>
              </Link>

              {/* STEP 02 - SHADER DRILLS */}
              <Link
                href="/3d/shader-drills"
                className="group bg-background relative p-10 transition-colors hover:bg-red-500/3"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-center gap-8">
                    <span className="font-serif text-4xl opacity-10 transition-all group-hover:text-red-500 group-hover:opacity-100">
                      02
                    </span>
                    <div>
                      <h3 className="font-sans font-bold tracking-widest text-white uppercase">
                        Shader Pipeline
                      </h3>
                      <p className="mt-2 text-sm opacity-50">
                        Vertex and Fragment logic drills. Writing your first GLSL noise patterns.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 border px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:border-red-500">
                    Enter Pipeline →
                  </span>
                </div>
              </Link>

              {/* STEP 03 - IMMERSIVE SYSTEMS */}
              <Link
                href="/3d/architecture"
                className="group bg-background relative p-10 transition-colors hover:bg-red-500/3"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-center gap-8">
                    <span className="font-serif text-4xl opacity-10 transition-all group-hover:text-red-500 group-hover:opacity-100">
                      03
                    </span>
                    <div>
                      <h3 className="font-sans font-bold tracking-widest text-white uppercase">
                        Scene Architecture
                      </h3>
                      <p className="mt-2 text-sm opacity-50">
                        Managing lights, shadows, and R3F lifecycle for production-ready
                        experiences.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 border px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:border-red-500">
                    Start Building →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* FINAL MANIFESTO LINK */}
      <section className="text-center">
        <Container>
          <div className="relative flex flex-col items-center px-6 py-24">
            <div className="pointer-events-none absolute top-10 right-10 hidden font-serif text-[clamp(4rem,15vw,12rem)] leading-none tracking-tighter uppercase opacity-[0.03] select-none lg:block">
              The
            </div>
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
