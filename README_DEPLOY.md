# Despliegue y publicacion

Este documento contiene instrucciones rápidas para desplegar el proyecto.

1) Generar build (local)

```powershell
npm install
npm run build
```

La carpeta de salida por defecto es `build/`. Comprueba que `build/index.html` existe y que `build/assets` contiene tus imágenes.

2) Desplegar en Vercel

- Conecta el repositorio a Vercel (o sube el proyecto). En la configuración del proyecto pon:
  - Build Command: `npm run build`
  - Output Directory: `build`

Vercel detecta Vite automáticamente. Es la opción más simple y ofrece previews por cada PR.

3) Desplegar en Netlify

- Conecta el repo o sube los archivos manualmente. Si conectas el repo, configura:
  - Build command: `npm run build`
  - Publish directory: `build`

También incluimos `netlify.toml` en el repo para que Netlify tome la configuración automáticamente.

4) Desplegar en GitHub Pages (opción con workflow incluido)

- Ya hay un workflow en `.github/workflows/gh-pages.yml` que hará `npm ci`, `npm run build` y publicará `build/` en la rama `gh-pages` cuando empujes a `main`.

Pasos resumidos si quieres usar GitHub Pages:

```powershell
git init
git add .
git commit -m "chore: initial"
git remote add origin https://github.com/<TU_USUARIO>/<TU_REPO>.git
git branch -M main
git push -u origin main
```

Nota: no puedo empujar por ti sin tus credenciales; debes conectar el remoto y hacer el push desde tu máquina.

5) Subida manual del build (si no quieres usar CI)

Comprime el contenido de `build/` y súbelo con la herramienta que prefieras.

```powershell
Compress-Archive -Path .\build\* -DestinationPath site-build.zip -Force
```

6) SPA routing

Si usas Netlify o GitHub Pages, asegúrate de que las redirecciones para SPA estén configuradas. El workflow y `netlify.toml` ya tienen la configuración necesaria.

7) Qué automatizo y qué no

- Automatizado: creación de workflow para GitHub Pages, `netlify.toml`, `.gitignore`, README de despliegue y commit local.
- No automatizo sin tu autorización: push al remoto de GitHub (necesita tus credenciales), configurar DNS/CNAME, ni crear proyectos privados en servicios externos.

## Automatización local (scripts)

He añadido varios scripts PowerShell en `scripts/` para automatizar tareas locales. Estos se ejecutan en tu máquina y requieren que tengas instaladas las herramientas correspondientes (git, gh, netlify, vercel).

- `scripts/git-init-and-push.ps1` - inicializa repo git, crea commit y opcionalmente hace push a un remote. Uso:

```powershell
.\scripts\git-init-and-push.ps1 -RepoUrl "https://github.com/USER/REPO.git"
```

- `scripts/create-github-repo-with-gh.ps1` - crea un repo en GitHub usando GH CLI y hace push. Requiere `gh auth login` previo.

```powershell
.\scripts\create-github-repo-with-gh.ps1 -RepoName "mi-repo" -Visibility public
```

- `scripts/deploy-netlify.ps1` - despliega `build/` a Netlify usando Netlify CLI (`netlify deploy`).

```powershell
.\scripts\deploy-netlify.ps1 -SiteId "<NETLIFY_SITE_ID>" -Prod
```

- `scripts/deploy-vercel.ps1` - despliega el proyecto a Vercel usando la CLI (`vercel`).

```powershell
.\scripts\deploy-vercel.ps1 -Prod
```

### Recomendación de aprendizaje

1. Instala y configura Git y GitHub CLI:

```powershell
# Windows (ejemplo con winget/chocolatey)
# Instalar Git: https://git-scm.com/
# Instalar GitHub CLI: https://cli.github.com/
```

2. Prueba `git-init-and-push.ps1` localmente para entender el flujo (init -> add -> commit -> push).
3. Usa `create-github-repo-with-gh.ps1` para crear el repo remoto y empujar en un solo paso.
4. Conecta Netlify/Vercel y prueba despliegues con sus CLIs; esto te ayudará a entender cómo funciona el CI/CD y cómo los servicios ejecutan el build.

Si quieres, puedo:
- Generar un script único que combine creación de repo (si usas `gh`), commit y push, y luego abra la página de Actions en el navegador.
- Añadir workflows adicionales para previews de PR (por ejemplo, desplegar a Netlify Preview o Vercel Preview por cada PR).

