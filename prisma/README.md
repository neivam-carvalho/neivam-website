# Prisma Schema Documentation

## Visão Geral

Este schema Prisma foi projetado especificamente para a landing page pessoal de Neivam Carvalho, com foco em flexibilidade, escalabilidade e analytics básicos.

## Modelos Principais

### 🧑‍💼 Profile
**Descrição:** Informações pessoais e profissionais principais
- Dados básicos: nome, título, localização, email
- Bio e foto profissional
- Status ativo/inativo

### 🔗 SocialLink
**Descrição:** Links para redes sociais e plataformas
- Suporte a múltiplos links (LinkedIn, GitHub, etc.)
- Ordem personalizável
- Ícones configuráveis

### 💼 Expertise
**Descrição:** Áreas de especialização profissional
- 5 tópicos principais conforme PRD
- Descrições detalhadas
- Ícones e ordenação

### 📁 Project
**Descrição:** Projetos em destaque
- Informações básicas do projeto
- Links para demo e repositório
- Status de featured/visibilidade

### 🏷️ Tag & ProjectTag
**Descrição:** Sistema de tags para tecnologias
- Tags reutilizáveis com cores
- Relacionamento many-to-many com projetos
- Facilita filtros e agrupamentos

### 📧 ContactMessage
**Descrição:** Mensagens do formulário de contato
- Dados do visitante
- Status de leitura/resposta
- Informações técnicas (IP, User Agent)

### 📊 Analytics Models
**Descrição:** Tracking básico de uso
- **PageView:** Visualizações de página
- **ClickEvent:** Cliques em elementos importantes
- Dados para análise de engajamento

### ⚙️ SiteConfig
**Descrição:** Configurações gerais do site
- Chave-valor para configurações dinâmicas
- Separação entre configs públicas/privadas
- Facilita mudanças sem deploy

### 💬 Testimonial
**Descrição:** Depoimentos e feedback (para futuro)
- Sistema de avaliações
- Gerenciamento de visibilidade
- Ordem personalizável

## Relacionamentos

```
Profile (1) ↔ (N) SocialLink
Profile (1) ↔ (N) Expertise  
Profile (1) ↔ (N) Project
Project (N) ↔ (N) Tag (via ProjectTag)
```

## Enums

### ContactStatus
- `UNREAD`: Mensagem não lida
- `READ`: Mensagem lida
- `REPLIED`: Mensagem respondida
- `ARCHIVED`: Mensagem arquivada

## Índices e Performance

### Índices Automáticos
- IDs primários (cuid)
- Campos únicos (email, tag name)
- Foreign keys

### Índices Recomendados (para produção)
```sql
-- Para queries de projetos featured
CREATE INDEX idx_projects_featured ON projects(is_featured, order);

-- Para analytics por data
CREATE INDEX idx_page_views_date ON page_views(created_at);
CREATE INDEX idx_click_events_date ON click_events(created_at);

-- Para busca de mensagens por status
CREATE INDEX idx_contact_status ON contact_messages(status, created_at);
```

## Queries Comuns

### Buscar perfil completo
```typescript
const profile = await prisma.profile.findUnique({
  where: { email: 'me@neivamcarvalho.com.br' },
  include: {
    socialLinks: { orderBy: { order: 'asc' } },
    expertise: { orderBy: { order: 'asc' } },
    projects: {
      where: { isFeatured: true },
      include: { tags: { include: { tag: true } } },
      orderBy: { order: 'asc' }
    }
  }
})
```

### Criar nova mensagem de contato
```typescript
const message = await prisma.contactMessage.create({
  data: {
    name: 'João Silva',
    email: 'joao@email.com',
    subject: 'Interesse em consultoria',
    message: 'Gostaria de conversar sobre...',
    ipAddress: req.ip,
    userAgent: req.headers['user-agent']
  }
})
```

### Analytics: Views por página
```typescript
const pageViews = await prisma.pageView.groupBy({
  by: ['page'],
  _count: { id: true },
  where: {
    createdAt: {
      gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // últimos 30 dias
    }
  }
})
```

## Migrations e Seed

### Setup inicial
```bash
# Instalar dependências
npm install

# Gerar client
npm run db:generate

# Aplicar schema
npm run db:push

# Popular com dados iniciais
npm run db:seed
```

### Desenvolvimento
```bash
# Visualizar dados
npm run db:studio

# Reset completo
npm run db:reset
```

## Considerações de Segurança

### Dados Sensíveis
- IPs são coletados para analytics, mas podem ser anonimizados
- Mensagens de contato devem ser protegidas
- Configs privadas não devem ser expostas no frontend

### GDPR/LGPD
- Implementar políticas de retenção para analytics
- Permitir exclusão de dados pessoais
- Documentar coleta de dados

## Evolução Futura

### Funcionalidades Planejadas
- [ ] Sistema de newsletter
- [ ] Blog/artigos
- [ ] Certificações e cursos
- [ ] Galeria de imagens de projetos
- [ ] Sistema de comentários

### Otimizações
- [ ] Implementar cache com Redis
- [ ] Paginação para mensagens
- [ ] Busca full-text em projetos
- [ ] Compressão de analytics antigos
