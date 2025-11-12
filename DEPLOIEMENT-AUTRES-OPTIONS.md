# Autres Options de Déploiement

Si Netlify ne convient pas, voici d'autres plateformes gratuites pour déployer NegoPros.

## Option 1 : Cloudflare Pages (Recommandé)

### Avantages
- Gratuit et illimité
- CDN mondial ultra-rapide
- Très simple à configurer
- SSL automatique

### Déploiement

1. **Créer un compte**
   - Allez sur https://pages.cloudflare.com
   - Connectez-vous avec votre compte Cloudflare (ou créez-en un)

2. **Connecter votre Git**
   - Cliquez sur "Create a project"
   - Connectez GitHub/GitLab
   - Sélectionnez votre dépôt

3. **Configuration build**
   - Framework preset : Vite
   - Build command : `npm run build`
   - Build output directory : `dist`

4. **Variables d'environnement**
   - Ajoutez vos variables :
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`
     - `VITE_STRIPE_PUBLISHABLE_KEY`

5. **Déployer**
   - Cliquez sur "Save and Deploy"

### Configuration domaine personnalisé
1. Dans votre projet Cloudflare Pages
2. Allez dans "Custom domains"
3. Ajoutez `negopros.fr`
4. Suivez les instructions DNS

---

## Option 2 : GitHub Pages

### Avantages
- Gratuit
- Simple si déjà sur GitHub
- Bon pour des sites statiques

### Préparation

1. **Installer gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Modifier package.json**
Ajoutez :
```json
{
  "homepage": "https://votre-username.github.io/negopros",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Configurer vite.config.ts**
Ajoutez :
```typescript
export default defineConfig({
  base: '/negopros/',
  // reste de la config...
})
```

4. **Déployer**
```bash
npm run deploy
```

**Note:** Vous devrez configurer les variables d'environnement via GitHub Actions.

---

## Option 3 : Render

### Avantages
- Gratuit
- Support des applications complexes
- Facile à configurer

### Déploiement

1. **Créer un compte**
   - Allez sur https://render.com
   - Connectez votre compte GitHub

2. **Nouveau site statique**
   - Cliquez sur "New +"
   - Sélectionnez "Static Site"
   - Connectez votre dépôt

3. **Configuration**
   - Name : negopros
   - Build command : `npm run build`
   - Publish directory : `dist`

4. **Variables d'environnement**
   - Ajoutez vos variables d'environnement

5. **Créer le site**
   - Cliquez sur "Create Static Site"

---

## Option 4 : Firebase Hosting

### Avantages
- Gratuit (avec quota généreux)
- CDN Google
- SSL automatique
- Très rapide

### Déploiement

1. **Installer Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Connexion**
```bash
firebase login
```

3. **Initialiser**
```bash
firebase init hosting
```
   - Choisissez "Use an existing project" ou créez-en un nouveau
   - Public directory : `dist`
   - Single-page app : `Yes`
   - Automatic builds : `No` (ou configurez GitHub Actions)

4. **Build et déployer**
```bash
npm run build
firebase deploy --only hosting
```

### Configuration des variables
Les variables d'environnement doivent être définies lors du build. Utilisez un fichier `.env.production` ou GitHub Actions.

---

## Option 5 : Surge.sh

### Avantages
- Ultra simple
- Déploiement en ligne de commande
- Gratuit

### Déploiement

1. **Installer Surge**
```bash
npm install -g surge
```

2. **Build**
```bash
npm run build
```

3. **Déployer**
```bash
cd dist
surge
```

4. **Suivre les instructions**
   - Email et mot de passe
   - Choisir un domaine

**Note:** Pour les variables d'environnement, vous devez les définir lors du build.

---

## Comparatif Rapide

| Plateforme | Difficulté | Gratuit | Performance | SSL | Domaine Custom |
|------------|-----------|---------|-------------|-----|----------------|
| **Netlify** | ⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **Cloudflare Pages** | ⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **Render** | ⭐⭐ | ✅ | ⭐⭐⭐⭐ | ✅ | ✅ |
| **GitHub Pages** | ⭐⭐⭐ | ✅ | ⭐⭐⭐ | ✅ | ✅ |
| **Firebase** | ⭐⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **Surge** | ⭐ | ✅ | ⭐⭐⭐ | ✅ | ✅ |

---

## Recommandation

**Pour NegoPros, nous recommandons dans cet ordre :**

1. **Netlify** - Le plus simple, excellent pour React/Vite
2. **Cloudflare Pages** - Très performant, gratuit illimité
3. **Render** - Bonne alternative si les deux premiers ne fonctionnent pas

---

## Configuration DNS pour domaine personnalisé

Quelle que soit la plateforme choisie, pour utiliser `negopros.fr` :

1. **Chez votre registrar de domaine (OVH, Gandi, etc.)**

2. **Ajoutez un enregistrement A ou CNAME :**
   - Type : A ou CNAME
   - Nom : @ (ou vide pour le domaine racine)
   - Valeur : IP ou domaine fourni par la plateforme

3. **Pour www :**
   - Type : CNAME
   - Nom : www
   - Valeur : votre-site.netlify.app (ou équivalent)

4. **Attendez la propagation DNS** (quelques minutes à 24h)

---

## Besoin d'aide ?

Si vous rencontrez des problèmes avec une plateforme spécifique, consultez leur documentation ou support.
