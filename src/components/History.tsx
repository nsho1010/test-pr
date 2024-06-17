const historyData = [
  {
    date: "1985年4月",
    title: "早稲田大学 商学部入学",
    description: "商学部にて経営学を学び、特にマーケティングと経営戦略に興味を持つ。"
  },
  {
    date: "1989年3月",
    title: "早稲田大学 商学部卒業",
    description: "優秀な成績で商学部を卒業。在学中にベンチャービジネスコンテストで優勝し、起業家精神を養う。"
  },
  {
    date: "1989年4月",
    title: "大手IT企業 サイバーテック入社",
    description: "システムエンジニアとして、大規模プロジェクトの開発に従事。技術力とリーダーシップを発揮し、着実にキャリアを積む。"
  },
  {
    date: "1999年10月",
    title: "サイバーテック 事業部長に就任",
    description: "事業部長として、新規事業の立ち上げと推進に尽力。AI・IoT分野での先進的な取り組みを主導し、同社の成長に大きく貢献。"
  },
  {
    date: "2009年12月",
    title: "サイバーテックを退職",
    description: "10年間のサイバーテックでの経験を糧に、独立を決意。"
  },
  {
    date: "2010年1月",
    title: "株式会社イノベーションラボ設立",
    description: "共同創設者の鈴木花子とともに、株式会社イノベーションラボを設立。革新的なアイデアを活かし、AI・IoT分野での先進的なプロダクト開発を開始。"
  },
  {
    date: "2015年6月",
    title: "シリーズAラウンドで5億円の資金調達",
    description: "イノベーションラボの急成長が認められ、シリーズAラウンドで5億円の資金調達に成功。事業拡大に弾みをつける。"
  },
  {
    date: "2020年9月",
    title: "シリーズBラウンドで20億円の資金調達",
    description: "グローバル市場への進出を見据え、シリーズBラウンドで20億円の資金調達を実施。更なる成長に向けた基盤を築く。"
  },
  {
    date: "2023年8月",
    title: "株式会社イノベーションラボから株式会社爆速コーポレーションへ社名変更",
    description: "事業の拡大と方向性の明確化を目的に、社名を株式会社爆速コーポレーションに変更。"
  },
  {
    date: "2024年6月",
    title: "シリーズCラウンドで50億円の資金調達",
    description: "爆速コーポレーションとして、シリーズCラウンドで50億円の資金調達を達成。グローバルでのイノベーションを加速させる。"
  }
];

const History = () => {
  return (
    <section className="flex flex-col items-center space-y-12">
      <h2 className="text-3xl font-bold tracking-tight underline decoration-primary decoration-1 underline-offset-8">略歴</h2>

      <div className="prose mx-auto dark:prose-invert">
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border  grid gap-12">
          {historyData.map((history, id) => (
            <div key={id} className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 bg-primary" />
              <div className="font-medium">{history.date} - {history.title}</div>
              <div className="text-muted-foreground">
                {history.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )};

export default History;

