import { ConfigProps } from "../types/config";

const config = {
  // 必須
  appName: "爆速コーポレーション",
  // 必須: アプリの説明をSEOタグに記載するための設定
  appDescription:
    "私たちは、最新テクノロジーとイノベーションで、お客様の業務効率を爆速化します。",
  // 必須: ドメイン名 (no https://, not trialing slash at the end, just the naked domain)
  domainName: "bakusoku-hp.com",
  // twitterのユーザー名
  twitter: "",
  // HeaderとFooterで表示するリンク
  links: [
    {
      href: "/#news",
      label: "お知らせ",
    },
    {
      href: "/#company-info",
      label: "会社情報",
    },
    {
      href: "/#contact",
      label: "お問い合わせ",
    },
  ],
  // Google AnalyticsのID
  googleAnalyticsId: "G-thisistestid",
} as ConfigProps;

export default config;
