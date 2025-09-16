'use client'

interface RoadmapItem {
  phase: string
  year: string
  title: string
  description: string
  milestones: string[]
}

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    year: '2024 Q1-Q2',
    title: '研究開発・基盤構築',
    description: 'プロジェクトの基礎となる技術開発と研究体制の確立',
    milestones: [
      'シアノバクテリアの遺伝子解析完了',
      '研究施設の設立',
      'コアチームの編成',
      '初期資金調達',
    ],
  },
  {
    phase: 'Phase 2',
    year: '2024 Q3-Q4',
    title: 'プロトタイプ開発',
    description: '小規模実証実験とプロトタイプシステムの構築',
    milestones: [
      '実験農場での栽培開始',
      'IoTセンサーシステム導入',
      'AIモデルの開発',
      'パートナーシップ締結',
    ],
  },
  {
    phase: 'Phase 3',
    year: '2025 Q1-Q2',
    title: 'パイロットプログラム',
    description: '中規模での実証実験と商業化準備',
    milestones: [
      '5ヘクタール規模での実証',
      '生産性200%達成',
      '品質認証取得',
      'サプライチェーン構築',
    ],
  },
  {
    phase: 'Phase 4',
    year: '2025 Q3-Q4',
    title: '商業展開',
    description: '本格的な商業生産とマーケット参入',
    milestones: [
      '商業生産開始',
      '流通ネットワーク確立',
      '海外展開準備',
      'IPO準備',
    ],
  },
  {
    phase: 'Phase 5',
    year: '2026-2027',
    title: 'グローバル展開',
    description: '世界規模での事業展開と技術普及',
    milestones: [
      'アジア・欧州市場参入',
      '100万トン生産達成',
      'カーボンクレジット事業開始',
      '次世代技術開発',
    ],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">開発ロードマップ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            持続可能な未来に向けた、明確な成長戦略
          </p>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* コンテンツ */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-bold text-lg">{item.phase}</span>
                      <span className="text-gray-500">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700 text-sm">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* センターポイント */}
                <div className="relative z-10 my-8 lg:my-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                </div>

                {/* スペーサー */}
                <div className="hidden lg:block lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}