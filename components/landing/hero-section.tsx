/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable import/order */
'use client'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BorderBeam } from '~/components/ui/border-beam'
import AnimatedShinyText from '~/components/ui/animated-shiny-text'
import ShimmerButton from '~/components/ui/shimmer-button'
import SVG from 'react-inlinesvg'
import WavyText from '~/components/ui/wavy-text'
import { ny } from '~/lib/utils'

export default function HeroSection() {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
   return (
      <section
         id="hero"
         className="relative mx-auto gap-[116px] mt-[250px] max-w-7xl px-6 text-center md:px-8"
      >
         <div className={ny(
            'group inline-flex h-7 px-3 py-4 items-center bg-[#bbe8a8] justify-between rounded-full border border-black/5 bg-opacity-15 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-opacity-30 dark:border-white/5 dark:hover:bg-neutral-800',
         )}
         >
            <AnimatedShinyText className="inline-flex items-center justify-center">
               <span>✨ Get early access</span>
               {' '}
               <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
         </div>
         <div className="flex flex-col w-full items-center gap-12 mt-8">
            <div className="flex flex-col gap-4 items-center">
               <div className="flex items-center gap-4 justify-between">
                  <WavyText
                     word="Simplified Deployments on Permaweb"
                     className="text-white text-5xl font-bold tracking-wide"
                  />
               </div>
               <div className="flex items-center gap-2">
                  <p className="text-white text-2xl font-normal tracking-wide text-center">
                     Deployments on arweave now made few clicks away,
                     powered by
                  </p>
                  <SVG src="/ao-logo.svg" />
               </div>
            </div>
            <div className="flex gap-12 items-center">
               <ShimmerButton
                  shimmerColor="#6671F3"
                  className="border-[#525252] max-h-[48px] px-[28px] py-3 border"
               >
                  <span className="text-white text-lg flex items-center gap-2">
                     Join the waitlist now
                     <SVG src="/arrow-top-right.svg" />
                  </span>
               </ShimmerButton>
               {/* <button className='border text-lg py-3 px-5 bg-green-600 cursor-pointer rounded-full'> Join the waitlist</button> */}
            </div>
         </div>
         <div
            ref={ref}
            className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:200ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
         >
            <div
               className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,#16b12f,#28eb48,transparent_40%)] before:[filter:blur(180px)] ${inView ? 'before:animate-image-glow' : ''
                  }`}
            >
               <BorderBeam
                  size={200}
                  duration={12}
                  delay={11}
                  colorFrom="#16b12f"
                  colorTo="#28eb48"
               />

               <img
                  src="/dashboard.png"
                  alt="Hero Image"
                  className="relative hidden size-full rounded-[inherit] border object-contain dark:block"
               />
               <img
                  src="/hero-light.png"
                  alt="Hero Image"
                  className="relative block size-full rounded-[inherit]  border object-contain dark:hidden"
               />
            </div>
         </div>
      </section>
   )
}
