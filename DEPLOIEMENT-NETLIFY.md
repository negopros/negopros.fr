# Déploiement sur Netlify

Ce guide vous explique comment déployer votre site NegoPros sur Netlify.

## Méthode 1 : Déploiement via l'interface Netlify (Recommandé)

### Étape 1 : Créer un compte Netlify
1. Allez sur https://www.netlify.com
2. Cliquez sur "Sign up"
3. Connectez-vous avec votre compte GitHub, GitLab ou Bitbucket

### Étape 2 : Préparer votre projet
Votre projet est déjà configuré avec le fichier `netlify.toml`. Assurez-vous que tous vos fichiers sont commités sur Git.

### Étape 3 : Déployer depuis Git
1. Dans votre tableau de bord Netlify, cliquez sur "Add new site"
2. Sélectionnez "Import an existing project"
3. Choisissez votre fournisseur Git (GitHub, GitLab, etc.)
4. Sélectionnez votre dépôt NegoPros
5. Netlify détectera automatiquement la configuration depuis `netlify.toml`
6. Vérifiez les paramètres :
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Cliquez sur "Deploy site"

### Étape 4 : Configurer les variables d'environnement
1. Dans votre site Netlify, allez dans "Site settings" > "Environment variables"
2. Ajoutez les variables suivantes :
   - `VITE_SUPABASE_URL` : Votre URL Supabase
   - `VITE_SUPABASE_ANON_KEY` : Votre clé anonyme Supabase
   - `VITE_STRIPE_PUBLISHABLE_KEY` : Votre clé publique Stripe

3. Après avoir ajouté les variables, redéployez le site :
   - Allez dans "Deploys"
   - Cliquez sur "Trigger deploy" > "Deploy site"

### Étape 5 : Configurer le domaine personnalisé (Optionnel)
1. Dans "Site settings" > "Domain management"
2. Cliquez sur "Add custom domain"
3. Entrez votre domaine : `negopros.fr`
4. Suivez les instructions pour configurer vos DNS

## Méthode 2 : Déploiement via Netlify CLI

### Installation
```bash
npm install -g netlify-cli
```

### Connexion
```bash
netlify login
```

### Déploiement
```bash
# Build le projet
npm run build

# Déployer en production
netlify deploy --prod

# Suivez les instructions :
# - Publish directory: dist
```

## Méthode 3 : Déploiement par drag & drop

### Étape 1 : Build local
```bash
npm run build
```

### Étape 2 : Déployer
1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le dossier `dist`
3. Votre site sera en ligne en quelques secondes

**Note:** Cette méthode ne configure pas les variables d'environnement automatiquement.

## Configuration des Edge Functions Supabase

Vos Edge Functions Supabase fonctionneront directement car elles sont hébergées sur Supabase. Assurez-vous que :

1. Les Edge Functions sont déployées sur Supabase
2. Les URLs des Edge Functions sont correctes dans votre code
3. Les CORS sont bien configurés dans les Edge Functions

## Vérification du déploiement

Après le déploiement, testez :
- ✅ Page d'accueil
- ✅ Navigation entre les pages
- ✅ Formulaire de contact (connexion Supabase)
- ✅ Inscription newsletter (connexion Supabase)
- ✅ Paiement ebook (Stripe)
- ✅ Paiement coaching (Stripe)
- ✅ Analytics (tracking Supabase)

## Déploiements automatiques

Une fois configuré via Git, Netlify redéploiera automatiquement votre site à chaque push sur la branche principale.

## Rollback

Si vous devez revenir à une version précédente :
1. Allez dans "Deploys"
2. Trouvez le déploiement précédent
3. Cliquez sur "Publish deploy"

## Support

- Documentation Netlify : https://docs.netlify.com
- Support Netlify : https://www.netlify.com/support

---

**Votre site sera accessible sur :**
- URL Netlify : `https://votre-site.netlify.app`
- Domaine personnalisé : `https://negopros.fr` (après configuration DNS)
