# 🚀 Guia Completo de Deploy no Vercel

## 📋 Resumo da Solução Criada

Acabamos de criar uma **landing page completa** baseada no PRD, schema Prisma e flowchart UX:

### ✅ **Recursos Implementados:**
- **Hero Section** com foto, título e CTAs
- **5 Áreas de Expertise** conforme PRD
- **Projetos em Destaque** com tags e links
- **Formulário de Contato** com validação
- **Analytics básicos** (page views, clicks)
- **Design responsivo** e animações
- **SEO otimizado** com meta tags

### 🛠️ **Stack Tecnológico:**
- **Next.js 14** (App Router)
- **React 18** com TypeScript
- **Tailwind CSS** para styling
- **Framer Motion** para animações
- **Prisma ORM** com PostgreSQL
- **React Hook Form** + Zod para validação
- **Lucide React** para ícones

---

## 🔐 1. Resolver Autenticação Git

### Problema Atual:
```bash
remote: Invalid username or token. Password authentication is not supported for Git operations.
```

### ✅ **Soluções:**

#### **Opção A: Usar GitHub CLI (Recomendado)**
```bash
# Instalar GitHub CLI
brew install gh

# Fazer login
gh auth login

# Configurar Git para usar o token
gh auth setup-git
```

#### **Opção B: Personal Access Token**
1. Acesse [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Clique em **"Generate new token (classic)"**
3. Selecione scopes: `repo`, `workflow`, `write:packages`
4. Copie o token gerado
5. Configure no Git:
```bash
git remote set-url origin https://[SEU_TOKEN]@github.com/neivam-carvalho/neivam-website.git
```

#### **Opção C: SSH (Mais Seguro)**
```bash
# Gerar chave SSH
ssh-keygen -t ed25519 -C "me@neivamcarvalho.com.br"

# Adicionar ao ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub: Settings > SSH and GPG keys > New SSH key

# Alterar remote para SSH
git remote set-url origin git@github.com:neivam-carvalho/neivam-website.git
```

---

## 🗄️ 2. Configurar Banco de Dados para Produção

### **Opção A: Vercel Postgres (Recomendado)**
1. No dashboard da Vercel, vá para seu projeto
2. Aba **Storage** → **Create Database** → **Postgres**
3. Copie a `DATABASE_URL` gerada
4. Configure nas variáveis de ambiente do Vercel

### **Opção B: Supabase**
1. Acesse [supabase.com](https://supabase.com)
2. Crie novo projeto: **neivam-portfolio**
3. Vá em **Settings** → **Database**
4. Copie a **Connection string**
5. Formato: `postgresql://postgres:[password]@[host]:5432/postgres`

### **Opção C: Neon (Gratuito)**
1. Acesse [neon.tech](https://neon.tech)
2. Crie novo projeto
3. Copie a connection string fornecida

---

## 🚀 3. Deploy no Vercel

### **Passo 1: Preparar para Deploy**
```bash
# Commitar mudanças
git add .
git commit -m "feat: complete landing page implementation

- Add Hero, Expertise, Projects, Contact components
- Implement Prisma schema with analytics
- Add contact form with validation
- Configure Next.js with TypeScript and Tailwind
- Add responsive design and animations"

# Push para GitHub (após resolver autenticação)
git push origin main
```

### **Passo 2: Deploy Automático**
1. Acesse [vercel.com](https://vercel.com)
2. Clique **"Add New..."** → **Project**
3. Importe o repositório `neivam-carvalho/neivam-website`
4. Configure as variáveis de ambiente:
   ```
   DATABASE_URL=sua_database_url_aqui
   NEXTAUTH_SECRET=sua_secret_key_aleatoria
   NEXTAUTH_URL=https://seu-dominio.vercel.app
   ```
5. Clique **Deploy**

### **Passo 3: Configurar Banco em Produção**
```bash
# Após deploy, executar migrações
npx prisma db push --force-reset

# Popular dados iniciais
npx prisma db seed
```

### **Passo 4: Domínio Personalizado (Opcional)**
1. No dashboard Vercel → **Settings** → **Domains**
2. Adicionar `neivamcarvalho.com.br`
3. Configurar DNS conforme instruções

---

## 📊 4. Monitoramento e Analytics

### **Vercel Analytics**
```bash
npm install @vercel/analytics
```

Adicionar no `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### **Acessar Prisma Studio em Produção**
```bash
# Com a DATABASE_URL de produção no .env
npx prisma studio
```

---

## 🔧 5. Comandos Úteis

### **Desenvolvimento Local**
```bash
yarn dev              # Iniciar servidor de desenvolvimento
yarn build            # Build de produção
yarn start            # Executar build de produção
yarn lint             # Verificar lint
```

### **Banco de Dados**
```bash
yarn db:generate      # Gerar cliente Prisma
yarn db:push          # Aplicar schema (desenvolvimento)
yarn db:migrate       # Criar migration (produção)
yarn db:seed          # Popular dados iniciais
yarn db:studio        # Interface visual do banco
yarn db:reset         # Reset completo (cuidado!)
```

### **Deploy Manual (se necessário)**
```bash
yarn build
npx vercel --prod
```

---

## 🎯 6. Próximos Passos Após Deploy

### **Imediato**
- [ ] Resolver autenticação Git
- [ ] Configurar banco de dados
- [ ] Fazer primeiro deploy
- [ ] Testar formulário de contato
- [ ] Verificar analytics

### **Melhorias Futuras**
- [ ] Adicionar Google Analytics
- [ ] Implementar newsletter
- [ ] Criar blog/artigos
- [ ] Adicionar mais projetos
- [ ] Implementar modo escuro
- [ ] Adicionar testes automatizados

### **SEO e Performance**
- [ ] Configurar sitemap.xml
- [ ] Otimizar imagens
- [ ] Configurar robots.txt
- [ ] Implementar schema markup
- [ ] Monitorar Core Web Vitals

---

## 🆘 Troubleshooting

### **Erro de Build**
```bash
# Limpar cache
rm -rf .next node_modules
yarn install
yarn build
```

### **Erro de Banco**
```bash
# Verificar conexão
npx prisma db pull
npx prisma generate
```

### **Erro de Deploy**
1. Verificar logs no dashboard Vercel
2. Conferir variáveis de ambiente
3. Testar build local primeiro

---

**🎉 Sua landing page está pronta para o mundo!**

Escolha uma das opções de autenticação Git acima e podemos prosseguir com o deploy.
