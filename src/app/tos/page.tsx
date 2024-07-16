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
  title: '利用規約 | ' + config.appName,
  description: config.appDescription,
  openGraph: {
    title: '利用規約 | ' + config.appName,
    description: config.appDescription,
  }
})

const TermsOfServicePage = () => {
  return (
    <main className="max-w-prose mx-auto space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>利用規約</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="prose prose-slate mx-auto dark:prose-invert">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">爆速ホームページ 利用規約</h1>
          <p className="mb-4">
            株式会社Float Engineering（以下、「当社」といいます。）は、当社が提供する爆速ホームページサービス（以下、「本サービス」といいます。）の利用に関して、以下の通り利用規約（以下、「本規約」といいます。）を定めます。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">第1条（適用）</h2>
          <p className="mb-4">
            本規約は、本サービスの利用に関する当社と利用者との間の権利義務関係を定めることを目的とし、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">第2条（定義）</h2>
          <p className="mb-4">
            本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>「ボイラープレートコード」とは、当社が提供する、ウェブサイト構築のための再利用可能なコードテンプレートを指します。</li>
            <li>「利用者」とは、本サービスを利用する個人または法人を指します。</li>
          </ol>
          
          <h2 className="text-2xl font-bold mb-2">第3条（ボイラープレートコードの利用）</h2>
          <p className="mb-4">
            利用者は、本サービスで提供されるボイラープレートコードを、以下の条件に従って利用することができます：
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>ボイラープレートコードは、利用者自身のウェブサイト構築のためにのみ使用できます。</li>
            <li>ボイラープレートコードの再配布、販売、または他者への譲渡は禁止します。</li>
            <li>ボイラープレートコードを使用して作成されたウェブサイトに、当社のクレジット表示を残す必要はありません。</li>
          </ol>
          
          <h2 className="text-2xl font-bold mb-2">第4条（免責事項）</h2>
          <p className="mb-4">
            当社は、本サービスおよびボイラープレートコードの品質、正確性、完全性、有用性、最新性、適法性を保証するものではありません。また、本サービスの利用によって生じたいかなる損害についても、当社は一切の責任を負いません。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">第5条（著作権）</h2>
          <p className="mb-4">
            本サービスで提供されるボイラープレートコードを含むすべてのコンテンツ（文章、画像、デザイン等）の著作権は、当社または原著作者に帰属します。ただし、第3条に定める利用範囲内での使用は許可されます。
          </p>
          
          <h2 className="text-2xl font-bold mb-2">第6条（規約の変更）</h2>
          <p className="mb-4">
            当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲載された時点から効力を生じるものとします。
          </p>
          
          <p className="text-right">以上</p>
        </div>
      </article>
    </main>
  );
};

export default TermsOfServicePage;