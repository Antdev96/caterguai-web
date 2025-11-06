<#
Deploy the `build/` directory to Netlify using the Netlify CLI.

Prerequisites:
- Install Netlify CLI: npm i -g netlify-cli
- Authenticate: netlify login

Usage:
  .\scripts\deploy-netlify.ps1 -SiteId "<site-id>" -Prod

If you don't provide a SiteId, the script will run an interactive deploy.
#>

param(
  [string]$SiteId = '',
  [switch]$Prod
)

function Check-Command($cmd) {
  $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (-not (Check-Command netlify)) {
  Write-Error "Netlify CLI no está instalado. Instálalo: npm i -g netlify-cli"
  exit 1
}

if (-not (Test-Path .\build)) {
  Write-Error "No se encontró la carpeta build/. Ejecuta `npm run build` antes."
  exit 1
}

if ($SiteId -ne '') {
  if ($Prod) {
    netlify deploy --dir=build --site=$SiteId --prod --message "Deploy from script"
  } else {
    netlify deploy --dir=build --site=$SiteId --message "Deploy from script"
  }
} else {
  Write-Host "No SiteId provisto; lanzando despliegue interactivo..."
  if ($Prod) {
    netlify deploy --dir=build --prod
  } else {
    netlify deploy --dir=build
  }
}
