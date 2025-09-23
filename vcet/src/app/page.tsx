"use client";
import React, { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";

// Load Canvas only on the client
const Canvas = dynamic(() => import("@react-three/fiber").then(m => m.Canvas), { ssr: false });
const OrbitControls = dynamic(() => import("@react-three/drei").then(m => m.OrbitControls), { ssr: false });
const Stars = dynamic(() => import("@react-three/drei").then(m => m.Stars), { ssr: false });
const Float = dynamic(() => import("@react-three/drei").then(m => m.Float), { ssr: false });

function FloatingShape() {
  const color = useMemo(() => "#9b87f5", []);
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh castShadow position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <Stars radius={60} depth={40} count={1800} factor={4} saturation={0} fade speed={1} />
        <FloatingShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Suspense>
    </>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_70%_10%,rgba(155,135,245,0.25),transparent_60%),radial-gradient(800px_400px_at_20%_30%,rgba(56,189,248,0.18),transparent_60%)]" />

      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-white/10 ring-1 ring-white/10 flex items-center justify-center">🏋️‍♂️</div>
            <span className="text-sm tracking-widest uppercase text-white/70">Vridhee Gym</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#coaches" className="hover:text-white transition-colors">Coaches</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-white/10 px-4 py-2 text-sm backdrop-blur ring-1 ring-white/15 hover:bg-white/15 transition-colors">Sign in</button>
            <button className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-400 transition-colors">Join now</button>
          </div>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Personalized coaching, measurable results
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Train smarter. Get stronger. Feel unstoppable.
            </h1>
            <p className="text-white/70 max-w-prose">
              Elite programs designed by world-class coaches. Adaptive workouts, recovery guidance, and nutrition insights—all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#get-started" className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium hover:bg-indigo-400 transition-colors">Get started</a>
              <a href="#programs" className="rounded-md bg-white/10 px-5 py-2.5 text-sm backdrop-blur ring-1 ring-white/15 hover:bg-white/15 transition-colors">Explore programs</a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-white/60">
              <div>
                <p className="text-2xl font-semibold text-white">+25k</p>
                <p className="text-xs">Members transformed</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">4.9★</p>
                <p className="text-xs">Average coach rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">12</p>
                <p className="text-xs">Specialized tracks</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                <color attach="background" args={["#000000"]} />
                <Scene />
              </Canvas>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </section>

      <section id="programs" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6">
          <ProgramCard title="Strength & Hypertrophy" desc="Build muscle with progressive overload and perfect form." icon="💪" />
          <ProgramCard title="Conditioning & HIIT" desc="Boost VO₂ max, endurance, and athletic performance." icon="⚡" />
          <ProgramCard title="Mobility & Recovery" desc="Move better, prevent injuries, and recover faster." icon="🧘" />
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Vridhee Gym. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProgramCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-xl p-6 ring-1 ring-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:bg-white/7 transition-colors">
      <div className="size-9 rounded-md bg-white/10 ring-1 ring-white/10 flex items-center justify-center mb-4">
        <span className="text-lg">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  );
}

