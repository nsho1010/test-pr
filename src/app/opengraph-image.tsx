import { ImageResponse } from 'next/og'
import { Zap } from 'lucide-react'
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
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
    >
      <Zap style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} fill="currentColor" />
      <span style={{ fontWeight: 'bold', fontSize: '1.125rem', color: 'var(--color-foreground)' }}>{config.appName}</span>
    </div>
  );
  return new ImageResponse(content, size)
}

