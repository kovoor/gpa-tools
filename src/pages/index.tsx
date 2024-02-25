import GWAToGPACalculator from "@/components/GWAToGPACalculator"
import TagSEO from "@/components/TagSEO"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  useState
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between lg:justify-normal p-14 lg:p-24 ${inter.className}`}
    >
      <TagSEO
        title={`GWA to GPA (UK) Converter Calculator - Philippines GWA to UK GPA Convert`}
        canonicalSlug="home"
        keywords="gwa to gpa uk convert calculate"
        description="This is an open-source, tool to help convert GWA to GPA. The tool converts GWA (Philippines) to GPA (4.0 scale)"
      />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link
          href="https://github.com/kovoor/"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 underline"
        >
          Philippines GWA to GPA (4.0 Scale) Calculator
        </Link>
        <div className="lg:flex flex-row gap-2 justify-center align-middle items-center mt-10 sm:mt-0 hidden">
          Built in public by{" "}
          <a
            href="https://twitter.com/jakekovoor"
            target="_blank"
            className="flex justify-center bg-white font-bold p-2 rounded-2xl items-center gap-1 border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200  lg:dark:bg-zinc-800/30"
          >
            <Image
              src="/profile-pic.jpg"
              width={30}
              height={10}
              alt="Picture of the developer"
              className="rounded-full"
            />
            @jakekovoor
          </a>
        </div>
      </div>
      <h1 className=" mt-10 text-lg font-bold font-mono underline max-w-xl text-center">
        GWA to GPA (4.0) Converter Calculator - Philippines GWA to UK GPA Convert Tool
      </h1>

      <GWAToGPACalculator />
      <div className="border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800" />

      <div className="grid text-center lg:max-w-2xl lg:w-full lg:mb-0  lg:text-left">
        <a
          href="https://en.wikipedia.org/wiki/Academic_grading_in_the_Philippines#cite_note-3:~:text=1%5D%5B2%5D-,Grade%20point%20scale%20(1.00%E2%80%935.00),-%5Bedit%5D"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Official Source (Wiki){" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Academic grading in the Philippines - Grade point scale (1.00–5.00)
          </p>
        </a>
      </div>
      <div className="flex flex-row gap-2 justify-center align-middle items-center mt-10 sm:mt-0 lg:hidden font-mono text-xs">
        Built in public by{" "}
        <a
          href="https://twitter.com/jakekovoor"
          target="_blank"
          className="flex justify-center bg-white font-bold p-2 rounded-2xl items-center gap-1 border-b border-gray-300     backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200  lg:dark:bg-zinc-800/30"
        >
          <Image
            src="/profile-pic.jpg"
            width={30}
            height={10}
            alt="Picture of the developer"
            className="rounded-full"
          />
          @jakekovoor
        </a>
      </div>
    </main>
  )
}
