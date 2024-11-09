import { ActivityIcon, CheckIcon, Link, LockIcon, PowerIcon } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className="w-full py-12 lg:py-24 xl:py-32 text-center">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 ">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Modern Web Experiences</h1>
            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
              Methodology should not be a fixed track to a fixed destination but a conversation about everything that
              could be made happen.
            </blockquote>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-12 sm:max-w-5xl md:grid-cols-2 md:gap-24 lg:max-w-6xl xl:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="grid w-16 h-16 place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">
              <PowerIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Performance</h3>
              <p className="text-gray-500 dark:text-gray-400">Make your site fast and snappy.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="grid w-16 h-16 place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">
              <LockIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-gray-500 dark:text-gray-400">Protect your users and your data.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="grid w-16 h-16 place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">
              <CheckIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500 dark:text-gray-400">Ensure your site is always available.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="grid w-16 h-16 place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">
              <ActivityIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Developer Experience</h3>
              <p className="text-gray-500 dark:text-gray-400">Make development fun and productive.</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Contact Sales
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Tour the Platform
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default About