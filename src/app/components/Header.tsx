'use client';
import Link from 'next/link';

export default function Header() {
return (
<header className="sticky top-0 z-50">
<div className="container-base">
<div className="mt-4 rounded-xl glass px-4 py-3 flex items-center justify-between">
<Link href="#home" className="font-semibold tracking-wide text-white">
<span className="text-accent-400">•</span> Portfolio
</Link>
<nav className="hidden sm:flex gap-6 text-sm text-zinc-300">
<a href="#sobre" className="hover:text-white">Sobre</a>
<a href="#projetos" className="hover:text-white">Projetos</a>
<a href="#contato" className="hover:text-white">Contato</a>
</nav>
<a
href="#contato"
className="rounded-lg bg-accent-500/20 text-accent-300 px-3 py-1.5 border border-accent-500/30 hover:shadow-glow"
>
Fale comigo
</a>
</div>
</div>
</header>
);
}