# Déploiement Netlify - Guide Simple

## Option 1: Netlify Drop (RECOMMANDÉ - sans ligne de commande)

1. Téléchargez le fichier `negopros-deploy.tar.gz` depuis ce projet
2. Décompressez-le (double-clic sur Mac)
3. Allez sur: https://app.netlify.com/drop
4. Glissez-déposez le dossier `dist/` sur la page
5. Votre site est en ligne!

## Option 2: Avec GitHub (si vous avez un compte)

1. Créez un nouveau repository sur GitHub
2. Poussez votre code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE-USERNAME/negopros.git
   git push -u origin main
   ```
3. Sur Netlify: https://app.netlify.com/start
4. Connectez votre repo GitHub
5. Configuration build:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Cliquez "Deploy"

## Option 3: Vercel (alternative à Netlify)

Avec Vercel CLI (corrige les erreurs npm):
```bash
npm install -g vercel
cd /Users/gerardpavezspencer/air-de-gerard/negopros-fr
vercel --prod
```

Suivez les instructions à l'écran.

## Variables d'environnement à configurer

Dans Netlify ou Vercel, ajoutez ces variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_STRIPE_PUBLIC_KEY`

(Copiez les valeurs depuis votre fichier `.env`)
