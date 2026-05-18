# Broccagri — Site vitrine

Site vitrine de Broccagri, producteur et exportateur de fruits et légumes frais du terroir marocain. Optimisé SEO, multilingue (FR / AR / ES / EN), avec contenu éditorial (présentation, blog, fiches produits, pages catégories) qui redirige le trafic vers la boutique sur `/boutique`.

## Stack

- Vite + React 18 + TypeScript
- shadcn/ui + Tailwind CSS
- i18next (FR / AR avec RTL, ES / EN à venir)
- Supabase (catalogue produits + catégories)
- React Router

## Développement local

```sh
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:8080`.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner :

```
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_PROJECT_ID=
```

## Architecture

- `/` → Landing (Hero, Categories, About, Contact)
- `/contact` → Page contact
- `/blog` → Articles
- `/legumes`, `/fruits`, `/salades`, `/herbes` → Pages catégorie SEO (à venir)
- `/produits/[slug]` → Fiche produit SEO (à venir)

La boutique vit séparément sur `/boutique` via reverse proxy (repo `broccagri-shop`).

## Déploiement

Déployé via Netlify. Le reverse proxy redirige `/boutique/*` vers l'app shop.
