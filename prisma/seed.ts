import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criar o perfil principal
  const profile = await prisma.profile.upsert({
    where: { email: 'me@neivamcarvalho.com.br' },
    update: {},
    create: {
      name: 'Neivam Carvalho',
      title: 'IT Digital Leader & AI Strategist',
      subtitle: 'Transformando organizações através da tecnologia e liderança estratégica',
      location: 'São Paulo, Brasil',
      email: 'me@neivamcarvalho.com.br',
      bio: 'Profissional experiente em liderança digital com foco na construção de experiências tecnológicas performáticas e acessíveis. Especialista em transformação digital, Business Intelligence e implementação de soluções de Inteligência Artificial.',
      photoUrl: '/images/neivam_black.jpeg',
      isActive: true,
    },
  })

  // Criar links sociais
  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/neivamcarvalho/', icon: 'linkedin', order: 1 },
    { label: 'GitHub', url: 'https://github.com/neivam-carvalho', icon: 'github', order: 2 },
  ]

  for (const link of socialLinks) {
    await prisma.socialLink.upsert({
      where: { id: `${profile.id}-${link.label.toLowerCase()}` },
      update: {},
      create: {
        id: `${profile.id}-${link.label.toLowerCase()}`,
        label: link.label,
        url: link.url,
        icon: link.icon,
        order: link.order,
        profileId: profile.id,
      },
    })
  }

  // Criar áreas de expertise
  const expertiseAreas = [
    {
      title: 'IT Leadership & Management',
      description: 'Liderança de equipes multidisciplinares e gestão estratégica de projetos tecnológicos',
      icon: '👥',
      order: 1,
    },
    {
      title: 'Digital Transformation',
      description: 'Implementação de estratégias digitais para modernização e otimização de processos',
      icon: '🚀',
      order: 2,
    },
    {
      title: 'Business Intelligence & Analytics',
      description: 'Desenvolvimento de soluções de BI e análise avançada de dados para insights estratégicos',
      icon: '📊',
      order: 3,
    },
    {
      title: 'Artificial Intelligence & AI Agents',
      description: 'Implementação de soluções de IA, automação inteligente e agentes conversacionais',
      icon: '🤖',
      order: 4,
    },
    {
      title: 'IT Strategy & Innovation',
      description: 'Planejamento estratégico tecnológico e condução de iniciativas de inovação digital',
      icon: '💡',
      order: 5,
    },
  ]

  for (const expertise of expertiseAreas) {
    await prisma.expertise.upsert({
      where: { id: `${profile.id}-${expertise.order}` },
      update: {},
      create: {
        id: `${profile.id}-${expertise.order}`,
        title: expertise.title,
        description: expertise.description,
        icon: expertise.icon,
        order: expertise.order,
        profileId: profile.id,
      },
    })
  }

  // Criar tags comuns
  const commonTags = [
    { name: 'Next.js', color: '#000000' },
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Prisma', color: '#2D3748' },
    { name: 'Vercel', color: '#000000' },
    { name: 'AI/ML', color: '#FF6B6B' },
    { name: 'Business Intelligence', color: '#4ECDC4' },
    { name: 'Data Analytics', color: '#45B7D1' },
  ]

  for (const tag of commonTags) {
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: {},
      create: tag,
    })
  }

  // Criar projetos exemplo (baseado no data.ts existente)
  const projects = [
    {
      title: 'Projeto A',
      description: 'Aplicação web moderna com foco em UX e performance.',
      projectUrl: 'https://seuprojeto-a.com',
      tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
      isFeatured: true,
      order: 1,
    },
    {
      title: 'Projeto B',
      description: 'Dashboard interativa com gráficos e animações leves.',
      projectUrl: 'https://seuprojeto-b.com',
      tags: ['React', 'TypeScript', 'Data Analytics'],
      isFeatured: true,
      order: 2,
    },
    {
      title: 'Projeto C',
      description: 'Landing page minimalista otimizada para SEO.',
      projectUrl: 'https://seuprojeto-c.com',
      tags: ['Next.js', 'Business Intelligence'],
      isFeatured: true,
      order: 3,
    },
  ]

  for (const project of projects) {
    const createdProject = await prisma.project.upsert({
      where: { id: `${profile.id}-project-${project.order}` },
      update: {},
      create: {
        id: `${profile.id}-project-${project.order}`,
        title: project.title,
        description: project.description,
        projectUrl: project.projectUrl,
        isFeatured: project.isFeatured,
        order: project.order,
        profileId: profile.id,
      },
    })

    // Associar tags ao projeto
    for (const tagName of project.tags) {
      const tag = await prisma.tag.findUnique({ where: { name: tagName } })
      if (tag) {
        await prisma.projectTag.upsert({
          where: { id: `${createdProject.id}-${tag.id}` },
          update: {},
          create: {
            id: `${createdProject.id}-${tag.id}`,
            projectId: createdProject.id,
            tagId: tag.id,
          },
        })
      }
    }
  }

  // Criar configurações iniciais do site
  const siteConfigs = [
    {
      key: 'site_title',
      value: 'Neivam Carvalho - IT Digital Leader',
      description: 'Título principal do site',
      isPublic: true,
    },
    {
      key: 'site_description',
      value: 'IT Digital Leader especializado em transformação digital, BI e IA',
      description: 'Descrição meta do site',
      isPublic: true,
    },
    {
      key: 'contact_form_enabled',
      value: 'true',
      description: 'Habilitar formulário de contato',
      isPublic: true,
    },
    {
      key: 'analytics_enabled',
      value: 'false',
      description: 'Habilitar tracking de analytics',
      isPublic: false,
    },
  ]

  for (const config of siteConfigs) {
    await prisma.siteConfig.upsert({
      where: { key: config.key },
      update: {},
      create: config,
    })
  }

  console.log('✅ Seed executado com sucesso!')
  console.log(`👤 Perfil criado: ${profile.name}`)
  console.log(`🔗 ${socialLinks.length} links sociais criados`)
  console.log(`💼 ${expertiseAreas.length} áreas de expertise criadas`)
  console.log(`🏷️ ${commonTags.length} tags criadas`)
  console.log(`📁 ${projects.length} projetos criados`)
  console.log(`⚙️ ${siteConfigs.length} configurações criadas`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
