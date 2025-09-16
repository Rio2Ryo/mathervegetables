'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TechTab {
  id: string
  title: string
  content: string
  image: string
}

const techTabs: TechTab[] = [
  {
    id: 'biotech',
    title: 'バイオテクノロジー',
    content: 'シアノバクテリアの遺伝子編集技術により、光合成効率を最大300%向上。CRISPR-Cas9技術を用いた精密な遺伝子改変により、環境適応性と生産性を飛躍的に向上させています。',
    image: '/tech-biotech.jpg',
  },
  {
    id: 'ai',
    title: 'AI・機械学習',
    content: '環境データをリアルタイムで分析し、最適な生育条件を自動調整。ディープラーニングにより、収穫量予測精度95%以上を実現し、資源利用効率を最大化します。',
    image: '/tech-ai.jpg',
  },
  {
    id: 'iot',
    title: 'IoTセンサー',
    content: '土壌、水質、大気の状態を24時間365日モニタリング。1000以上のセンサーネットワークにより、微細な環境変化も見逃さず、即座に対応可能です。',
    image: '/tech-iot.jpg',
  },
  {
    id: 'blockchain',
    title: 'ブロックチェーン',
    content: '生産から流通まで全工程をトレース可能に。スマートコントラクトにより、透明性の高い取引と品質保証を実現し、消費者の信頼を獲得します。',
    image: '/tech-blockchain.jpg',
  },
]

export default function Technology() {
  const [activeTab, setActiveTab] = useState(techTabs[0])

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">革新的テクノロジー</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最先端の科学技術を統合し、持続可能な地球環境の実現へ
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab.id === tab.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              {activeTab.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {activeTab.content}
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">業界最高水準の技術革新</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">持続可能な開発目標への貢献</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">スケーラブルなソリューション</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {activeTab.id === 'biotech' && '🧬'}
                    {activeTab.id === 'ai' && '🤖'}
                    {activeTab.id === 'iot' && '📡'}
                    {activeTab.id === 'blockchain' && '🔗'}
                  </div>
                  <p className="text-xl font-semibold text-gray-700">{activeTab.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}