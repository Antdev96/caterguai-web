import siteConfig from '../siteConfig'
import { useState } from 'react'

export function Logo({ width = 50, height = 50, className = '' }: { width?: number, height?: number, className?: string }) {
  // Allow using an external image path; if it fails, render an inline SVG fallback
  const logoPath = siteConfig.logo
  const [didError, setDidError] = useState(false)

  return (
    <div className={`inline-flex items-center ${className}`}>
      {!didError ? (
        // Image will be requested from the public/ assets folder
        <img src={logoPath} alt="Caterguai logo" width={width} height={height} onError={() => setDidError(true)} />
      ) : (
        // Inline fallback so there's always a visible logo
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caterguai">
          <rect width="48" height="48" rx="8" fill="#10B981" />
          <path d="M12 34L24 14L36 34H12Z" fill="white" />
        </svg>
      )}
    </div>
  )
}

export default Logo
