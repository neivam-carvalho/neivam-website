import { me } from '../lib/data';

export default function Footer() {
  return (
    <footer className="container-base py-10">
      <div className="sep mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} {me.nome}. Todos os direitos reservados.</p>
        <a
          href={`mailto:${me.email}`}
          className="text-accent-300 hover:text-white"
        >
          {me.email}
        </a>
      </div>
    </footer>
  );
}