import { ImageResponse } from 'next/og'
import config from '@/config'

export const runtime = 'edge' 
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
    >
      {config.appName}
    </div>
  );
  return new ImageResponse(content, size)
}