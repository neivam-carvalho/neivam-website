import Image from 'next/image';
import { me, portraitUrl } from '../lib/data';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="container-base pt-16 sm:pt-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {me.nome}
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              {me.titulo} • {me.local}
            </p>
            <p className="mt-5 text-zinc-300/90 leading-relaxed">
              {me.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {me.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm rounded-lg px-3 py-1.5 border border-white/15 hover:border-accent-500/40 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-accent-500/30 blur-2xl opacity-60" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-glow">
                <Image
                  src={portraitUrl}
                  alt="Retrato em alto contraste"
                  fill
                  sizes="(max-width: 768px) 320px, 400px"
                  className="object-cover scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sep" />
      </div>
    </section>
  );
}