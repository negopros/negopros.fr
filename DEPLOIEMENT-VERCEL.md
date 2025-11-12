# Guide de Déploiement sur Vercel

## ✅ État du Projet

Votre projet NegoPros est **prêt pour le déploiement** !

### Configuration Actuelle

✅ **Base de données Supabase** : Configurée et opérationnelle
- Tables : `contacts`, `newsletter_subscribers`, `purchases`
- RLS activé sur toutes les tables
- URL : https://nuauoexinghwtsijzzqi.supabase.co

✅ **Edge Functions** : Déployées et actives
- `create-checkout` : Création de sessions Stripe
- `stripe-webhook` : Gestion des webhooks Stripe

✅ **Build** : Fonctionne parfaitement
- Taille du bundle : 775 KB (optimisable mais fonctionnel)
- Aucune erreur de compilation

✅ **Configuration Vercel** : Corrigée
- `vercel.json` : Configuré correctement
- `package.json` : Scripts de build optimisés

---

## 🚀 Étapes de Déploiement

### Option 1 : Déploiement via GitHub (Recommandé)

1. **Créer un repository GitHub**
   - Allez sur https://github.com/new
   - Nommez-le `negopros` (ou autre nom)
   - Ne cochez rien (pas de README, .gitignore, etc.)
   - Cliquez sur "Create repository"

2. **Pousser le code**
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/negopros.git
   git branch -M main
   git push -u origin main
   ```

3. **Connecter à Vercel**
   - Allez sur https://vercel.com
   - Cliquez "Add New Project"
   - Sélectionnez votre repository GitHub
   - Vercel détectera automatiquement la configuration

4. **Ajouter les variables d'environnement dans Vercel**
   - Dans Settings > Environment Variables, ajoutez :
     ```
     VITE_SUPABASE_URL=https://nuauoexinghwtsijzzqi.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YXVvZXhpbmdod3RzaWp6enFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDI4OTQsImV4cCI6MjA3NzIxODg5NH0.cK_2YF6-AeEKlKFcfuJ5kVsexJBvmmf30cZj9qz47Q0
     ```

5. **Déployer**
   - Cliquez "Deploy"
   - Attendez 2-3 minutes
   - Votre site sera en ligne !

### Option 2 : Déploiement Direct

1. **Installer Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   vercel
   ```

4. **Ajouter les variables d'environnement**
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_ANON_KEY
   ```

5. **Redéployer avec les variables**
   ```bash
   vercel --prod
   ```

---

## 🔧 Configuration Stripe (Optionnel)

Si vous voulez activer les paiements :

1. **Créer un compte Stripe** : https://dashboard.stripe.com/register

2. **Récupérer les clés API** : https://dashboard.stripe.com/apikeys

3. **Ajouter les variables dans Vercel** :
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

4. **Configurer le webhook Stripe** :
   - URL : `https://nuauoexinghwtsijzzqi.supabase.co/functions/v1/stripe-webhook`
   - Événements : `checkout.session.completed`

---

## 📝 Vérifications Post-Déploiement

Après le déploiement, vérifiez :

- [ ] Le site s'affiche correctement
- [ ] Le formulaire de contact fonctionne
- [ ] L'inscription newsletter fonctionne
- [ ] Les ebooks sont accessibles
- [ ] Le dark mode fonctionne
- [ ] Les images se chargent correctement

---

## 🆘 En Cas de Problème

### Le site ne se charge pas
- Vérifiez les logs Vercel : https://vercel.com/dashboard
- Vérifiez que les variables d'environnement sont bien configurées

### Erreur de base de données
- Vérifiez que `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` sont corrects
- Vérifiez les RLS policies dans Supabase

### Erreur 404 sur les routes
- Vérifiez que `vercel.json` contient bien la redirection vers `index.html`

---

## 📞 Support

En cas de problème, contactez votre développeur ou consultez :
- Documentation Vercel : https://vercel.com/docs
- Documentation Supabase : https://supabase.com/docs
