export default function Section(props: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="container-base py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{props.title}</h2>
      <div className="mt-6">{props.children}</div>
    </section>
  );
}