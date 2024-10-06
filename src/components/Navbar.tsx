"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import BookNow from './BookNow'

export default function NavbarApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-[#191720] bg-opacity-70 border-b border-gray-700 shadow-lg backdrop-filter backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
              <Image src="/logowithtext.png" alt="Agency Logo" width={140} height={80} />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavItem href="/" text="Home" />
                <NavItem href="/#services" text="Services" />
                <NavItem href="/#whyus" text="Why Us" />
                {/* <NavItem href="#projects" text="Projects" /> */}
                <NavItem href="/about" text="About" />
                <NavItem href="/faqs" text="FAQs" />
                <NavItem href="/#contact" text="Contact" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <BookNow/>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem href="/" text="Home" />
            <MobileNavItem href="/#services" text="Services" />
            <MobileNavItem href="/#whyus" text="Why us" />
            <MobileNavItem href="/about" text="About" />
            <MobileNavItem href="/#contact" text="Contact" />
          </div>
          <div className="p-4 w-full mx-auto border-t border-gray-700">
           <BookNow/>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
    >
      {text}
    </Link>
  )
}

function MobileNavItem({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
    >
      {text}
    </Link>
  )
}