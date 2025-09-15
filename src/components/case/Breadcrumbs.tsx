import Link from "next/link";
export default function Breadcrumbs({ current }:{ current:string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--mb-muted)] mb-4">
      <ol className="flex gap-2">
        <li><Link href="/" className="underline underline-offset-4">Home</Link></li>
        <li>/</li>
        <li><Link href="/case-studies" className="underline underline-offset-4">Case Studies</Link></li>
        <li>/</li>
        <li aria-current="page" className="text-[var(--mb-text)]">{current}</li>
      </ol>
    </nav>
  );
}





