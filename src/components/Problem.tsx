import Image from "next/image";
import { Frown, Turtle, Snail } from "lucide-react";

const problemData = [
  {
    icon: <Turtle className="h-8 w-8" />,
    title: "事業の成長が遅すぎる",
    description: "市場の変化に対応できず、競合他社に後れを取っています。新たな戦略と実行力が必要です。",
  },
  {
    icon: <Snail className="h-8 w-8" />,
    title: "ベンダーの動きが遅すぎる",
    description: "ベンダーとのコミュニケーション不足により、プロジェクトの進捗が遅れています。より密接な連携が求められます。",
  },
  {
    icon: <Frown className="h-8 w-8" />,
    title: "社員の動きが遅すぎる",
    description: "社員のスキル不足やモチベーションの低下により、業務の進捗が滞っています。教育体制の整備と適切なインセンティブ設計が必要です。",

  },
];

const Problem = () => {
  return (
    <section>
      <div className="grid items-center justify-center text-center gap-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">ビジネスの<span className="text-primary">速度</span>に課題を感じていませんか？</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          ビジネスの速度が遅いと、競争力を失い、成長の機会を逃してしまいます。プロジェクトの遅延や社員のパフォーマンス不足など、様々な要因が影響します。今こそ、ビジネスの速度に関する課題に真剣に向き合うべき時です。
        </p>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="400"
            height="880"
            alt="Problem"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="space-y-4">
            <div className="grid gap-6">
              {problemData.map((problem, index) => (
                <div key={index} className="grid gap-2">
                  <div className="flex items-center gap-2">
                    {problem.icon}
                    <h3 className="text-xl font-bold">{problem.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-left">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Problem;
