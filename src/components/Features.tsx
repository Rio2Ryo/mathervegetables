'use client'

import { useEffect, useRef, useState } from 'react'

interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

const features: Feature[] = [
  {
    title: '革新的なバイオテクノロジー',
    description: 'シアノバクテリアの遺伝子編集技術により、CO2吸収能力を最大化し、酸素生成効率を向上させます。',
    icon: '🧬',
    color: 'from-primary/20 to-emerald-550/20',
  },
  {
    title: '持続可能な農業システム',
    description: '土壌改良と栄養価の高い作物生産を同時に実現する、次世代の循環型農業モデルを構築します。',
    icon: '🌱',
    color: 'from-emerald-550/20 to-primary/20',
  },
  {
    title: 'カーボンニュートラル',
    description: '大気中のCO2を効率的に固定し、地球温暖化対策に貢献する革新的なソリューションを提供します。',
    icon: '🌍',
    color: 'from-blue-500/20 to-primary/20',
  },
  {
    title: 'エネルギー生産',
    description: 'バイオマスを活用したクリーンエネルギーの生成により、持続可能なエネルギー供給を実現します。',
    icon: '⚡',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: 'データドリブン最適化',
    description: 'AIとIoTを活用した環境モニタリングと最適化により、効率的な生産管理を実現します。',
    icon: '📊',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'グローバル展開',
    description: '世界中の農業地域と連携し、地球規模での環境改善と食料安全保障に貢献します。',
    icon: '🌐',
    color: 'from-secondary/20 to-red-500/20',
  },
]

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            if (!visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.feature-card')
    cards.forEach((card) => {
      observerRef.current?.observe(card)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [visibleCards])

  return (
    <section id="concept" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm text-gray-300">PROJECT FEATURES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">革新的な特徴</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            最先端のバイオテクノロジーと持続可能な農業システムを融合し、
            地球環境の再生と人類の未来を守ります
          </p>
        </div>

        {/* フィーチャーグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card group relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-emerald-550 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="/0912_whitepaper_ja.pdf"
            download
            className="inline-flex items-center space-x-2 px-8 py-4 glass border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all group"
          >
            <span>技術詳細を確認する</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}