import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { me } from './lib/data';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="sobre" title="Sobre">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 text-zinc-300/90 leading-relaxed glass p-6 rounded-xl border border-white/10">
              <p>
                Olá! Sou {me.nome}, {me.titulo}. Gosto de unir design e engenharia
                para criar interfaces fluidas, acessíveis e com performance exemplar.
                Trabalho com React/Next.js, estilização com Tailwind e boas práticas
                de SEO. Este site adota um visual escuro e minimalista, inspirado
                pelo seu retrato em alto contraste — foco no essencial e um toque
                de cor para guiar o olhar.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="glass p-4 rounded-lg border border-white/10">
                <span className="text-white font-medium">Stack</span>
                <p className="text-sm text-zinc-300/90 mt-1">Next.js, React, TypeScript, Tailwind</p>
              </li>
              <li className="glass p-4 rounded-lg border border-white/10">
                <span className="text-white font-medium">Foco</span>
                <p className="text-sm text-zinc-300/90 mt-1">UI/UX, Acessibilidade, Performance</p>
              </li>
              <li className="glass p-4 rounded-lg border border-white/10">
                <span className="text-white font-medium">Disponível</span>
                <p className="text-sm text-zinc-300/90 mt-1">Freelance e projetos interessantes</p>
              </li>
            </ul>
          </div>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {me.projetos.map((p) => (
              <ProjectCard
                key={p.titulo}
                titulo={p.titulo}
                descricao={p.descricao}
                tags={p.tags}
                link={p.link}
              />
            ))}
          </div>
        </Section>

        <Section id="contato" title="Contato">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl border border-white/10">
              <p className="text-zinc-300/90">
                Tem uma ideia ou vaga? Vamos conversar. Envie um e-mail, chame nas redes
                ou agende uma call. Respondo em até 24h.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${me.email}`}
                  className="rounded-lg bg-accent-500/20 text-accent-300 px-4 py-2 border border-accent-500/30 hover:shadow-glow"
                >
                  Enviar e-mail
                </a>
                {me.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg px-4 py-2 border border-white/15 text-zinc-300 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="glass p-6 rounded-xl border border-white/10">
              <form
                action={`mailto:${me.email}`}
                method="post"
                className="grid gap-4"
              >
                <input
                  name="name"
                  placeholder="Seu nome"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent-500/40"
                />
                <input
                  name="from"
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent-500/40"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Mensagem"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent-500/40"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-accent-500/20 text-accent-300 px-4 py-2 border border-accent-500/30 hover:shadow-glow"
                >
                  Enviar
                </button>
                <p className="text-xs text-zinc-400">
                  Dica: para um formulário real, troque este mailto por um backend ou Formspree/Resend.
                </p>
              </form>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}