export default function Section({ id, title, children }:{ id?:string; title?:string; children:React.ReactNode; }) {
  return (
    <section id={id} className="container mx-auto px-6 py-10">
      {title && <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}





