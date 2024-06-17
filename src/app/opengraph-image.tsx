import { ImageResponse } from 'next/og'
import { Noto_Sans_JP } from 'next/font/google'
import { cn } from '@/lib/utils'
import config from '@/config'

export const runtime = 'edge' 
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})
export const alt = config.appName
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  const content = (
    <div
      style={{
        fontSize: 48,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={cn(notoSansJP.className)}
    >
      {config.appName}
    </div>
  );
  return new ImageResponse(content, size)
}