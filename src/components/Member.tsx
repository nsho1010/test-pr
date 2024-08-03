import Image from "next/image";

const members = [
    {
        name: "山田太郎",
        role: "共同創設者, CEO",
        description:
            "革新的なアイデアで会社を牽引し、事業戦略の策定と実行に尽力。10年以上のIT業界経験を活かし、チームをリードしています。",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "鈴木花子",
        role: "共同創設者, CTO",
        description:
            "優れた技術力でプロダクト開発を指揮。最新のテクノロジーを積極的に取り入れ、高品質なサービスの提供に注力しています。",
        image: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "佐藤次郎",
        role: "製品部門責任者",
        description:
            "ユーザー目線に立った製品設計と開発を推進。お客様のニーズを的確に捉え、使いやすく価値あるプロダクトの創出に努めています。",
        image: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "田中美咲",
        role: "マーケティング部門責任者",
        description:
            "市場調査と分析を基に、効果的なマーケティング戦略を立案・実行。ブランド認知度の向上と顧客獲得に貢献しています。",
        image: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const Member = () => {
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter underline decoration-primary decoration-1 underline-offset-8">
                        チーム紹介
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        私たちのチームは、多様な背景とスキルを持つメンバーで構成されています。それぞれの専門性を活かし、協力し合いながら、お客様に最高のサービスを提供することを目指しています。
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col items-center justify-center space-y-4"
                        >
                            <Image
                                alt={member.name}
                                className="aspect-square w-32 rounded-full object-cover"
                                src={member.image}
                                width={100}
                                height={100}
                            />
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground">
                                    {member.role}
                                </p>
                                <p className="text-muted-foreground">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Member;
