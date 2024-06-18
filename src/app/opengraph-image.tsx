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
      className='flex items-center justify-center h-full'
    >
      <Zap className="w-6 h-6 text-primary" fill="currentColor" />
      <span className="font-extrabold text-lg text-foreground">{config.appName}</span>
    </div>
  );
  return new ImageResponse(content, size)
}