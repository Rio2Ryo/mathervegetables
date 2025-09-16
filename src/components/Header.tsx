'use client'

import { useState, useEffect } from 'react'
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-550 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <div className="text-xl font-bold">
              <span className="text-primary group-hover:text-emerald-550 transition-colors">MOTHER</span>
              <span className="text-white mx-1">×</span>
              <span className="text-secondary">VEGETABLES</span>
            </div>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#concept"
              onClick={(e) => scrollToSection(e, 'concept')}
              className="text-gray-300 hover:text-primary transition-colors relative group"
            >
              <span>コンセプト</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-550 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#technology"
              onClick={(e) => scrollToSection(e, 'technology')}
              className="text-gray-300 hover:text-primary transition-colors relative group"
            >
              <span>テクノロジー</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-550 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#roadmap"
              onClick={(e) => scrollToSection(e, 'roadmap')}
              className="text-gray-300 hover:text-primary transition-colors relative group"
            >
              <span>ロードマップ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-550 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#team"
              onClick={(e) => scrollToSection(e, 'team')}
              className="text-gray-300 hover:text-primary transition-colors relative group"
            >
              <span>チーム</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-550 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/0912_whitepaper_ja.pdf"
              download
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-emerald-550 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              ホワイトペーパー
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-white"
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
          <div className="md:hidden glass-dark rounded-2xl mt-2 p-6 border border-white/10">
            <a
              href="#concept"
              onClick={(e) => scrollToSection(e, 'concept')}
              className="block py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/10"
            >
              コンセプト
            </a>
            <a
              href="#technology"
              onClick={(e) => scrollToSection(e, 'technology')}
              className="block py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/10"
            >
              テクノロジー
            </a>
            <a
              href="#roadmap"
              onClick={(e) => scrollToSection(e, 'roadmap')}
              className="block py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/10"
            >
              ロードマップ
            </a>
            <a
              href="#team"
              onClick={(e) => scrollToSection(e, 'team')}
              className="block py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/10"
            >
              チーム
            </a>
            <a
              href="/0912_whitepaper_ja.pdf"
              download
              className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary to-emerald-550 text-white rounded-full font-semibold text-center"
            >
              ホワイトペーパー
            </a>
          </div>
        )}
      </div>
    </header>
  )
}