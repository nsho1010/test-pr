import Image from "next/image";

const companyInfoData = {
  name: "株式会社爆速カンパニー",
  location: "〒163-8001 東京都新宿区西新宿2-8-1",
  established: "2024年6月1日",
  capital: "100万円",
  president: "山田太郎",
  business: "爆速ソリューション開発",
};

const CompanyInfo = () => {
  return (
    <section id="company-info" className="flex flex-col items-center justify-center space-y-8" >
      <h2 className="text-3xl font-bold tracking-tight underline decoration-primary decoration-1 underline-offset-8">会社情報</h2>
      <div className="flex flex-col-reverse md:flex-row gap-16"> 
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <Image
            src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={companyInfoData.name}
            width={400}
            height={400}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{companyInfoData.name}</h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-medium">所在地</dt>
              <dd>{companyInfoData.location}</dd>
            </div>
            <div>
              <dt className="font-medium">設立</dt>
              <dd>{companyInfoData.established}</dd>
            </div>
            <div>
              <dt className="font-medium">資本金</dt>
              <dd>{companyInfoData.capital}</dd>
            </div>
            <div>
              <dt className="font-medium">代表者</dt>
              <dd>{companyInfoData.president}</dd>
            </div>
            <div>
              <dt className="font-medium">事業内容</dt>
              <dd>{companyInfoData.business}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )};

export default CompanyInfo;

