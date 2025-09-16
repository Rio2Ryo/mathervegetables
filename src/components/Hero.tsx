'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* メインタイトル */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-primary">MOTHER</span>{' '}
            <span className="text-secondary">VEGETABLES</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">PROJECT</span>
          </h1>

          {/* サブタイトル */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            地球最初の生命体による地球再生プロジェクト
          </p>

          {/* 説明文 */}
          <p className={`text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            38億年前、地球に誕生した最初の生命体「シアノバクテリア」。
            その驚異的な生命力と環境適応能力を現代に蘇らせ、
            地球環境の再生と持続可能な未来を創造します。
          </p>

          {/* CTA ボタン */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg">
              ホワイトペーパーをダウンロード
            </button>
            <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all">
              プロジェクトについて
            </button>
          </div>
        </div>

        {/* ヒーロー画像 */}
        <div className={`mt-16 relative transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="w-full aspect-video bg-gradient-to-br from-green-200 to-orange-200 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-8xl">🌱</div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}