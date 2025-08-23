type Props = {
  titulo: string;
  descricao: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ titulo, descricao, tags, link }: Props) {
  return (
    <a
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noreferrer' : undefined}
      className="group block rounded-xl glass p-5 border border-white/10 hover:border-accent-500/40 hover:shadow-glow transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{titulo}</h3>
        <span className="text-xs text-accent-300/90 border border-accent-500/30 rounded-md px-2 py-0.5">
          Ver
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-300/90 leading-relaxed">{descricao}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs text-zinc-300/90 bg-white/5 border border-white/10 rounded-md px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}