# Rei SEO - Landing Page

Landing page profissional para serviços de SEO, desenvolvida com React, TypeScript e Vite.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Lucide React (ícones)

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🏗️ Build de Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 👀 Preview do Build

```bash
npm run preview
```

## 🌐 Deploy na Vercel

### Opção 1: Via Dashboard (Recomendado)

1. Faça push do código para o GitHub/GitLab/Bitbucket
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project"
4. Importe seu repositório
5. A Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Configuração

O projeto já está configurado com `vercel.json` que define:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing (todas as rotas redirecionam para index.html)

## 📄 Estrutura do Projeto

```
rei-seo-landing-page/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Results.tsx
│   ├── Pricing.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── App.tsx             # Componente principal
├── index.tsx           # Entry point
├── index.html          # HTML base
├── vite.config.ts      # Configuração do Vite
└── vercel.json         # Configuração da Vercel
```

## 🎨 Features

- ✅ Design moderno e responsivo
- ✅ Seção de resultados com provas reais
- ✅ Tabela de preços
- ✅ WhatsApp flutuante
- ✅ Otimizado para SEO
- ✅ Performance otimizada com Vite

## 📝 Licença

Propriedade privada - Todos os direitos reservados.
