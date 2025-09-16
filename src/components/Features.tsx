'use client'

import { useEffect, useRef, useState } from 'react'

interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: '革新的なバイオテクノロジー',
    description: 'シアノバクテリアの遺伝子編集技術により、CO2吸収能力を最大化し、酸素生成効率を向上させます。',
    icon: '🧬',
  },
  {
    title: '持続可能な農業システム',
    description: '土壌改良と栄養価の高い作物生産を同時に実現する、次世代の循環型農業モデルを構築します。',
    icon: '🌱',
  },
  {
    title: 'カーボンニュートラル',
    description: '大気中のCO2を効率的に固定し、地球温暖化対策に貢献する革新的なソリューションを提供します。',
    icon: '🌍',
  },
  {
    title: 'エネルギー生産',
    description: 'バイオマスを活用したクリーンエネルギーの生成により、持続可能なエネルギー供給を実現します。',
    icon: '⚡',
  },
  {
    title: 'データドリブン最適化',
    description: 'AIとIoTを活用した環境モニタリングと最適化により、効率的な生産管理を実現します。',
    icon: '📊',
  },
  {
    title: 'グローバル展開',
    description: '世界中の農業地域と連携し、地球規模での環境改善と食料安全保障に貢献します。',
    icon: '🌐',
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
            setVisibleCards((prev) => [...prev, index])
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
  }, [])

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">プロジェクトの特徴</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className={`feature-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}