'use client'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: '山田 太郎',
    role: 'CEO / 共同創業者',
    bio: '東京大学農学部卒。バイオテクノロジー分野で20年以上の経験を持つ。前職では大手農業企業のCTOを務める。',
    image: '/team-1.jpg',
  },
  {
    name: '佐藤 花子',
    role: 'CTO / 共同創業者',
    bio: 'MIT工学部卒、スタンフォード大学博士号。AI・機械学習の専門家。Google Xでのプロジェクトリード経験あり。',
    image: '/team-2.jpg',
  },
  {
    name: '鈴木 一郎',
    role: 'CSO / 科学責任者',
    bio: '京都大学理学部卒、ハーバード大学博士号。シアノバクテリア研究の第一人者。Nature誌に論文多数掲載。',
    image: '/team-3.jpg',
  },
  {
    name: '田中 美咲',
    role: 'CFO / 財務責任者',
    bio: '慶應義塾大学経済学部卒、MBA取得。投資銀行での10年以上の経験。複数のスタートアップのIPOを成功に導く。',
    image: '/team-4.jpg',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">チームメンバー</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            世界トップクラスの専門家が集結し、地球の未来を創造します
          </p>
        </div>

        {/* チームグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* 画像プレースホルダー */}
              <div className="aspect-square bg-gradient-to-br from-green-100 to-orange-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">👤</div>
                </div>
              </div>

              {/* オーバーレイ情報 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-green-300 mb-3">{member.role}</p>
                  <p className="text-sm opacity-90">{member.bio}</p>
                </div>
              </div>

              {/* デフォルト表示情報 */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* アドバイザー */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">アドバイザー</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['農業省 元大臣', 'ノーベル賞受賞者', 'VC パートナー', '大学教授'].map((advisor, index) => (
              <div key={index} className="bg-gray-50 rounded-full px-6 py-3">
                <p className="text-gray-700 font-medium">{advisor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}