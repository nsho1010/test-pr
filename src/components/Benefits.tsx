import Image from "next/image";
import config from "@/config";

const benefitsData = [
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "生産性の向上",
    description: "当社の製品を導入することで、業務の自動化と効率化が図れます。これにより、社員の生産性が向上し、より高い価値を生み出すことができます。",
  },
  {
    image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "コスト削減",
    description: "当社のソリューションは、運用コストを大幅に削減します。クラウドベースのサービスにより、インフラ投資が不要となり、長期的なコスト削減が可能です。",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "セキュリティの強化",
    description: "当社の製品は、高度なセキュリティ機能を備えています。データの暗号化、アクセス制御、脆弱性対策など、多層的なセキュリティ対策により、お客様の大切な情報を守ります。",
  },
];

const Benefits = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            お客様のビジネスを<span className="text-primary">爆速</span>にします
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            貴社の課題、{config.appName}なら解決できます。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <Image
                alt={benefit.title}
                width={360}
                height={240}
                src={benefit.image}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Benefits;
