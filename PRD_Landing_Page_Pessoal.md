# PRD - Landing Page Pessoal Neivam Carvalho

## 1. Visão Geral do Produto

### Objetivo
Criar uma landing page pessoal minimalista e profissional que destaque as principais competências e experiências de Neivam Carvalho como líder em IT Digital, com foco em gestão, estratégia, Business Intelligence, Data Analytics e Inteligência Artificial.

### Público-Alvo
- Recrutadores e headhunters
- Clientes potenciais para consultoria
- Parceiros de negócios e networking profissional
- Colegas da área de tecnologia

### Proposta de Valor
Apresentar de forma clara e objetiva a expertise em liderança digital e transformação tecnológica, demonstrando credibilidade e autoridade no segmento.

## 2. Requisitos Funcionais

### 2.1 Hero Section (Seção Principal)
**Prioridade:** Crítica
- **Foto profissional** centralizada ou à esquerda
- **Nome completo** em destaque: "Neivam Carvalho"
- **Título principal** condensado: "IT Digital Leader & AI Strategist"
- **Localização**: "São Paulo, Brasil"
- **CTA primário**: Botão "Entre em Contato" linkando para email
- **Links sociais**: LinkedIn e GitHub com ícones discretos

### 2.2 Expertise Section (Seção de Especialidades)
**Prioridade:** Crítica
- **Título da seção**: "Áreas de Especialização"
- **5 Tópicos principais**:
  1. **IT Leadership & Management** - Liderança de equipes técnicas e gestão de projetos estratégicos
  2. **Digital Transformation** - Implementação de estratégias digitais e modernização de processos
  3. **Business Intelligence & Analytics** - Desenvolvimento de soluções de BI e análise de dados para tomada de decisão
  4. **Artificial Intelligence & AI Agents** - Implementação de soluções de IA e automação inteligente
  5. **IT Strategy & Innovation** - Planejamento estratégico tecnológico e inovação digital

### 2.3 About Section (Seção Sobre)
**Prioridade:** Alta
- **Bio profissional** atualizada baseada na experiência em IT
- **Foco principal**: Experiências digitais performáticas e transformação tecnológica
- **Tom**: Profissional, confiável e orientado a resultados

### 2.4 Featured Projects (Projetos em Destaque)
**Prioridade:** Média
- **Máximo 3 projetos** mais relevantes
- Para cada projeto:
  - Título
  - Descrição resumida (1-2 linhas)
  - Tags de tecnologias utilizadas
  - Link para visualizar (se aplicável)

### 2.5 Contact Section (Seção de Contato)
**Prioridade:** Alta
- **Email profissional**: me@neivamcarvalho.com.br
- **LinkedIn**: Link direto para perfil
- **Formulário simples** (opcional): Nome, Email, Mensagem
- **CTA secundário**: "Vamos conversar sobre suas ideias"

## 3. Requisitos Não-Funcionais

### 3.1 Design e UX
- **Estilo**: Minimalista, profissional, clean
- **Cores**: Paleta neutra com accent color corporativo
- **Tipografia**: Sans-serif moderna e legível
- **Layout**: Single-page com navegação suave por âncoras
- **Responsividade**: Mobile-first design

### 3.2 Performance
- **Tempo de carregamento**: < 3 segundos
- **Core Web Vitals**: Todos em verde
- **Otimização de imagens**: WebP/AVIF
- **SEO**: Meta tags otimizadas

### 3.3 Tecnologia
- **Framework**: Next.js (já implementado)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Google Analytics (opcional)

## 4. Estrutura de Conteúdo Detalhada

### Header Navigation
```
[Logo/Nome] ................................. [Sobre] [Expertise] [Projetos] [Contato]
```

### Seção 1: Hero
```
[Foto Profissional]
Neivam Carvalho
IT Digital Leader & AI Strategist
São Paulo, Brasil

"Transformando organizações através da tecnologia e liderança estratégica"

[Entre em Contato] [LinkedIn] [GitHub]
```

### Seção 2: Expertise (5 Tópicos)
```
ÁREAS DE ESPECIALIZAÇÃO

1. IT Leadership & Management
   Liderança de equipes multidisciplinares e gestão estratégica de projetos tecnológicos

2. Digital Transformation  
   Implementação de estratégias digitais para modernização e otimização de processos

3. Business Intelligence & Analytics
   Desenvolvimento de soluções de BI e análise avançada de dados para insights estratégicos

4. Artificial Intelligence & AI Agents
   Implementação de soluções de IA, automação inteligente e agentes conversacionais

5. IT Strategy & Innovation
   Planejamento estratégico tecnológico e condução de iniciativas de inovação digital
```

### Seção 3: Sobre
```
SOBRE

Profissional experiente em liderança digital com foco na construção de experiências 
tecnológicas performáticas e acessíveis. Especialista em transformação digital, 
Business Intelligence e implementação de soluções de Inteligência Artificial.

Combino visão estratégica com execução técnica para entregar resultados que impactam 
positivamente o negócio e a experiência do usuário.
```

### Seção 4: Projetos (Opcional)
```
PROJETOS EM DESTAQUE

[3 projetos mais relevantes com tecnologias e links]
```

### Seção 5: Contato
```
VAMOS CONVERSAR

me@neivamcarvalho.com.br
linkedin.com/in/neivamcarvalho

[Formulário de Contato Simples]
```

## 5. Critérios de Sucesso

### Métricas Primárias
- **Taxa de contato**: > 5% dos visitantes entram em contato
- **Tempo na página**: > 2 minutos
- **Taxa de rejeição**: < 40%

### Métricas Secundárias
- **Cliques no LinkedIn**: Aumento de 20% no tráfego do perfil
- **Performance SEO**: Ranking para termos relacionados a "IT Leader São Paulo"
- **Conversões**: Geração de pelo menos 2 oportunidades por mês

## 6. Cronograma de Implementação

### Fase 1: MVP (1-2 semanas)
- [ ] Hero Section com informações básicas
- [ ] Seção de Expertise (5 tópicos)
- [ ] Contato básico
- [ ] Design responsivo

### Fase 2: Melhorias (1 semana)
- [ ] Seção About refinada
- [ ] Projetos em destaque
- [ ] Otimizações de performance
- [ ] SEO básico

### Fase 3: Otimização (Contínua)
- [ ] Analytics implementado
- [ ] A/B testing de CTAs
- [ ] Refinamentos baseados em feedback

## 7. Considerações Técnicas

### Atualizações no data.ts
```typescript
export const me = {
  nome: 'Neivam Carvalho',
  titulo: 'IT Digital Leader & AI Strategist',
  subtitulo: 'Transformando organizações através da tecnologia e liderança estratégica',
  local: 'São Paulo, Brasil',
  email: 'me@neivamcarvalho.com.br',
  bio: 'Profissional experiente em liderança digital com foco na construção de experiências tecnológicas performáticas e acessíveis. Especialista em transformação digital, Business Intelligence e implementação de soluções de Inteligência Artificial.',
  expertise: [
    {
      titulo: 'IT Leadership & Management',
      descricao: 'Liderança de equipes multidisciplinares e gestão estratégica de projetos tecnológicos'
    },
    {
      titulo: 'Digital Transformation',
      descricao: 'Implementação de estratégias digitais para modernização e otimização de processos'
    },
    {
      titulo: 'Business Intelligence & Analytics',
      descricao: 'Desenvolvimento de soluções de BI e análise avançada de dados para insights estratégicos'
    },
    {
      titulo: 'Artificial Intelligence & AI Agents',
      descricao: 'Implementação de soluções de IA, automação inteligente e agentes conversacionais'
    },
    {
      titulo: 'IT Strategy & Innovation',
      descricao: 'Planejamento estratégico tecnológico e condução de iniciativas de inovação digital'
    }
  ]
};
```

---

**Documento criado em:** 30 de Agosto de 2025  
**Versão:** 1.0  
**Autor:** GitHub Copilot  
**Aprovação:** Pendente
