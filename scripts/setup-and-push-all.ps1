<#
Combined helper script to create a GitHub repo (using gh), init git, commit and push.

Prerequisites (on your machine):
- Git installed and configured (https://git-scm.com/)
- GitHub CLI `gh` installed and authenticated (https://cli.github.com/ -> `gh auth login`)

Usage examples:
# Interactive (will ask for repo name if not provided):
.\scripts\setup-and-push-all.ps1

# Non-interactive (create repo and push):
.\scripts\setup-and-push-all.ps1 -RepoName "mi-repo" -Visibility public -OpenActions

What it does:
- If `RepoName` is provided, attempts to create it with `gh repo create`.
- Initializes git if needed, stages files, creates a commit if there are changes.
- Sets branch `main`, adds remote `origin` and pushes.
- Optionally opens the Actions page in the default browser.

Security: this script does NOT collect or store credentials; `gh` uses your existing auth session.
#>

param(
  [string]$RepoName = '',
  [ValidateSet('public','private')] [string]$Visibility = 'public',
  [switch]$OpenActions
)

function Has-Command($cmd) {
  return $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (-not (Has-Command git)) {
  Write-Error "git no está instalado o no está en PATH. Instálalo: https://git-scm.com/downloads"
  exit 1
}

if (-not (Has-Command gh)) {
  Write-Error "GitHub CLI 'gh' no está instalado o no está en PATH. Instálalo: https://cli.github.com/"
  exit 1
}

# Determine repo name default to current folder
if (-not $RepoName -or $RepoName -eq '') {
  $cwd = Split-Path -Leaf (Get-Location)
  $RepoName = Read-Host "Nombre del repo en GitHub (enter para usar '$cwd')"
  if (-not $RepoName -or $RepoName -eq '') { $RepoName = $cwd }
}

Write-Host "Repo target: $RepoName ($Visibility)"

# Check gh auth
$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "No estás autenticado con gh. Ejecuta: gh auth login" -ForegroundColor Yellow
  exit 1
}

# Create repo if not exists
Write-Host "Creando repo (si no existe) con gh..."
gh repo create $RepoName --$Visibility --source=. --remote=origin --push --confirm
if ($LASTEXITCODE -ne 0) {
  Write-Error "Error creando el repo con gh. Verifica la salida anterior."
  exit 1
}

# Ensure git initialized
if (-not (Test-Path .git)) {
  git init
  Write-Host "Initialized git repository"
}

# Stage changes
git add .

# Commit if there are staged changes
$status = git status --porcelain
if (-not $status) {
  Write-Host "No hay cambios para commitear"
} else {
  git commit -m "chore: prepare repo for CI/CD and deployment"
  Write-Host "Committed changes"
}

# Ensure branch main
git branch -M main

# Push
Write-Host "Pushing to origin/main..."
git push -u origin main
if ($LASTEXITCODE -ne 0) {
  Write-Error "Error empujando a origin/main. Revisa permisos y configuración del remote."
  exit 1
}

if ($OpenActions) {
  # Get owner/repo
  $info = gh repo view --json nameWithOwner -q .nameWithOwner
  if ($info) {
    $actionsUrl = "https://github.com/$info/actions"
    Write-Host "Abriendo Actions: $actionsUrl"
    Start-Process $actionsUrl
  } else {
    Write-Host "No pude obtener nameWithOwner desde gh; abre manualmente la pestaña Actions en GitHub." -ForegroundColor Yellow
  }
}

Write-Host "Hecho. El repositorio '$RepoName' debe existir y los cambios habrán sido empujados (si todo fue correcto)."
