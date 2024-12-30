// https://tailwindui.com/components/marketing/sections/heroes

import { useState } from 'react'

export default function Hero() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('hero.jpg')]">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-56 mb-4">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-4xl tracking-tight text-gray-100 sm:text-6xl poppins-regular relative bottom-6">
              Flexible end-to-end analytics support for <strong>startups</strong> and <strong>small teams</strong>.
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
