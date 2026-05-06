import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { executives, flowDepartments } from '../data/organization';

function GlowSurface({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.06] backdrop-blur-md
        shadow-[0_0_0_1px_rgba(110,168,255,0.12),0_0_40px_-12px_rgba(22,112,240,0.55),0_16px_48px_-20px_rgba(0,0,0,0.45)]
        ${className}`}
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-400/25 via-transparent to-accent/15 opacity-70" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export default function OrganizationFlowChart() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0a1f44] via-[#071632] to-[#040d1f] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand-500/25 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-[min(90%,520px)] rounded-full bg-brand-400/10 blur-[80px]" />

      <div className="relative z-[1] mx-auto max-w-5xl">
        <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.2em] text-brand-200/90 mb-2">
          Horizontal organizational flow
        </p>
        <p className="text-center text-white/55 text-sm mb-10">Aum Enercon Pvt. Ltd.</p>

        {/* Level 1 — Directors */}
        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-8 max-w-2xl mx-auto">
            {executives.map((exec, i) => (
              <motion.div
                key={exec.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 0.65, 0.2, 1] }}
              >
                <GlowSurface className="p-5 sm:p-6 text-center sm:text-left">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent/95 mb-1.5">
                    {exec.role}
                  </div>
                  <div className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {exec.name}
                  </div>
                </GlowSurface>
              </motion.div>
            ))}
          </div>

          {/* Connector: bracket + spine (desktop) */}
          <div className="hidden sm:block relative h-14 w-full max-w-xl mx-auto mt-1" aria-hidden>
            <svg viewBox="0 0 320 56" className="w-full h-full" preserveAspectRatio="xMidYMid meet" fill="none">
              <defs>
                <linearGradient id="org-flow-line" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#6EA8FF" stopOpacity="0.95" />
                  <stop offset="1" stopColor="#00C2FF" stopOpacity="0.75" />
                </linearGradient>
                <filter id="org-flow-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 52 4 L 52 18 L 160 18 L 160 44 M 268 4 L 268 18 L 160 18"
                stroke="url(#org-flow-line)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#org-flow-glow)"
                className="drop-shadow-[0_0_10px_rgba(0,194,255,0.45)]"
              />
            </svg>
          </div>
          <div className="sm:hidden flex justify-center my-4" aria-hidden>
            <div className="h-10 w-px bg-gradient-to-b from-brand-300 to-accent rounded-full shadow-[0_0_12px_rgba(110,168,255,0.8)]" />
          </div>
        </div>

        {/* Level 2 & 3 — Departments */}
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-7">
          {flowDepartments.map((dept, di) => (
            <motion.div
              key={dept.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.12 + di * 0.05, ease: [0.22, 0.65, 0.2, 1] }}
              className={dept.wide ? 'xl:col-span-2' : 'xl:col-span-1'}
            >
              <GlowSurface className="h-full p-4 sm:p-5 flex flex-col min-h-[140px]">
                <div className="font-display text-[0.95rem] sm:text-base font-semibold text-white mb-4 pb-3 border-b border-white/10">
                  {dept.label}
                </div>
                <div className={`flex flex-col gap-4 ${dept.pods.length > 1 ? 'sm:flex-row sm:gap-5' : ''}`}>
                  {dept.pods.map((pod) => (
                    <div key={pod.role} className="flex-1 min-w-0">
                      <div className="inline-flex rounded-lg bg-brand-500/20 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-accent mb-2.5 ring-1 ring-brand-400/35 shadow-[0_0_16px_-4px_rgba(22,112,240,0.5)]">
                        {pod.role}
                      </div>
                      {pod.teamLines.length > 0 ? (
                        <ul className="space-y-1.5 text-[0.8rem] text-white/75 leading-snug">
                          {pod.teamLines.map((line) => (
                            <li key={line} className="flex gap-2 items-start">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_#00C2FF]" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[0.8rem] text-white/45 italic">Dedicated safety leadership</p>
                      )}
                    </div>
                  ))}
                </div>
              </GlowSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
