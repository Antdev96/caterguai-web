<#
PowerShell helper to initialize a git repo, create a commit and push to a remote.

Usage (interactive):
  .\scripts\git-init-and-push.ps1

Usage (non-interactive):
  .\scripts\git-init-and-push.ps1 -RepoUrl "https://github.com/USER/REPO.git" -CommitMessage "chore: initial"

Notes:
- This script requires `git` installed and configured locally.
- It will NOT create a remote GitHub repository; use the GH CLI script if you want to create the repo from your machine.
#>

param(
  [string]$RepoUrl = '',
  [string]$CommitMessage = 'chore: prepare repo for CI/CD and deployment'
)

function Check-Command($cmd) {
  $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (-not (Check-Command git)) {
  Write-Error "git no está instalado o no está en PATH. Instálalo y reintenta: https://git-scm.com/downloads"
  exit 1
}

if (-not (Test-Path .git)) {
  git init
  Write-Host "Initialized empty git repository"
} else {
  Write-Host "Repository already initialized"
}

git add .

$status = git status --porcelain
if (-not $status) {
  Write-Host "No changes to commit"
} else {
  git commit -m "$CommitMessage"
  Write-Host "Committed changes"
}

git branch -M main

if ($RepoUrl -ne '') {
  git remote remove origin 2>$null
  git remote add origin $RepoUrl
  git push -u origin main
  Write-Host "Pushed to $RepoUrl"
} else {
  Write-Host "No remote provided. If you want to push, run:\n  git remote add origin <URL>\n  git push -u origin main"
}
