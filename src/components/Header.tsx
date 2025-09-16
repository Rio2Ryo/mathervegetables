'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">MOTHER</span>{' '}
              <span className="text-secondary">VEGETABLES</span>
            </div>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#concept" className="text-gray-700 hover:text-primary transition-colors">
              コンセプト
            </Link>
            <Link href="#technology" className="text-gray-700 hover:text-primary transition-colors">
              テクノロジー
            </Link>
            <Link href="#roadmap" className="text-gray-700 hover:text-primary transition-colors">
              ロードマップ
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-primary transition-colors">
              チーム
            </Link>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              ホワイトペーパー
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4">
            <Link href="#concept" className="block py-2 text-gray-700 hover:text-primary">
              コンセプト
            </Link>
            <Link href="#technology" className="block py-2 text-gray-700 hover:text-primary">
              テクノロジー
            </Link>
            <Link href="#roadmap" className="block py-2 text-gray-700 hover:text-primary">
              ロードマップ
            </Link>
            <Link href="#team" className="block py-2 text-gray-700 hover:text-primary">
              チーム
            </Link>
            <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              ホワイトペーパー
            </button>
          </div>
        )}
      </div>
    </header>
  )
}