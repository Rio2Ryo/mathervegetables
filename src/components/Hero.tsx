'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-550/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></span>
            <span className="text-sm text-gray-300">地球再生プロジェクト始動</span>
          </div>

          {/* メインタイトル */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-gradient">MOTHER</span>
            <br />
            <span className="text-white">
              <span className="text-secondary">VEGETABLES</span>
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-400">PROJECT</span>
          </h1>

          {/* サブタイトル */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 font-light transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            38億年前の生命の知恵で、地球の未来を創造する
          </p>

          {/* 説明文 */}
          <p className={`text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            シアノバクテリアの驚異的な生命力と最先端のバイオテクノロジーを融合。
            カーボンニュートラルを超えた、カーボンネガティブな未来を実現します。
          </p>

          {/* CTA ボタン */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="/0912_whitepaper_ja.pdf"
              download
              className="group px-8 py-4 bg-gradient-to-r from-primary to-emerald-550 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
            >
              <span>ホワイトペーパーを読む</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <button className="px-8 py-4 glass border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all">
              プロジェクトの詳細を見る
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-gray-400">CO2吸収効率</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-secondary mb-2">38億年</div>
              <div className="text-sm text-gray-400">生命の歴史</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-emerald-500 mb-2">100ha</div>
              <div className="text-sm text-gray-400">実証農場</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">2025</div>
              <div className="text-sm text-gray-400">商業化開始</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={`mt-20 relative transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Placeholder for hero image */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden glass border border-white/10">
              <Image
                src="/hero-earth-regeneration-Dnk2z_VF.png"
                alt="Earth Regeneration"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating particles */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
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