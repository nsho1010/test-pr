import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const profileData = {
  name: "山田太郎",
  role: "共同創設者, CEO",
  avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bio: "早稲田大学商学部卒業後、大手IT企業のサイバーテックで10年間勤務し、最終的に事業部長として活躍。その後、株式会社イノベーションラボを共同創設し、CEOに就任。イノベーションラボでは革新的なアイデアを活かし、AI・IoT分野での先進的なプロダクト開発を主導。また、グローバル市場を見据えた事業戦略の策定と実行に尽力し、企業価値の向上に貢献。投資家からの信頼も厚く、シリーズCラウンドで50億円の資金調達を成功させる。現在は、イノベーションラボの更なる成長と、社会課題解決に向けた取り組みにチャレンジしている。",
};

const Profile = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:gap-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter underline decoration-primary decoration-1 underline-offset-8">
            代表紹介
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage alt={profileData.name} src={profileData.avatar} style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
            <AvatarFallback>{profileData.name}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight">{profileData.name}</h2>
            <p className="text-muted-foreground">{profileData.role}</p>
          </div>
        </div>
        <div className="max-w-[600px] space-y-4 text-center md:text-left">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profileData.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
