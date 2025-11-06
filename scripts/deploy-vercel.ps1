<#
Deploy the project to Vercel using Vercel CLI.

Prerequisites:
- Install Vercel CLI: npm i -g vercel
- Authenticate: vercel login

Usage:
  .\scripts\deploy-vercel.ps1 -Prod

Notes:
- Running `vercel --prod --confirm` from the project root will build and deploy.
#>

param(
  [switch]$Prod
)

function Check-Command($cmd) {
  $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (-not (Check-Command vercel)) {
  Write-Error "Vercel CLI no está instalado. Instálalo: npm i -g vercel"
  exit 1
}

if ($Prod) {
  vercel --prod --confirm
} else {
  vercel --confirm
}
