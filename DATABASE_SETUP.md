# 🔧 Setup do Banco de Dados (Prisma)

## Pré-requisitos

1. **PostgreSQL** instalado localmente ou acesso a um banco remoto
2. **Node.js** 18+ e **yarn** configurados

## Configuração Inicial

### 1. Instalar Dependências
```bash
yarn install
```

### 2. Configurar Variáveis de Ambiente
```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar com suas configurações
nano .env
```

**Configuração mínima necessária:**
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/neivam_portfolio?schema=public"
```

### 3. Configurar Banco de Dados

#### Opção A: Banco Local (PostgreSQL)
```bash
# No macOS com Homebrew
brew install postgresql
brew services start postgresql

# Criar banco
createdb neivam_portfolio
```

#### Opção B: Banco Online (Supabase/Neon/Railway)
1. Criar conta no provedor escolhido
2. Criar novo projeto PostgreSQL
3. Copiar connection string para `.env`

### 4. Aplicar Schema e Popular Dados
```bash
# Gerar Prisma Client
yarn db:generate

# Aplicar schema ao banco
yarn db:push

# Popular com dados iniciais
yarn db:seed
```

### 5. Verificar Instalação
```bash
# Abrir Prisma Studio para visualizar dados
yarn db:studio
```

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `yarn db:generate` | Gera o Prisma Client |
| `yarn db:push` | Aplica schema sem criar migration |
| `yarn db:migrate` | Cria e aplica migration |
| `yarn db:seed` | Popula banco com dados iniciais |
| `yarn db:studio` | Abre interface visual do banco |
| `yarn db:reset` | Reset completo (cuidado!) |

## Estrutura do Schema

### Modelos Principais
- **Profile**: Informações pessoais e profissionais
- **SocialLink**: Links para redes sociais
- **Expertise**: Áreas de especialização (5 tópicos do PRD)
- **Project**: Projetos em destaque
- **ContactMessage**: Mensagens do formulário de contato
- **Analytics**: PageView e ClickEvent para métricas básicas

### Dados Iniciais (Seed)
O seed popula automaticamente:
- ✅ Perfil do Neivam com informações do PRD
- ✅ 5 áreas de expertise conforme especificado
- ✅ Links sociais (LinkedIn, GitHub)
- ✅ 3 projetos exemplo
- ✅ Tags de tecnologias comuns
- ✅ Configurações básicas do site

## Troubleshooting

### Erro de Conexão
```bash
# Verificar se PostgreSQL está rodando
brew services list | grep postgresql

# Testar conexão
psql $DATABASE_URL
```

### Erro no Seed
```bash
# Limpar e recriar
yarn db:reset
yarn db:push
yarn db:seed
```

### Cliente não encontrado
```bash
# Regenerar cliente
yarn db:generate
```

## Próximos Passos

Após configurar o banco:

1. **Integrar com Next.js**: Usar `src/app/lib/prisma.ts` nas páginas
2. **Implementar APIs**: Criar routes para CRUD das entidades
3. **Formulário de contato**: Conectar frontend com `ContactMessage`
4. **Analytics**: Implementar tracking de `PageView` e `ClickEvent`

## Documentação Adicional

- 📖 [Documentação detalhada do schema](./prisma/README.md)
- 🔗 [Prisma Docs](https://www.prisma.io/docs)
- 🐘 [PostgreSQL Docs](https://www.postgresql.org/docs/)
