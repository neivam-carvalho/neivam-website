export interface Profile {
  id: string
  name: string
  title: string
  subtitle?: string
  location: string
  email: string
  bio?: string
  photoUrl?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  socialLinks: SocialLink[]
  expertise: Expertise[]
  projects: Project[]
}

export interface SocialLink {
  id: string
  label: string
  url: string
  icon?: string
  order: number
  isVisible: boolean
  profileId: string
}

export interface Expertise {
  id: string
  title: string
  description: string
  icon?: string
  order: number
  isVisible: boolean
  profileId: string
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string
  projectUrl?: string
  githubUrl?: string
  isVisible: boolean
  isFeatured: boolean
  order: number
  profileId: string
  tags: ProjectTag[]
}

export interface ProjectTag {
  id: string
  project: Project
  projectId: string
  tag: Tag
  tagId: string
}

export interface Tag {
  id: string
  name: string
  color?: string
  projects: ProjectTag[]
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  status: string // 'UNREAD' | 'READ' | 'REPLIED' | 'ARCHIVED'
  ipAddress?: string
  userAgent?: string
  createdAt: Date
  updatedAt: Date
}

// Status constants for contact messages
export const ContactStatus = {
  UNREAD: 'UNREAD',
  READ: 'READ',
  REPLIED: 'REPLIED',
  ARCHIVED: 'ARCHIVED'
} as const

export interface PageView {
  id: string
  page: string
  userAgent?: string
  ipAddress?: string
  referrer?: string
  country?: string
  createdAt: Date
}

export interface ClickEvent {
  id: string
  element: string
  page: string
  userAgent?: string
  ipAddress?: string
  createdAt: Date
}

export interface SiteConfig {
  id: string
  key: string
  value: string
  description?: string
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

// Form Types
export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
  submit?: string
}

// Analytics Types
export interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  timestamp?: Date
}
