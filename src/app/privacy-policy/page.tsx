import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import 'highlight.js/styles/hybrid.css';
import { getSEOTags } from '@/lib/seo';
import config from '@/config'

export const metadata = getSEOTags({
  title: 'プライバシーポリシー | ' + config.appName,
  description: config.appDescription,
  openGraph: {
    title: 'プライバシーポリシー | ' + config.appName,
    description: config.appDescription,
  }
})

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-prose mx-auto space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>プライバシーポリシー</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="prose prose-slate mx-auto dark:prose-invert">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">爆速ホームページ プライバシーポリシー</h1>
          <p className="mb-4">
            株式会社爆速コーポレーション（以下「当社」といいます）は、爆速ホームページサービス（以下「本サービス」といいます）における、お客様の個人情報の取扱いについて、以下のプライバシーポリシーを定めます。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">1. 収集する個人情報</h2>
          <p className="mb-4">
            当社は、本サービスの提供にあたり、以下の個人情報を収集することがあります：
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>会社名（法人の場合）</li>
            <li>Github Account</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">2. 個人情報の利用目的</h2>
          <p className="mb-4">
            収集した個人情報は、以下の目的で利用します：
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>本サービスの提供および運営</li>
            <li>お客様からのお問い合わせへの対応</li>
            <li>サービスの改善および新機能の開発</li>
            <li>利用状況の分析および統計情報の作成</li>
            <li>当社からのお知らせや広告の送信（お客様の同意がある場合）</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">3. 個人情報の安全管理</h2>
          <p className="mb-4">
            当社は、お客様の個人情報を厳重に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、適切なセキュリティ対策を講じます。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">4. 個人情報の第三者提供</h2>
          <p className="mb-4">
            当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">5. クッキーの使用</h2>
          <p className="mb-4">
            本サービスでは、お客様の利便性向上のためにクッキーを使用することがあります。クッキーの使用を望まない場合は、ブラウザの設定で拒否することができます。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">6. 個人情報の開示・訂正・削除</h2>
          <p className="mb-4">
            お客様は、当社に対してご自身の個人情報の開示、訂正、削除を請求することができます。請求を希望される場合は、下記のお問い合わせ窓口までご連絡ください。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">7. プライバシーポリシーの変更</h2>
          <p className="mb-4">
            当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、本サービスのウェブサイト上で公表いたします。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">8. お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。<br />
            株式会社爆速コーポレーション　個人情報取扱担当<br />
            住所：東京都新宿区西新宿1-1-1<br />
            電話番号：03-1234-5678<br />
            メールアドレス：privacy@bakusoku.co.jp
          </p>
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicyPage;