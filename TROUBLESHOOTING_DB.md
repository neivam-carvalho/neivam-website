# 🔧 Solução: Erro de Conexão com Banco de Dados

## Problema Identificado
```
Error: P1001: Can't reach database server at `db.webmoveavkbjzjkvoajt.supabase.co:5432`
```

O host `db.webmoveavkbjzjkvoajt.supabase.co` não existe ou não está acessível.

## 🚀 Soluções Possíveis

### Opção 1: Corrigir URL do Supabase (Recomendado)

#### 1.1 Acessar o Dashboard do Supabase
1. Acesse [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Faça login na sua conta
3. Selecione seu projeto ou crie um novo

#### 1.2 Obter a URL Correta
1. No dashboard, vá em **Settings** → **Database**
2. Na seção **Connection string**, copie a **URI** completa
3. A URL deve ter este formato:
   ```
   postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres
   ```

#### 1.3 Atualizar o .env
Substitua a URL atual no arquivo `.env`:
```env
DATABASE_URL="postgresql://postgres.[SEU_REF]:[SUA_SENHA]@aws-0-[REGIÃO].pooler.supabase.com:5432/postgres"
```

### Opção 2: Criar Novo Projeto Supabase

#### 2.1 Criar Projeto
```bash
# Acesse https://supabase.com/dashboard
# Clique em "New Project"
# Escolha:
# - Organization: Sua organização
# - Name: neivam-portfolio
# - Database Password: [escolha uma senha forte]
# - Region: South America (se disponível) ou US East
```

#### 2.2 Configurar .env
Após criar o projeto, atualize o `.env` com a nova URL.

### Opção 3: Usar Banco Local (Para desenvolvimento)

#### 3.1 Instalar PostgreSQL Local
```bash
# macOS com Homebrew
brew install postgresql@15
brew services start postgresql@15

# Criar banco local
createdb neivam_portfolio
```

#### 3.2 Configurar .env Local
```env
DATABASE_URL="postgresql://[seu_usuario]@localhost:5432/neivam_portfolio?schema=public"
```

### Opção 4: Alternativas de Hosting

#### 4.1 Neon (Gratuito)
1. Acesse [https://neon.tech](https://neon.tech)
2. Crie conta e novo projeto
3. Copie a connection string

#### 4.2 Railway (Gratuito com limites)
1. Acesse [https://railway.app](https://railway.app)
2. Crie projeto PostgreSQL
3. Copie as credenciais

#### 4.3 Vercel Postgres
1. No dashboard da Vercel
2. Adicione Postgres ao projeto
3. Use as credenciais fornecidas

## 🔍 Verificar Conexão

Após atualizar a `DATABASE_URL`, teste:

```bash
# Testar conexão
yarn db:generate

# Se conexão OK, aplicar schema
yarn db:push

# Popular dados
yarn db:seed
```

## 📝 Exemplo de .env Corrigido

```env
# ✅ Exemplo com Supabase (formato correto)
DATABASE_URL="postgresql://postgres.abcdefgh:sua_senha_aqui@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

# ✅ Exemplo com banco local
# DATABASE_URL="postgresql://neivam@localhost:5432/neivam_portfolio?schema=public"

# ✅ Exemplo com Neon
# DATABASE_URL="postgresql://neivam:senha@ep-cool-math-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"

NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

## 🆘 Se Continuar com Problemas

1. **Verifique credenciais**: Usuário e senha corretos
2. **Teste ping**: `ping [host-do-banco]`
3. **Verifique firewall**: Algumas redes bloqueiam conexões externas
4. **Use banco local**: Para desenvolvimento, considere PostgreSQL local

## 📞 Próximos Passos

1. Escolha uma das opções acima
2. Atualize o arquivo `.env`
3. Execute `yarn db:push`
4. Se sucesso, execute `yarn db:seed`
5. Verifique com `yarn db:studio`

---

**Qual opção você prefere?** Posso ajudar com qualquer uma delas!
