import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const productData = [
  {
    name: "SmartConnect",
    description: "AIを活用した革新的なIoTプラットフォーム。様々なデバイスをシームレスに接続し、データ収集・分析・制御を可能にします。",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#"
  },
  {
    name: "CyberShield",
    description: "ブロックチェーン技術を用いた次世代のセキュリティソリューション。サイバー攻撃からデータを保護し、安全性と信頼性を提供します。",
    image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#"
  },
  {
    name: "HealthOptimizer",
    description: "機械学習を用いた個別化医療ソリューション。患者のデータを分析し、最適な治療方法を提案。医療の効率化と患者のQoL向上に貢献します。",
    image: "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#"
  }
];

const Product = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center mx-auto gap-4 lg:gap-8">
        <div className="space-y-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter underline decoration-primary decoration-1 underline-offset-8">プロダクト紹介</h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
            これまでにリリースしたプロダクトを紹介します。
          </p>
        </div>
        <div className="mx-auto grid items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {productData.map((product) => (
            <Card key={product.name} className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
              <Link href={product.url}>
                <CardHeader className="flex justify-center items-center">
                  <Image alt="Product Image" className="aspect-video rounded-t-lg object-cover" height="240" src={product.image} width="360" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

