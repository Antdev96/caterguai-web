<#
Create a GitHub repository using the GitHub CLI (`gh`) and push the current project.

Prerequisites:
- Install GitHub CLI: https://cli.github.com/
- Authenticate with `gh auth login` before running this script.

Usage:
  .\scripts\create-github-repo-with-gh.ps1 -RepoName "my-repo" -Visibility public

This script will:
- create a repo under the authenticated account
- add the remote `origin` (if not exists)
- push the `main` branch
#>

param(
  [Parameter(Mandatory=$true)] [string]$RepoName,
  [ValidateSet('public','private')] [string]$Visibility = 'public',
  [switch]$Push
)

function Check-Command($cmd) {
  $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (-not (Check-Command gh)) {
  Write-Error "GitHub CLI 'gh' no está instalado. Instálalo: https://cli.github.com/"
  exit 1
}

# Create repo
$createArgs = "repo create $RepoName --$Visibility --source=. --remote=origin --push"
Write-Host "Running: gh $createArgs"
gh repo create $RepoName --$Visibility --source=. --remote=origin --push

if ($LASTEXITCODE -ne 0) {
  Write-Error "No se pudo crear el repo con gh. Revisa el error anterior."
  exit 1
}

Write-Host "Repository created and pushed."
