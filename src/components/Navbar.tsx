'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? 'bg-white/10 shadow-md backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700">
            <Link href="/">stabilidade</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition">home</Link>
            <Link href="/sobre" className="hover:text-blue-600 transition">sobre</Link>
            <Link href="/contato" className="hover:text-blue-600 transition">contato</Link>
            <Link href="/equipe" className="hover:text-blue-600 transition">equipe</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Menu" className="text-gray-700">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start space-y-2 px-4 py-4 text-gray-700 font-medium text-sm">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Home</Link>
            <Link href="/sobre" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Sobre</Link>
            <Link href="/contato" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Contato</Link>
            <Link href="/equipe" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Equipe</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
